import calIcon from '../../assets/icons/task-cal.svg';
import '../../css/task-template.css';

export default function taskTemplate(taskId, taskObj) {
    return (`
            <div class="task-container" id="${taskId}">
                <div class="checkbox-heading-container">
                    <input type="checkbox" id="${taskId}-c" class="task-cbox">
                    <span id="${taskId}-h" class="task-heading">${taskObj.getHeading()}</span>
                </div>
                <div class="date-description-container">
                    <span id="${taskId}-d" class="task-description">${taskObj.getDescription()}</span>
                    <span id="${taskId}-date" class="task-date"><img src="${calIcon}" class="task-date-icon">${taskObj.getDate()}</span>
                </div>
            </div>
    `);
}