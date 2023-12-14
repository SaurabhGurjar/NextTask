import { dueToday, todayDate } from "./scripts/formatDate";
const data = [
    {
        name: 'Web development',
        projects: {
            name: 'Shopping Cart',
            subTeams: [
                {
                    name: 'Frontend',
                    task: 'UI design',
                    subTasks: [
                        {
                            heading: 'Design Navigation',
                            description: 'Design a navigation for small screen and big screen screen.',
                            openDate: '2023-12-09',
                            dueDate: '2023-12-11',
                            assignee: 'Rajat Morya',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'low',
                        },
                        {
                            heading: 'Sidebar Design',
                            description: '',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-12',
                            assignee: 'Manav Badola',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                        },
                    ]
                },
                {
                    name: 'Backend',
                    task: 'User Authentication',
                    subTasks: [
                        {
                            heading: 'Create API to authenticate user phone number.',
                            description: '',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-18',
                            assignee: 'Hemant Yadav',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'medium',
                        },
                        {
                            heading: 'Create API to authenticate user Email Address.',
                            description: '',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-21',
                            assignee: 'Manish Shandilya',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                        },
                    ]
                },

                {
                    name: 'Backend',
                    task: 'Database Design',
                    subTasks: [
                        {
                            heading: 'Create a Database to store user information.',
                            description: '',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-16',
                            assignee: 'Arun singh',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                        },
                        {
                            heading: 'Create a Database to store products information.',
                            description: '',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-10',
                            assignee: 'Kamal singh',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                        },
                    ]
                },
            ],
        },

    },
    {
        name: 'Artificial intelligence',
        projects: {
            name: 'LLM system',
            subTeams: [
                {
                    name: 'Natural language',
                    task: 'UI design',
                    subTasks: [
                        {
                            heading: 'Make training dataset.',
                            description: 'Make dataset for training system.',
                            openDate: '2023-12-09',
                            dueDate: '2023-12-11',
                            assignee: 'Rajat Morya',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'low',
                        },
                        {
                            heading: 'Make Image dataset.',
                            description: 'Make dataset for training Image generating system.',
                            openDate: '2023-12-08',
                            dueDate: '2023-12-12',
                            assignee: 'Manav Badola',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                        },
                    ]
                },
            ],
        },
    },
    {
        name: 'Data science',
        projects: {
            name: 'Data visualizer',
            subTeams: [],
        },
    },
    {
        name: 'Social media',
        projects: {
            name: 'Instagram post maker',
            subTeams: [],
        },
    },
    {
        name: 'Marketing',
        projects: {
            name: 'Youtube video marker',
            subTeams: [],
        },
    },
    {
        name: 'private',
        projects: {
            name: 'private',
            subTeams: [
                {
                    name: 'private',
                    task: 'Webapp Design',
                    subTasks: [
                        {
                            heading: 'Create website design.',
                            description: '',
                            openDate: '2023-12-18',
                            dueDate: '2023-12-21',
                            assignee: 'none',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                            isPrivate: true,
                        },
                        {
                            heading: 'Create mobile website design.',
                            description: '',
                            openDate: '2023-12-18',
                            dueDate: '2023-12-21',
                            assignee: 'none',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                            isPrivate: true,
                        },
                    ]
                },
            ],
        },
    },
    {
        name: 'general',
        projects: {
            name: 'general',
            subTeams: [
                {
                    name: 'general',
                    task: 'Webapp Design',
                    subTasks: [
                        {
                            heading: 'Create website design.',
                            description: '',
                            openDate: '2023-12-18',
                            dueDate: '2023-12-21',
                            assignee: 'none',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                            isPrivate: true,
                        },
                        {
                            heading: 'Create mobile website design.',
                            description: '',
                            openDate: '2023-12-18',
                            dueDate: '2023-12-21',
                            assignee: 'none',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'high',
                            isPrivate: true,
                        },
                    ]
                },
            ],
        }
    },
];

