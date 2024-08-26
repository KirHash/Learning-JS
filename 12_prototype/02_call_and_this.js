/*
              ---------------------------------------------                                         
              |                                           |
              |     -----------------------------------   |
              |     |                                 |   |
              |     |                                 |   |
              |     -----------------------------------   |                                      
              |     -----------------------------------   |
              |     |                                 |   |
              |     |                                 |   |
              |     -----------------------------------   |                                     
              |     -----------------------------------   |                function(){
              |     |             callMe()            |   |                     callMe()
              |     |                 EC              |   |                 }
              |     -----------------------------------   |                                     
              |     -----------------------------------   |
              |     |                                 |   |
              |     |                                 |   |
              |     -----------------------------------   |                                     
              |     -----------------------------------   |
              |     |                                 |   |
              |     |                                 |   |
              |     -----------------------------------   |                                     
              |     -----------------------------------   |
              |     |             Global              |   |
              |     |               EC                |   |
              |     -----------------------------------   |                                        
              --------------------------------------------                                           
 
When we have access to window object, this keyword refers to window object
But in node environment, this keyword refers to an empty object
*/

function setUsername(username){
    // Complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    // setUsername(username)
    setUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser('chai', 'chai@fb.com', '123') 
console.log(chai); //Returns only email and password

//The username is not getting called in setUsername, because we have only given the reference of username(line 40)
// As soon as setUsername gets called, the execution content of it gets removed from the call stack and so are the variables inside it
// To hold the reference of it, we have to use call function
