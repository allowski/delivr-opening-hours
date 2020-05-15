export class OpeningHour {
    _id?: string;
    from?: number;
    to?: number;
}

export class OpeningHours {
    _id?: string;
    dayOfWeek?: number;
    hours?: OpeningHour[];
}