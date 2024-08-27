class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(mail){
        this._email = mail
    }

    // In the getters and setters, we have changed the property from "password" to "_password" due to the error. As they have same name to the property in constructor as well as getters/setters, both of these continously call the property which fills the call stack to its brim and the size exceeds
    get password(){
        // return this._password.toUpperCase()
        return `${this._password}andChai`
    }

    set password(value){
        this._password = value
    }


}

const hitesh = new User("hitesh@google.com", "abc")

console.log(hitesh.email);
console.log(hitesh.password);
