import '../../css/task-form.css';

import assigneeIcon from '../../assets/icons/person.svg';
import dateIcon from '../../assets/icons/calendar.svg';
import priorityIcon from '../../assets/icons/flag.svg';
import { projectsArr } from "../data";

function createOptionElement (projects) {
    let projectsOption = '';
    projects.forEach((project) => {
        projectsOption += `<option value="${project.id}">${project.getName()}</option>`
    });
    return projectsOption;
}

export default function taskForm(taskId) {
    return (
        `   
            <div class="task-form-container" id="${taskId}-form">
                <form id="task-form">
                    <div class="field-container">    
                        <input type="text" id="tkn" class="task-field" spellcheck="true" placeholder="Task" autocomplete="off" maxlength="50">
                        <input type="text" id="tkd" class="task-field" spellcheck="true" placeholder="Description" autocomplete="off" maxlength="100">
                    </div>
                    <div class="task-btn-container">
                        <div class="task-btn-wrapper" id="date-btn-container">    
                            <input type="date" id="date" class="task-btn">
                        </div>    
                        <div class="task-btn-wrapper">
                            <img src="${priorityIcon}" id="priority-icon" class="btn-icon"> 
                            <div id="priority-form-container">
                                <select class="task-btn" id="priority" name="priority">
                                    <option value="priority" disable selected>Priority</option>
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low" >Low</option>
                                </select>
                            </div>
                        </div>
                        <div class="task-btn-wrapper" id="assignee-btn-container">
                            <img src="${assigneeIcon}" id="assignee-icon" class="btn-icon">
                            <input type="button" id="assignee-btn" class="task-btn" value="Assignee">
                            <div id="assignee-form-container"></div>
                        </div>
                    </div>  
                    <div class="control-btn-container">
                        <div class="project-selector-container">
                            <select id="project-selector">
                                <option value="g" selected>Inbox</option>
                                <option value="p">Private</option>
                                ${createOptionElement(projectsArr)}
                            </select>
                        </div>
                        <div class="control-btn-wapper">
                            <input type="button" id="cancel-btn" class="control-btn" value="cancel" data-caller="${taskId}">
                            <input type="button" id="form-add-task-btn" class="control-btn" value="Add task" data-caller="${taskId}">
                        <div>
                    </div>  
                </form>
            </div>  
        `
    );
}