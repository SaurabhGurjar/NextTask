import '../../css/content.css';
import addIcon from '../../assets/icons/invite.svg';
import taskForm from './task-form';
import { tasksHTML } from '../scripts/showtask.js';

export default function content() {
    return (`
        <div id="main-container">
            <div class="m-content">
                <div class="m-main-heading-container">
                    <span class="m-main-heading-text" id="mhd">Inbox</span>
                </div>
                <div class="m-task-container" id="tasks">
                    ${tasksHTML()}
                    </div>
                <div class="task-btn-and-taskform-container">
                    <button id="add-task-btn" class="add-task-btn">
                        <img src="${addIcon}" class="m-add-task-btn-icon">
                        <span>New task</span>
                    </button>
                    ${taskForm()}
                </div>
            </div>
        </div>
    `);
}
