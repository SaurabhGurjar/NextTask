import { taskArr, projectsArr, teamsArr } from "../data";
import { removeTaskFromTaskArr } from "./task-script";

export function removeTaskFromProject(index, id) {
    projectsArr[index].delTaskId(id);
}

function removeProjectFromArr (index) {
    if (projectsArr.length > 1) {
        projectsArr.splice(index, 1);
    } else {
        projectsArr.pop();
    }
}

function removeProjectFromPage (id) {
    document.getElementById(`${id}-plw`).remove();
}

function removeProject (id) {
    projectsArr.forEach((item, index) => {
        if (item.getId() === Number(id)) {
            removeProjectFromArr(index);
            item.taskId.forEach(id => {
                taskArr.forEach((item, index) => {
                    if(item.getId() === id) {
                        removeTaskFromTaskArr(index);
                    }
                });
            });
        }
    });
    removeProjectFromPage(id);
}

function delEvent() {
    const proDelBtn = document.querySelectorAll('.pt-del-btn');
    proDelBtn.forEach(btn => {
        btn.onclick = () => {
            if (btn.id.split('-')[1] === 'pdel') removeProject(btn.dataset.projectid);
        }
    }); 
}

export function sidebarEvents () {
    delEvent();
}