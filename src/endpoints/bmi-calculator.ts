import express from 'express';

const bmiRouter = express.Router();

const server = express();

server.get('/test', (req, res)=> {
res.send('BMI Calculator');
});

module.exports = bmiRouter;