import express from 'express';

const server = express();

server.get('/', (req, res)=> {
res.send('Hello World 11111');
});
server.listen(3400, () => {
    console.log('Server is Running'); 
});