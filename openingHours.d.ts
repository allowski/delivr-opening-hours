export class OpeningHour {
    _id: string;
    dayOfWeek: number;
    hours: {
        _id: string;
        from: number;
        to: number;
    }[];
}