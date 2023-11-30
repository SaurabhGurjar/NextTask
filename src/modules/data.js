const projects = [
    {
        name: 'Shopping Cart',
        teams: [
            {
                name: 'Frontend',
                subproject: 'UI design',
                tasks: [
                    {
                        task: 'Design Navigation',
                        open: '18-11-23',
                        closed: '20-11-23',
                        assignee: 'Rajat Morya',
                        assignor: 'Saurabh Choudhary',
                        status: 'Not started',
                        priority: 'High',
                    },
                    {
                        task: 'Sidebar Design',
                        open: '18-11-21',
                        closed: '20-11-23',
                        assignee: 'Manav Badola',
                        assignor: 'Saurabh Choudhary',
                        status: 'Not started',
                        priority: 'High',
                    },
                ],
            },
        ],
    },
    {
        name: 'LLM system'
    },
    {
        name: 'Data visualizer'
    },
    {
        name: 'Instagram post maker'
    }
];

// class project {

// }
const teams = [
    {
        name: 'Web development',
        projects: {
            name: 'Shopping Cart',
            teams: [
                {
                    name: 'Frontend',
                    subproject: 'UI design',
                    tasks: [
                        {
                            task: 'Design Navigation',
                            open: '18-11-23',
                            closed: '20-11-23',
                            assignee: 'Rajat Morya',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                        {
                            task: 'Sidebar Design',
                            open: '18-11-21',
                            closed: '20-11-23',
                            assignee: 'Manav Badola',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                    ]
                },
                {
                    name: 'Backend',
                    subproject: 'User Authentication',
                    tasks: [
                        {
                            task: 'Create API to authenticate user phone number.',
                            open: '18-11-23',
                            closed: '21-11-23',
                            assignee: 'Hemant Yadav',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                        {
                            task: 'Create API to authenticate user Email Address.',
                            open: '18-11-23',
                            closed: '21-11-23',
                            assignee: 'Manish Shandilya',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                    ]
                },

                {
                    name: 'Backend',
                    subproject: 'Database Design',
                    tasks: [
                        {
                            task: 'Create a Database to store user information.',
                            open: '18-11-23',
                            closed: '21-11-23',
                            assignee: 'Arun singh',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                        {
                            task: 'Create a Database to store products information.',
                            open: '18-11-23',
                            closed: '21-11-23',
                            assignee: 'Kamal singh',
                            assignor: 'Saurabh Choudhary',
                            status: 'Not started',
                            priority: 'High',
                        },
                    ]
                },
            ],
        },

    },
    {
        name: 'Artificial intelligence'
    },

    {
        name: 'Data science'
    },
];

export function getProjects() {
    return projects;
}

export function getTeams() {
    return teams;
}