function EntryForm(props) {
    return (
        <section className="entry">
            <form className="entry__form" name="login" onSubmit="">
                <h1 className="entry__title">{props.title}</h1>
                <input
                    type="email"
                    placeholder="Email"
                    className="entry__input"
                    name="email"
                    id="email"
                    required />
                <input
                    type="password"
                    placeholder="Пароль"
                    className="entry__input"
                    name="password"
                    id="password"
                    required />
                <button className="entry__submit-button" type="submit">{props.buttonName}</button>
                {props.children}
            </form>
        </section >
    )
}

export default EntryForm