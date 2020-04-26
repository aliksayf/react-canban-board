import {uuid} from 'uuidv4';

// export const tasks = {
//     [uuid()]: {
//         name: 'Todo',
//         color: 'danger',
//         items: [
//             {
//                 id: uuid(),
//                 name: 'Create tasks list',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 status: 1,
//                 priority: 'Low'
//             },
//             {
//                 id: uuid(),
//                 name: 'Edit item functionality',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 status: 1,
//                 priority: 'High'
//             }
//         ]
//     },
//     [uuid()]: {
//         name: 'In Progress',
//         color: 'warning',
//         items: [
//             {
//                 id: uuid(),
//                 name: 'Create Board file',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 priority: 'Mid'
//             },
//             {
//                 id: uuid(),
//                 name: 'Create status table',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 priority: 'High'
//             }
//         ]
//     },
//     [uuid()]: {
//         name: 'Review',
//         color: 'info',
//         items: [
//             {
//                 id: uuid(),
//                 name: 'Remove item functionality',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 status: 3,
//                 priority: 'High'
//             }
//         ]
//     },
//     [uuid()]: {
//         name: 'Done',
//         color: 'success',
//         items: [
//             {
//                 id: uuid(),
//                 name: 'Create new task file',
//                 description: 'Lists\n' +
//                     'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
//                     'Aliquam tincidunt mauris eu risus.\n' +
//                     'Vestibulum auctor dapibus neque.\n' +
//                     'Nunc dignissim risus id metus.\n' +
//                     'Cras ornare tristique elit.\n' +
//                     'Vivamus vestibulum ntulla nec ante.\n' +
//                     'Praesent placerat risus quis eros.\n' +
//                     'Fusce pellentesque suscipit nibh.\n' +
//                     'Integer vitae libero ac risus egestas placerat.\n' +
//                     'Vestibulum commodo felis quis tortor.\n' +
//                     'Ut aliquam sollicitudin leo.\n' +
//                     'Cras iaculis ultricies nulla.\n' +
//                     'Donec quis dui at dolor tempor interdum.',
//                 status: 4,
//                 priority: 'Low'
//             }
//         ]
//     }
// };

export const tasks = [
    {
        id: uuid(),
        name: 'Todo',
        color: 'danger',
        items: [
            {
                id: uuid(),
                name: 'Create tasks list',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                status: 1,
                priority: 'Low'
            },
            {
                id: uuid(),
                name: 'Edit item functionality',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                status: 1,
                priority: 'High'
            }
        ]
    },
    {
        id: uuid(),
        name: 'In Progress',
        color: 'warning',
        items: [
            {
                id: uuid(),
                name: 'Create Board file',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                priority: 'Mid'
            },
            {
                id: uuid(),
                name: 'Create status table',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                priority: 'High'
            }
        ]
    },
    {
        id: uuid(),
        name: 'Review',
        color: 'info',
        items: [
            {
                id: uuid(),
                name: 'Remove item functionality',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                status: 3,
                priority: 'High'
            }
        ]
    },
    {
        id: uuid(),
        name: 'Done',
        color: 'success',
        items: [
            {
                id: uuid(),
                name: 'Create new task file',
                description: 'Lists\n' +
                    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n' +
                    'Aliquam tincidunt mauris eu risus.\n' +
                    'Vestibulum auctor dapibus neque.\n' +
                    'Nunc dignissim risus id metus.\n' +
                    'Cras ornare tristique elit.\n' +
                    'Vivamus vestibulum ntulla nec ante.\n' +
                    'Praesent placerat risus quis eros.\n' +
                    'Fusce pellentesque suscipit nibh.\n' +
                    'Integer vitae libero ac risus egestas placerat.\n' +
                    'Vestibulum commodo felis quis tortor.\n' +
                    'Ut aliquam sollicitudin leo.\n' +
                    'Cras iaculis ultricies nulla.\n' +
                    'Donec quis dui at dolor tempor interdum.',
                status: 4,
                priority: 'Low'
            }
        ]
    }
];


