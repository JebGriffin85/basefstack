import { FETCH_ALL, CREATE_PROJECT } from '../../constants/actionTypes';

export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE_PROJECT:
            return [ ...projects, action.payload ];
        default:
            return projects;
    }
}