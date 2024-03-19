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
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/event-users', (req, res) => {
    console.log('users', req.body);
    io.emit('event-users', `${req.body.id}`)
    res.send('Event success.');
});

app.post('/list-conversations-users', (req, res) => {
    console.log('users', req.body);
    io.emit('list-conversations-users', `${req.body.id}`)
    res.send('Event success.');
});

const port = 3000;
server.listen(port, () => {
    console.log(`HOLLA SERVER running on port ${port}`);
});