export class Task {
    constructor(heading, description, date, priority, assignee, status, completed, team, project, isPrivate) {
        this.heading = heading;
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.assignee = assignee;
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
        if (!team) {
            this.team = 'none';
        } else {
            this.team = team;
        }
        if (!project) {
            this.project = 'none';
        } else {
            this.project = project;
        }
        if (isPrivate) {
            this.isPrivate = isPrivate;
        } else {
            this.isPrivate = false;
        }
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

    getTaskState() {
        return this.completed;
    }

    getTeam() {
        return this.team;
    }

    getPrject() {
        return this.project;
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

    setTaskState(completed) {
        this.completed = completed;
    }

    setTeam(team) {
        this.team = team;
    }

    setProject(project) {
        this.project = project;
    }
    setPrivate(isPrivate) {
        this.isProject = isPrivate;
    }
}

export function sortTasksDateWiseAsc (tasks) {
    return tasks.toSorted((a, b) => Number(a.date.split('-')[2]) - Number(b.date.split('-')[2]));
}
export function getDataTasks() {
    const tasks = [];
    data.forEach((team) => {
        if (team.name === 'private') return;
        team.projects.subTeams.forEach((subteam) => {
            subteam.subTasks.forEach((item) => {
                tasks.push(new Task(item.heading, item.description, item.dueDate, item.priority, item.assignee, item.status, item.completed, `${team.name}-${subteam.name}`, `${team.projects.name}`, item.isPrivate));
            })
        });
    });
    return tasks;
}

export function getPrivateTask() {
    const tasks = [];
    data.forEach((team) => {
        if (team.name !== 'private') return;
        team.projects.subTeams.forEach((subteam) => {
            subteam.subTasks.forEach((item) => {
                tasks.push(new Task(item.heading, item.description, item.dueDate, item.priority, item.assignee, item.status, item.completed, undefined, undefined, item.isPrivate));
            })
        });
    });
    return sortTasksDateWiseAsc(tasks);
}

export function getTodayTask() {
    const tasks = [];
    data.forEach((team) => {
        team.projects.subTeams.forEach((subteam) => {
            subteam.subTasks.forEach((item) => {
                if(dueToday(item.dueDate)) {
                    tasks.push(new Task(item.heading, item.description, item.dueDate, item.priority, item.assignee, item.status, item.completed, undefined, undefined, item.isPrivate));
                }
            });
        })
    });
    return tasks;
}
export function getUpcomingTask() {
    const nextSevenDate = todayDate() + 7;
    const tasks = [];
    data.forEach((team) => {
        team.projects.subTeams.forEach((subteam) => {
            subteam.subTasks.forEach((item) => {
                if(item.dueDate.split('-').map((item) => parseInt(item))[2] > todayDate() && item.dueDate.split('-').map((item) => parseInt(item))[2] < nextSevenDate) {
                    tasks.push(new Task(item.heading, item.description, item.dueDate, item.priority, item.assignee, item.status, item.completed, undefined, undefined, item.isPrivate));
                }
            });
        })
    });
    return sortTasksDateWiseAsc(tasks);
}
export function getProjectTask (projectId) {
    const projectName = document.getElementById(projectId).textContent;
    const tasks = [];
    data.forEach((team) => {
        if (team.projects.name !== projectName) return;
        team.projects.subTeams.forEach((subteam) => {
            subteam.subTasks.forEach((item) => {
                tasks.push(new Task(item.heading, item.description, item.dueDate, item.priority, item.assignee, item.status, item.completed, undefined, undefined, item.isPrivate));
            });
        })
    });
    return sortTasksDateWiseAsc(tasks);
}
export function getProjects() {
    const projects = [];
    data.forEach((item) => {
        projects.push(item.projects.name);
    });
    return projects;
}

export function getTeams() {
    const teams = [];
    data.forEach((team) => {
        teams.push(team);
    });
    return teams;
}