import arrowIcon from '../../assets/icons/arrow.svg';
import closeIcon from '../../assets/icons/cross.svg';

export default function dateSript() {
    const dateForm = document.querySelector('.date-form-container');
    const day = document.getElementById('dd');
    const month = document.getElementById('mm');
    const year = document.getElementById('yy');
    const dateBtn = document.getElementById('date');
    const confirmDateBtn = document.getElementById('date-confirm-btn');
    const confirmDateBtnIcon = document.getElementById('date-confirm-btn-icon')
    

    function isLeapYear(leapYear) {
        if (Number(leapYear) % 4 === 0) {
            return true;
        } else {
            return false;
        }
    }
    
    function isDateEntered() {
        return (day.value !== 'null' && month.value !== 'null' && year.value !== 'null')
    }
    
    function toggleConfirmBtn() {
        if(isDateEntered()) {
            confirmDateBtnIcon.src = `${arrowIcon}`;
        } else {
            confirmDateBtnIcon.src = `${closeIcon}`;
        }
    }
    
    function changeDay(month, year) {
        const allDays = document.querySelectorAll('.op-dd');
        if ((!isLeapYear(year) || year === '') && month === 'feb') {
            delDays(29, allDays.length);
            return;
        }
        if (isLeapYear(year) && month === 'feb') {
            if(allDays.length >= 29) delDays(29, allDays.length);
            addDays(29);
            return;
        }
        if (month === 'apr' || month === 'sep' || month === 'jun' || month === 'nov') {
            // Delete extra day
            if (allDays.length > 30) {
                delDays(31);
            } 
            if (allDays.length <= 29) {
                addDays(29, allDays.length);
            }
            return;
        }
        if (month === 'jan' || month === 'mar' || month === 'may' || month === 'jul' || month === 'aug' || month === 'dec') {
            if (allDays.length <= 29) {
                addDays(allDays.length + 1, 31);
            } else if(allDays.length === 30) {
                addDays(31);
            }
            return;
        }
    }

    function delDays(start, end) {
        if(end === undefined) end = start;
        for (let i = start; i <= end; i++) {
            let id = `dd-${i}`;
            document.getElementById(id).remove();
        }
    }

    function addDays(start, end) {
        if(end === undefined) end = start;
        for (let i = start; i <= end; i++) {
            day.innerHTML += `<option value="${i}" id="dd-${i}" class="op-dd">${i}</option>`;
        }
    }

    confirmDateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (isDateEntered()) {
            dateBtn.value = ` ${day.value} ${month.value.charAt(0).toUpperCase() + month.value.slice(1)} ${year.value}`;
            dateForm.remove();
        } else {
            dateForm.remove();
        }
    });

    day.onchange = () => {
        toggleConfirmBtn();
    }
    month.addEventListener(('change'), () => {
        changeDay(month.value, year.value);
        toggleConfirmBtn();
    });

    year.addEventListener(('change'), () => {
        changeDay(month.value, year.value);
        toggleConfirmBtn();

    });
}
function daysInMonths(month, leapYear) {
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

