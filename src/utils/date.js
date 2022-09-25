const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

function getDateFromTime(time) {
    return new Date(time);
}

function getMonthAsText(month) {
    return months[month];
}

function getDayOfTheWeekAsText(day) {
    return days[day];
}

// returns the hours of the time (if it's 14:45 it will return 14)
export function getHourFromTime(time) {
    return getDateFromTime(time).getHours();
}

// returns the number of hours until the end of the day
export function getHoursUntilEndOfDay() {
    return 24 - getHourFromTime(Date.now());
}

// returns the day of the month (22 for example)
export function getDayFromTime(time) {
    return getDateFromTime(time).getDate();
}

// returns the name of the month of the year
export function getMonthFromTime(time) {
    return getMonthAsText(getDateFromTime(time).getMonth());
}

// returns the full year (2012 22 for example)
export function getYearFromTime(time) {
    return getDateFromTime(time).getFullYear();
}

// returns the name of the day of the week
export function getDayOfTheWeek(time) {
    return getDayOfTheWeekAsText(getDateFromTime(time).getDay());
}

// returns the day and the month (February 22 for example)
export function getFormattedDateFromTime(time) {
    return getMonthFromTime(time) + ' ' + getDayFromTime(time);
}
