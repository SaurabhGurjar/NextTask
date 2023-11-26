// const choosedYear =  document.getElementById('yy');
// const choosedMonth =  document.getElementsById('dd');

export function daysInMonths(month, leapYear) {
    const thirtyDayMonths = ['apr', 'jun', 'sep', 'nov'];
    const daysInAMonth = 0;
    if (month === 'feb') {
        if (leapYear) {
            daysInAMonth = 29;
        } else {
            daysInAMonth = 28;
        }
    } else if (month in thirtyDayMonths) {
        daysInAMonth = 30;
    } else {
        daysInAMonth = 31;
    }
    return createDays(daysInAMonth);
}

function createDays(lastDay) {
    let days = '';
    for (let i = 1; i <= lastDay; i++) {
        days += `<option value="${i}">${i}</option>`;
    }
    return days;
}

function createMonths() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthsHTML = '';
    months.forEach((month) => {
        monthsHTML += `<option value="${month}">${month}</option>`;
    });
    return monthsHTML;
}

function createYears() {
    const startingYear = 2023;
    const endingYear = 2200;
    let yearsHTML = '';
    for (let i = startingYear; i <= endingYear; i++) {
        yearsHTML += `<option value="${i}">${i}</option>`;
    }

    return yearsHTML;
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

export default function datePicker() {   
    const daysDefault = 31
    return `<div class="date-form-container">
        <select id="dd" name="day" class="date-fields">
            <option value="" disable selected>Day</option>
            ${createDays(daysDefault)}
            </select>
            <select id="mm" name="months" class="date-fields">
            <option value="" disable selected>Month</option>
            ${createMonths()}
            </select>
            <select id="yy" name="years" class="date-fields">
            <option value="" disable selected>Year</option>
            ${createYears()}
        </select>
    </div>`;
}