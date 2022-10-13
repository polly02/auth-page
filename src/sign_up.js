const email = document.querySelector(".email .input")
const passw = document.querySelector(".password .input")
const conf_passw = document.querySelector(".confirm-psw .input")
const btn = document.querySelector(".button .btn")
const info = document.querySelector(".email .vector")

function checkEmail(mail) {
    try{
        if (!mail) throw new Error("Input is empty")
        if (!/([\w\.-]+@[a-z]+\.[a-z]{1,3})|([\d]{3}[\d]{2}[\d]{7})|(\+[\d]{3}[\d]{2}[\d]{7})/g.test(mail)) throw new Error("Incorrect format")
        email.style = "color: green"
    } catch (error) {
        email.value = error.message
        email.style = "color: red"
        throw new Error(error.message)
    }
}

function checkPwd(password, confirmPassword) {
    try {      
        if (!password || !confirmPassword) throw new Error("Input is empty")
        if (password !== confirmPassword) throw new Error("Incorret password")
        conf_passw.style = "color: green"
        passw.style = "color: green"
    } catch (error) {
        conf_passw.style = "color: red"
        passw.style = "color: red"
        throw new Error(error.message)
    }
}

btn.addEventListener("click", () => {
    try {
        checkEmail(email.value)
        checkPwd(conf_passw.value, passw.value)
        alert("You are logged in to the system")
    } catch (error) {
        alert("Try again")
    }
})

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

info.addEventListener("mouseover", () => {
    document.querySelector(".info").style = "display: block"
})

info.addEventListener("mouseout", () => {
    document.querySelector(".info").style = "display: none"
})


