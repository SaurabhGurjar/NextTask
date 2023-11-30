import closeIcon from '../../assets/icons/cross.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

export default function assigneeScript() {
    const assigneeForm = document.getElementById('assignee-form');
    const input = document.getElementById('assignee-name');
    const confirmBtn = document.getElementById('assignee-confirm-btn');
    const confirmBtnIcon = document.getElementById('date-confirm-btn-icon');
    const assigneeBtn = document.getElementById('assignee-btn');
    
    function isDateEntered() {
        return (input.value !== '')
    }

    function toggleConfirmBtn() {
        console.log(confirmBtn, arrowIcon);
        if(isDateEntered()) {
            confirmBtnIcon.src = `${arrowIcon}`;
        } else {
            confirmBtnIcon.src = `${closeIcon}`;
        }
    }

    confirmBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if(isDateEntered()) {
            assigneeBtn.value = input.value;
        }
        assigneeForm.remove();    
    });
    input.onkeyup = () => {toggleConfirmBtn()};
}