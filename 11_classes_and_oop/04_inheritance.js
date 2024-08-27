class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // automatically accesses the given variable 
        this.email = email;
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const hitesh = new Teacher("hitesh", "hitesh@google.com", "123")

hitesh.addCourse()
hitesh.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(hitesh === masalaChai);
console.log(hitesh instanceof Teacher);
console.log(hitesh instanceof User);

