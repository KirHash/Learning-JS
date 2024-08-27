// This is an older syntax, before classes were introduced in JS

// function based syntax
function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(pass){
            this._password = pass
        }
    })
}

const kirhash = new User("kirhash@google.com", "abc")

console.log(kirhash.email);
console.log(kirhash.password);
