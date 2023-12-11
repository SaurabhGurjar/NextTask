import { format } from "date-fns";

export function formatDate(dateStr) {
    const date = dateStr.split('-').map((item) => parseInt(item));
    return format(new Date(date[0], date[1] - 1, date[2]), 'MMM d yyy').toString();
}

export function dueToday (dateStr) {
    const date = dateStr.split('-').map((item) => parseInt(item));
    const dateToday = new Date();
    const dateTodayDay = dateToday.getDate();
    const dateTodayMonth = dateToday.getMonth() + 1;
    const dateTodayYear = dateToday.getFullYear();

    return (date[2] === dateTodayDay) && (date[1] === dateTodayMonth) && (date[0] === dateTodayYear);
}

export function todayDate () {
   return new Date().getDate();
}