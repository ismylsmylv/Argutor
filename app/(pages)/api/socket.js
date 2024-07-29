import { Server } from 'socket.io';

const SocketHandler = (req, res) => {
    if (!res.socket.server.io) {
        console.log('Setting up Socket.io server');
        const io = new Server(res.socket.server, {
            path: '/api/socketio',
        });

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
    }
    res.end();
};

export default SocketHandler;
