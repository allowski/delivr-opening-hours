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

export function isOpen(openingHours: OpeningHours[], defaultOpen: boolean, date?: Date);