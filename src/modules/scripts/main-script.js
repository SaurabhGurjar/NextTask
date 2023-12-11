import sidebarEvents from "./sidebar-script";
import taskFormController from "./task-script";
import { linksEvents } from "./sidebar-script";
import showScrollBar from "./scrollbar";


export default function main () {

    // showScrollBar()
    sidebarEvents();
    linksEvents();
    // task button and task form 
    taskFormController();
} 
