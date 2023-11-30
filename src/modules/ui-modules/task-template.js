import calIcon from '../../assets/icons/task-cal.svg';
import personIcon from '../../assets/icons/person.svg';
import editIcon from '../../assets/icons/edit.svg';
import delIcon from '../../assets/icons/delete.svg';


import '../../css/task-template.css';

export default function taskTemplate(taskId, taskObj) {
    return (`
            <div class="task-container" id="${taskId}">
                <div class="checkbox-heading-interface-btn-container">
                    <div class="checkbox-heading-btn-container">
                        <input type="checkbox" id="${taskId}-c" class="task-cbox">
                        <span id="${taskId}-h" class="task-heading">${taskObj.getHeading()}</span>
                    </div>
                    <div class="task-edit-del-btn-container">
                        <button class="task-interface-btn" id="${taskId}-edit"><img src="${editIcon}" class="task-date-icon"></button>
                        <button class="task-interface-btn" id="${taskId}-del"><img src="${delIcon}" class="task-date-icon"></button>
                    </div>
                </div>
                <div class="date-description-container">
                    <div class="date-description-wrapper">
                        <span id="${taskId}-d" class="task-description">${taskObj.getDescription()}</span>
                        <span id="${taskId}-date" class="task-date"><img src="${calIcon}" class="task-date-icon">${taskObj.getDate()}</span>
                    </div>
                    <div class="priority-assignee-wrappper">
                        <span id="${taskId}-p" class="task-priority">${taskObj.getPriority().charAt(0).toUpperCase()+taskObj.getPriority().slice(1)}</span>
                        <span id="${taskId}-name" class="task-name"><img src="${personIcon}" class="task-date-icon">${taskObj.getAssignee().charAt(0).toUpperCase()+taskObj.getAssignee().slice(1)}</span>
                    </div>                
                </div>
            </div>
    `);
}