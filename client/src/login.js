const email = document.querySelector(".email .input")
const passw = document.querySelector(".password .input")
const btn = document.querySelector(".button .btn")
const info = document.querySelector(".email .vector")

function checkEmail(mail) {
    try {
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
        passw.style = "color: red"
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

btn.addEventListener("click", () => {   
    try {
        checkEmail(email.value)
        checkPassword(passw.value)

        

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


