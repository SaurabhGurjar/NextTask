import '../../css/task-form.css';
import assigneeIcon from '../../assets/icons/person.svg';
import dateIcon from '../../assets/icons/calendar.svg';
import priorityIcon from '../../assets/icons/flag.svg';
import datePicker from './datepicker';
export default function taskForm() {
    return (
        `
            <div class="task-form-container">
                <form id="task-form" action="/">
                    <div class="field-container">    
                        <input type="text" id="tkn" class="task-field" spellcheck="true" placeholder="Task" autocomplete="off">
                        <input type="text" id="tkd" class="task-field" spellcheck="true" placeholder="Description" autocomplete="off">
                    </div>
                    <div class="task-btn-container">
                        <div class="task-btn-wrapper" id="date-btn-container">    
                            <img src="${dateIcon}" id="date-icon" class="btn-icon"> 
                            <input type="button" id="date" class="task-btn" value="Due date">
                            <div id="dp-container"></div>
                        </div>    
                        <div class="task-btn-wrapper">
                            <img src="${priorityIcon}" id="priority-icon" class="btn-icon"> 
                            <input type="button" id="priority" class="task-btn" value="Priority">
                        </div>
                        <div class="task-btn-wrapper">
                            <img src="${assigneeIcon}" id="assignee-icon" class="btn-icon">
                            <input type="button" id="assignee" class="task-btn" value="Assignee">
                        </div>
                    </div>  
                    <div class="control-btn-container">
                        <input type="button" id="cancel-btn" class="control-btn" value="Cancel">
                        <input type="button" id="form-add-task-btn" class="control-btn" value="Add task">
                    </div>  
                </form>
            </div>  
        `
    );
}