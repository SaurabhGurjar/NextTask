import closeIcon from '../../assets/icons/cross.svg';

export default function assigneeForm() {
    return (
        `<div id="assignee-form">
            <input type="text" class="task-field" id="assignee-name" name="assignee" autocomplete="off" placeholder="Name">
            <button id="assignee-confirm-btn" class="confirm-btn">
                <img src="${closeIcon}" id="date-confirm-btn-icon">
            </button>
        </div>
        `
    );
}