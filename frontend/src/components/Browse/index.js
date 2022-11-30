import React, {useEffect } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/actions/projects';





const Browse = () => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projects);

    useEffect(() => {
        dispatch(getProjects());
    },[dispatch]);
    
    return (

        !projects.length ? <CircularProgress /> : (
            <>
            <div>
                  {projects.map((project) => (
                    <div key={project.id} item xs={12} sm={6}>
                        <div>{project.title}</div>
                    </div>
                ))}
                <div>hdhdhdhd</div>
                </div>
            </>
        )
    )
}

export default Browse;