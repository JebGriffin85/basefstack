import { FETCH_ALL, CREATE_PROJECT } from '../../constants/actionTypes';
import { csrfFetch } from '../csrf';

export const getProjects = () => async (dispatch) => {
    try {
        const res = await fetch('/api/projects/');
        const data = await res.json();
        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const createProject = (project) => async (dispatch) => {
    try {
        const { title, genre, description, userId } = project;
        const res = await csrfFetch('/api/projects/', {
            method: 'POST',
            body: JSON.stringify({
                description, title, genre, userId
            })
        }) 
        const data = await res.json();
        dispatch({ type: CREATE_PROJECT, payload: data})
    } catch (error) {
        console.log(error)
    }
}