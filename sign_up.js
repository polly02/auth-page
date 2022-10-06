const email = document.querySelector(".email .input")
const passw = document.querySelector(".password .input")
const conf_passw = document.querySelector(".confirm-psw .input")
const btn = document.querySelector(".button .btn")
const info = document.querySelector(".email .vector")

function checkEmail(input) {
    if (!/([a-zA-A.-_0-9]+@[a-z]+\.[a-z]{1,3})|([0-9]{3}[0-9]{2}[0-9]{7})|(\+[0-9]{3}[0-9]{2}[0-9]{7})/g.test(input)) throw new Error("Incorrect format")
    if (!input) throw new Error("Input is empty")
    return true
}

function checkPassword(input) {
    if (!/[\wа-яА-Я\-_\/+&$%#!\.\\\/\|]{8,}/g.test(input)) throw new Error("Password must contain at least 8 characters")
    if (!input) throw new Error("Input is empty")
    return true
}

function checkConfirmPassword(input1, input2) {
    if (input1 !== input2) throw new Error("Incorret password")
    if (!input1) throw new Error("Input is empty")
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
    try {
        checkEmail(email.value)
        email.style = "color: green"
    } catch (error) {
        email.value = error.message
        email.style = "color: red"
    }

    try {
        checkPassword(passw.value)
        passw.style = "color: green"
    } catch (error) {
        passw.value = error.message
        passw.style = "color: red"
    }

    try {
        checkConfirmPassword(conf_passw.value, passw.value)
        conf_passw.style = "color: green"
    } catch (error) {
        conf_passw.value = error.message
        conf_passw.style = "color: red"
    }

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


