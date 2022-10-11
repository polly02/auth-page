const email = document.querySelector(".email .input")
const passw = document.querySelector(".password .input")
const conf_passw = document.querySelector(".confirm-psw .input")
const btn = document.querySelector(".button .btn")
const info = document.querySelector(".email .vector")

function checkEmail(mail) {
    try{
        if (!/([\w\.-]+@[a-z]+\.[a-z]{1,3})|([\d]{3}[\d]{2}[\d]{7})|(\+[\d]{3}[\d]{2}[\d]{7})/g.test(mail)) throw new Error("Incorrect format")
        if (!mail) throw new Error("Input is empty")
        email.style = "color: green"
    } catch (error) {
        email.value = error.message
        email.style = "color: red"
    }
}

function checkPassword(password) {
    try {
        if (!/[\wа-яА-Я\-\/+&$%#!\.\\\/\|]{8,}/g.test(password)) throw new Error("Password must contain at least 8 characters")
        if (!password) throw new Error("Input is empty")
        passw.style = "color: green"
    } catch (error) {
        passw.value = error.message
        passw.style = "color: red"
    }
}

function checkConfirmPassword(password, confirmPassword) {
    try {
        if (password !== confirmPassword) throw new Error("Incorret password")
        if (!password) throw new Error("Input is empty")
        conf_passw.style = "color: green"
    } catch (error) {
        conf_passw.value = error.message
        conf_passw.style = "color: red"
    }
}

email.addEventListener("click", () => {
    email.value = ""
    email.style = "color: #7B8389"
})

passw.addEventListener("click", () => {
    passw.value = ""
    passw.style = "color: #7B8389"
})

conf_passw.addEventListener("click", () => {
    conf_passw.value = ""
    conf_passw.style = "color: #7B8389"
})

btn.addEventListener("click", () => {
    // try {
    //     checkEmail(email.value)
    //     email.style = "color: green"
    // } catch (error) {
    //     email.value = error.message
    //     email.style = "color: red"
    // }

    // try {
    //     checkPassword(passw.value)
    //     passw.style = "color: green"
    // } catch (error) {
    //     passw.value = error.message
    //     passw.style = "color: red"
    // }

    // try {
    //     checkConfirmPassword(conf_passw.value, passw.value)
    //     conf_passw.style = "color: green"
    // } catch (error) {
    //     conf_passw.value = error.message
    //     conf_passw.style = "color: red"
    // }

    try {
        checkEmail(email.value)
        checkPassword(passw.value)
        checkConfirmPassword(conf_passw.value, passw.value)
        alert("You are logged in to the system")
    } catch (error) {
        alert("Try again")
    }
})

info.addEventListener("mouseover", () => {
    document.querySelector(".info").style = "display: block"
})

info.addEventListener("mouseout", () => {
    document.querySelector(".info").style = "display: none"
})


