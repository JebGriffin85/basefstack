import { FETCH_ALL } from '../../constants/actionTypes';

export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        default:
            return projects;
    }
}