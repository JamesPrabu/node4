export class Person {
    public gender: string = '';
    public heightCm: number = 0;
    public weightKg: number = 0;
    public bmi?: number;
    public bmiCategory?: string;
    public healthRisk?: string;
}

export interface IPerson {
    gender: string;
    heightCm: number;
    weightKg: number;
    bmi?: string;
    bmiCategory?: string;
    healthRisk?: string;
}