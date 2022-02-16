import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.js';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Login from './Login.js';
import Register from './Register.js';
import InfoTooltip from './InfoTooltip.js';
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import { api } from '../utils/Api.js';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [currentUser, setCurrentUser] = React.useState({});

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  }
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  const handleUpdateUser = ({ name, about }) => {
    api.editUserData({ name, about })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }
  const handleUpdateAvatar = ({ avatar }) => {
    api.changeAvatar({ avatar })
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch(err => console.log(err))
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(like => like._id === currentUser._id);
    // отправить запрос в API и обновить данные карточки
    api.changeLikeCardStatus(card, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch(err => console.log(err));
  }

  const handleAddPlaceSubmit = (newCard) => {
    api.addNewItem(newCard)
      .then((newCard) => {
        setCards([newCard, ...cards])
        closeAllPopups()
      })
      .catch(err => console.log(err))

  }

  React.useEffect(() => {
    api.getUserData()
      .then(userData => setCurrentUser(userData))
      .catch(err => console.log(err))
  }, [])

  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <BrowserRouter>
        <div className="page">
          <Header />
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>

          <ProtectedRoute path="/">
            <Main
              cards={cards}
              onEditAvatar={handleEditAvatarClick}
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
            </ProtectedRoute>


          {/* попап редактирования профиля */}
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          {/* попап редактирования аватара */}
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          {/* попап добавления карточки */}
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          {/* <InfoTooltip 
          isOpen="true"
          /> */}

        </div>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />


      </BrowserRouter>
    </CurrentUserContext.Provider>
  )
}

export default App