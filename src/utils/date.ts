export const getStartsTime = (startDate: string) => {
    const start = new Date(startDate).getTime();
    const now = Date.now();
    const diff = start - now;

    if (diff <= 0) {
        return null;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return { days, hours, minutes };
}

export const formatDateString = (dateStr: string) => {
    const date = new Date(dateStr);

    const day = date.getDate();
    const daySuffix = (day: number) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    const formattedDay = `${day}${daySuffix(day)}`;
    const formattedMonth = date.toLocaleString('default', { month: 'short' });
    const formattedYear = date.getFullYear().toString().slice(-2);
    const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    return `${formattedDay} ${formattedMonth}'${formattedYear} ${formattedTime}`;
}

export type ChallengeStatusT = {
    status: 'active' | 'upcoming' | 'past';
    time: string;
    timeIn?: { days: number; hours: number; minutes: number } | null;
}

export const formatChallengeDate = (startAt: string, endAt: string) => {
    let status: 'active' | 'upcoming' | 'past' = 'active';
    const endsIn = getStartsTime(endAt);
    let time: string = '';
    let timeIn: ChallengeStatusT['timeIn'] | null = endsIn;

    const startsIn = getStartsTime(startAt);

    if (startsIn) {
        status = 'upcoming';
        timeIn = startsIn;
    }

    if (new Date(endAt) < new Date()) {
        status = 'past';
        time = formatDateString(endAt);
    }

    return { status, time, timeIn };
}