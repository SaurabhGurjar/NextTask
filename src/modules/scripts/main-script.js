import sidebarEvents from "./sidebar-script";
import taskFormController from "./task-script";

export default function main () {
    sidebarEvents();

    // task button and task form 
    taskFormController();
} 
