export interface IChallenge {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    img: string;
    id: string;
    level: 'easy' | 'medium' | 'hard';
}