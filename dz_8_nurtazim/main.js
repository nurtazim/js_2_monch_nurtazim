
class User {
    constructor(username, age, password) {
        this.username = username
        this.age = age
        this.password = password
    }

    Login() {
        if (/^[a-zA-Z]+$/.test(this.username) === false) {
            alert('В логине должны быть только латинские буквы');
            return false;
        }
        if (this.username.length < 4 || this.username.length > 20) {
            alert('В логине должен быть от 4 до 20 символов');
            return false;
        }
        if (/^[1-9]+$/.test(this.age) === false || this.age >= 100) {
            alert("в возрасте должны быть только цифры или возраст должен быть меньше 100 ")
            return false
        }
        if (/^[a-zA-Z1-9]+$/.test(this.password) === false) {
            alert('В логине должны быть только латинские буквы и цифры ');
            return false;
        }
        if (String(this.password).length <= 8) {
            alert('В пароле  должно  быть  менее  8 символов ');
            return false;
        }
    }
}

const user = new User("ffff", 22, 445555555555)
console.log(user)
user.Login()


