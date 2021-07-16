class User {

  constructor(id, email, password, birthDate) {
    this.id = id,
    this.email = email,
    this.password = password,
    this.birthDate = birthDate
  }
}

let myBirthday = new Date("December 17, 1995 03:24:00");


const myUser = new User(id= 2, email='myemail', password='myPassword', birthdate= myBirthday)
const myUpdatedUser = new User(id=myUser.id, email='myNewEmail', password='newPassword', birthDate=myUser.birthDate)


module.exports = {
  myUser,
  myUpdatedUser,
  User
};