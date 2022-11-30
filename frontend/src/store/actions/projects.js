import { FETCH_ALL } from '../../constants/actionTypes';

export const getProjects = () => async (dispatch) => {
    try {
        const res = await fetch('/api/projects/');
        const data = await res.json();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }
}