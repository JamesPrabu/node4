import express from 'express';

const server = express();

server.get('/', (req, res)=> {
res.send('Hello World 11111');
});

server.listen(process.env.PORT || 3400, () => {
    console.log('Server is Running'); 
});