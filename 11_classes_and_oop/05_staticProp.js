class User {
    constructor(username){
        this.username = username
    }

    loggedIn(){
        console.log(`Username: ${this.username} has logged in`);
        
    }

    static createId(){  // static stops the access of properties or methods to those objects that are instantiated from the same class
        return `123`
    }
}

// const hitesh = new User("hitesh")
// const idCreate = hitesh.createId()
// console.log(idCreate);

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const chai = new Teacher("hitesh", "hitesh@example.com")

console.log(chai.loggedIn());
const idCreate = chai.createId()
console.log(idCreate);