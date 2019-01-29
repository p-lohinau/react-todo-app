import axios from 'axios';

const initialState = {
    todos: [{
        "title": "todo 1",
        "id": 1,
        "completed": false
    },
    {
        "title": "todo 2",
        "id": 2,
        "completed": true
    },
    {
        "title": "todo 3",
        "id": 3,
        "completed": false
    }]
}

const rootReduser = (state = initialState, action) => {
    if (action.type === "DELETE_TODO") {
        if (!!action.id || action.id !== '') {
            // axios.delete(`http://localhost:3000/todos/${action.id}`)
            //     .then((response) => {

            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });
            const updatedList = state.todos.filter(x => x.id !== action.id);
            return {
                ...state,
                todos: updatedList
            }
        }
        else {
            console.log('deleteTodo error - wrong parameter');
        }
    }
    return state;
}

export default rootReduser;