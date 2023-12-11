import '../../css/task-form.css';

import assigneeIcon from '../../assets/icons/person.svg';
import dateIcon from '../../assets/icons/calendar.svg';
import priorityIcon from '../../assets/icons/flag.svg';

export default function taskForm(taskId) {
    return (
        `   
            <div class="task-form-container" id="${taskId}-form">
                <form id="task-form" action="/">
                    <div class="field-container">    
                        <input type="text" id="tkn" class="task-field" spellcheck="true" placeholder="Task" autocomplete="off" maxlength="50">
                        <input type="text" id="tkd" class="task-field" spellcheck="true" placeholder="Description" autocomplete="off" maxlength="100">
                    </div>
                    <div class="task-btn-container">
                        <div class="task-btn-wrapper" id="date-btn-container">    
                            <img src="${dateIcon}" id="date-icon" class="btn-icon"> 
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
                        <input type="button" id="cancel-btn" class="control-btn" value="Cancel" data-caller="${taskId}">
                        <input type="button" id="form-add-task-btn" class="control-btn" value="Add task" data-caller="${taskId}">
                    </div>  
                </form>
            </div>  
        `
    );
}