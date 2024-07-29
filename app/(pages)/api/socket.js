// pages/api/socket.js
import { Server } from 'socket.io';

export default function handler(req, res) {
    if (!res.socket.server.io) {
        console.log('Setting up socket.io');

        const io = new Server(res.socket.server);

        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });

            socket.on('chat message', (msg) => {
                io.emit('chat message', msg);
            });
        });

        res.socket.server.io = io;
    } else {
        console.log('socket.io already running');
    }
    res.end();
}
