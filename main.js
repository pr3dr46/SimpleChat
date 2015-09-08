var chat = require('simplechat');

chat.addUser('pera');

var users = chat.getUsers();

console.log(users);