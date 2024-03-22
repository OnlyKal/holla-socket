const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    serveClient: true,
    cors: {
        origin: '*',
    }
});

app.use(express.json());


io.on('connection', (socket) => {
        //  socket.on('login',(data)=>{
        //      console.log(data)
        //     //  socket.on('/response-message-socketio', (req, res) => {
        //     //     console.log('Event', req.body);
        //     //     io.emit('response-message-socketio', req.body)
        //     //     // res.send('Event success.');
        //     // });
        //  })
        console.log("CONNECTED")
        socket.on('response-message-socketio', (data) => {
            console.log('Event', data);
            io.emit('response-message-socketio',data)
            // res.send('Event success.');
        });
      
});




// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });


// app.post('/event-users', (req, res) => {
//     console.log('users', req.body);
//     io.emit('event-users', `${req.body.id}`)
//     res.send('Event success.');
// });

// app.post('/list-conversations-users', (req, res) => {
//     console.log('users', req.body);
//     io.emit('list-conversations-users', `${req.body.id}`)
//     res.send('Event success.');
// });

const port = 3000;
server.listen(port, () => {
    console.log(`HOLLA SERVER running on port ${port}`);
});