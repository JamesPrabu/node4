import express from 'express';
import { IPerson, Person } from './models/person';

const server = express();
const BMIEndpoints = require('./endpoints/bmi-calculator');

server.get('/', (req, res)=> {
res.send('Hello World !!!');
});

server.get('/bmi', (req, res)=> {

    const bmiData2: IPerson[] = [
        { gender: "Male", heightCm: 171, weightKg: 96 }, 
        // { gender: "Male", heightCm: 161, weightKg:85 }, 
        // { gender: "Male", heightCm: 180, weightKg: 77 }, 
        // { gender: "Female", heightCm: 166,weightKg: 62}, 
        // { gender: "Female", heightCm: 150, weightKg: 70}, 
        // { gender: "Female", heightCm: 167, weightKg: 82, bmi: 'bmi', bmiCategory: 'bmiCategory', healthRisk: 'healthRisk'}
    ];

    const bmiData: Person[] = [
        { gender: "Male", heightCm: 175, weightKg: 40 }, 
        { gender: "Male", heightCm: 171, weightKg: 120 }, 
        { gender: "Male", heightCm: 161, weightKg:85 }, 
        { gender: "Male", heightCm: 180, weightKg: 77 }, 
        { gender: "Female", heightCm: 166,weightKg: 62}, 
        { gender: "Female", heightCm: 150, weightKg: 70}, 
        { gender: "Female", heightCm: 167, weightKg: 82}
    ];

    for(const data of bmiData) {
        calc(data);
    }
    const result = bmiData.filter(x => x.bmi >= 25 && x.bmi <= 29.9);
    res.send(result);
    });

    function calc(data: Person) {
        data.bmi = parseFloat((data.weightKg / Math.pow((data.heightCm/100),2)).toFixed(2));
        if (data.bmi <= 18.4) {
            data.bmiCategory = 'Underweight';
            data.healthRisk = 'Malnutrition risk';
        } else if (data.bmi >= 18.5 && data.bmi <= 24.9) {
            data.bmiCategory = 'Normal weight';
            data.healthRisk = 'risk Low';
        } else if (data.bmi >= 25 && data.bmi <= 29.9) {
            data.bmiCategory = 'Overweight';
            data.healthRisk = 'Enhanced risk';
        } else if (data.bmi >= 30 && data.bmi <= 34.9) {
            data.bmiCategory = 'Moderately obese';
            data.healthRisk = 'Medium risk';
        } else if (data.bmi >= 35 && data.bmi <= 39.9) {
            data.bmiCategory = 'Severely obese';
            data.healthRisk = 'High risk';
        } else if (data.bmi >= 40) {
            data.bmiCategory = 'Very severely obese';
            data.healthRisk = 'Very high risk';                                            
        }
    }

server.use('bmi', BMIEndpoints);

server.listen(process.env.PORT || 3400, () => {
    console.log('Server is Running'); 
});