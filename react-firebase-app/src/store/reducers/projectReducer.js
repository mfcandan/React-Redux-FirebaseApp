const initState = {
    projects: [
        {id: '1', title: 'Help me', content: 'blah blah blah'},
        {id: '2', title: 'Collect all stars', content: 'blah blah blah'},
        {id: '3', title: 'Egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state 
}

export default projectReducer