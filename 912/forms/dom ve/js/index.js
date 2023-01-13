let login = document.forms.login 

    login.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(login)

    fm.forEach((value, key) => {
        user[key] = value

    })


    console.log(user);
}