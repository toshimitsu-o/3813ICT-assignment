const express = require('express'); // Import express.js for routing
const app = express(); // The app object denotes the express application.
// Cross origin recource sharing to cater for port 4200 and 3000
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http,{
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"]
    }
});
const sockets = require('./socket.js');
const server = require('./listen.js');

// Degine port used for the server
const PORT = 3000;

// Apply express midleware
app.use(cors());

app.use(express.json()); // Mounts the specified middleware function

// Point to Angular web page
app.use(express.static(__dirname + '../dist/chat/'));
console.log(__dirname);

// Start the server on port 3000.
// app.listen(3000, () => {
//     var d = new Date();
//     var n = d.getHours();
//     var m = d.getMinutes();
//     console.log('Server has been started at: ' + n + ':' + m);
// });

// Setup Socket
sockets.connect(io, PORT);

// Start server listening for requests
server.listen(http, PORT);

// Authentication

// Defining class for User
class User {
    constructor(username, email, password, role, valid) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.valid = valid;
    }
}

// Users details
let user1 = new User("user1", "user1@test.com", "user1", "user", false);
let user2 = new User("user2", "user2@test.com", "user2", "superAdmin", false);
let user3 = new User("user3", "user3@test.com", "user3", "groupAdmin", false);
// Array of users
let users = [user1, user2, user3];

// Route for API authentication
app.post('/auth/login', require('./router/userLogin.js'));
app.post('/auth/update', require('./router/userUpdate.js'));