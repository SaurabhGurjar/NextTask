import { dueToday, todayDate, dateNow } from "./scripts/formatDate";
import { getNumFromStr, capitalize } from "./scripts/stringlib";
import { tasks, projects, teams } from "./demoData";
import { getSavedData } from "./saveScript";

export const projectsArr = [];
export const teamsArr = [];
export const taskArr = [];
export class Team {
    constructor(id, name, projectIds, memberIds,) {
        this.id = id;
        this.name = name;
        this.projectIds = projectIds || [];
        this.memberIds = memberIds || [];
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getMemberIds() {
        return this.memberIds;
    }

    getProjectIds() {
        return this.projectIds;
    }

    addMemeber(memberId) {
        this.memberIds.push(memberId);
    }

    addProject(projectId) {
        this.projectIds.push(projectId);
    }

    delMember(memberId) {
        const members = [...this.memberIds];
        members.forEach((item, index) => {
            if (item === memberId) {
                members.splice(index, 1);
                return;
            }
        });
        this.memberIds = members;
    }

    delProjects(projectId) {
        const projects = [...this.projectIds];
        projects.forEach((item, index) => {
            if (item === projectId) {
                projects.splice(index, 1);
                return;
            }
        });
        this.projectIds = projects;
    }

    static idCounter = 0; 

    static getIdCounter () {
        return this.idCounter;
    }

    static IncrementCounter () {
        this.idCounter += 1;
    }

    static assignId () {
        const id = this.getIdCounter();
        this.IncrementCounter()
        return id;
    }
}

export class Project {
    constructor(id, name, taskId) {
        this.id = id;
        this.name = name;
        this.taskId = taskId || [];
    }

    getId() {
        return this.id;
    }

    getName() {
        return capitalize(this.name);
    }

    addTask (id) {
        this.taskId.push(id);
    }

    delTaskId(id) {
        const taskId = [...this.taskId];
        taskId.forEach((item, index) => {
            if (item === id) {
                taskId.splice(index, 1);
                return;
            }
        });
        this.taskId = taskId;
    }

    static idCounter = 0; 

    static getIdCounter () {
        return this.idCounter;
    }

    static IncrementCounter () {
        this.idCounter += 1;
    }

    static assignId () {
        const id = this.getIdCounter();
        this.IncrementCounter()
        return id;
    }
}

export class Task {
    constructor(
        id,
        heading,
        description,
        date,
        priority,
        assignee,
        projectId,
        status,
        completed,
    ) {
        this.id = id;
        this.heading = heading;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.assignee = assignee;
        this.projectId = projectId;
        this.openDate = dateNow();

        if (!status) {
            this.status = 'not started';
        } else {
            this.status = status;
        }
        if (completed) {
            this.completed = true;
        } else {
            this.completed = false;
        }
        if (this.projectId === 'p') {
            this.isPrivate = true;
        } else {
            this.isPrivate = false;
        }
}

    getId() {
        return this.id;
    }

    getHeading() {
        return this.heading;
    }

    getDescription() {
        return this.description;
    }

    getDate() {
        return this.date;
    }

    getPriority() {
        return this.priority;
    }

    getAssignee() {
        return this.assignee;
    }

    getStatus() {
        return this.status;
    }

    isCompleted() {
        return this.completed;
    }

    getProjectId() {
        return this.projectId;
    }
    
    getPrivate() {
        return this.isPrivate;
    }


    setHeading(heading) {
        this.heading = heading;
    }

    setDescription(description) {
        this.description = description;
    }

    setDate(date) {
        this.date = date;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setAssignee(assignee) {
        this.assignee = assignee;
    }

    setStatus(status) {
        this.status = status;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    setProjectId(projectId) {
        this.projectId = projectId;
        if (projectId === 'p') this.isPrivate = true;
        else this.isPrivate = false;
    }

    static idCounter = 0; 

    static getIdCounter () {
        return this.idCounter;
    }

    static IncrementCounter () {
        this.idCounter += 1;
    }

    static assignId () {
        const id = this.getIdCounter();
        this.IncrementCounter()
        return id;
    }
}

export function sortTasksDateWiseAsc(tasks) {
    return tasks.toSorted((a, b) => Number(a.date.split('-')[2]) - Number(b.date.split('-')[2]));
}

export function getTeams() {
    teams.forEach((team) => {
        teamsArr.push(new Team(Team.assignId(), team.name, team.projectIds));
    });
}

export function getProjects() {
    getSavedData('svProjects').forEach((item) => {
        projectsArr.push(new Project(Project.assignId(), item.name, item.taskId));
    });
}

export function getDataTasks() {
    getSavedData('svTasks').forEach((item) => {
        taskArr.push(
            new Task(
                Task.assignId(),
                item.heading,
                item.description,
                item.date,
                item.priority,
                item.assignee,
                item.projectId,
                item.status,
                item.completed,
                item.isPrivate
            )
        );
    });
}

export function getInboxTasks() {
    const tasks = [];
    taskArr.forEach((item) => {
        if (item.getPrivate()) return;
        tasks.push(item);
    });
    return tasks;
}

export function getPrivateTask() {
    const tasks = [];
    taskArr.forEach((item) => {
        if (item.getPrivate()) tasks.push(item);
        
    });
    return sortTasksDateWiseAsc(tasks);
}

export function getTodayTask() {
    const tasks = [];

    taskArr.forEach((item) => {
        if (dueToday(item.getDate())) {
            tasks.push(item);
        }
    })
    return tasks;
}
export function getUpcomingTask() {
    const nextSevenDate = todayDate() + 7;
    const tasks = [];
    taskArr.forEach((item) => {
        if (
            item.getDate().split('-').map((item) => parseInt(item))[2] > todayDate()
            && item.getDate().split('-').map((item) => parseInt(item))[2] < nextSevenDate
        ) {
            tasks.push(item);
        }
    });
    return sortTasksDateWiseAsc(tasks);
}

export function getProjectTask(projectId) {
    const id = getNumFromStr(projectId);
    const tasks = [];
    projectsArr[id].taskId.forEach((id) => {
        taskArr.forEach(item => {
            if (item.getId() === id) {
                tasks.push(item);
            }
        }); 
    });
    return sortTasksDateWiseAsc(tasks);
}



