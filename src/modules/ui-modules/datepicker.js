import closeIcon from '../../assets/icons/cross.svg';

function createDays(lastDay) {
    let days = '';
    let Zero = 0;
    for (let i = 1; i <= lastDay; i++) {
        if(i > 9) {
            Zero = '';
        }
        days += `<option value="${Zero}${i}" id="dd-${Zero}${i}" class="op-dd">${Zero}${i}</option>`;
    }
    return days;
}

function createMonths() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let monthsHTML = '';
    months.forEach((month) => {
        monthsHTML += `<option value="${month.toLowerCase()}" id="${month.toLowerCase()}">${month}</option>`;
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

export default function datePicker() {   
    const daysDefault = 31
    return (
                `
                    <div class="date-form-container" id="date-picker">
                        <select id="mm" name="months" class="date-fields">
                            <option value="null" disable selected>Month</option>
                            ${createMonths()}
                        </select>
                        <select id="dd" name="day" class="date-fields">
                            <option value="null" disable selected>Day</option>
                            ${createDays(daysDefault)}
                        </select>
                        <select id="yy" name="years" class="date-fields">
                            <option value="null" disable selected>Year</option>
                            ${createYears()}
                        </select>
                        <button id="date-confirm-btn" class="confirm-btn">
                            <img src="${closeIcon}" id="date-confirm-btn-icon">
                        </button>
                    </div>
                `
            );
}