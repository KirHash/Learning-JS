// Object based syntax
const User = {
    _email: 'kirhash@google.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User)
console.log(tea.email);

// Getters and Setters are special methods that which are placed over the property
// get is used for getting the method from the memory and overrides the property
// set is used for putting the method back but treats it as a property. When it accesses that property, it provides a value which is stored