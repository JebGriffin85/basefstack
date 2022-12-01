import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useDispatch, useSelector } from 'react-redux';
import { createProject } from '../../store/actions/projects';

const ProjectForm = () => {
    const sessionUser = useSelector(state => state.session);

    const dispatch = useDispatch();

    const [postData, setPostData] = useState({
        title: '',
        description: '',
        genre: '',
        userId: sessionUser.user.id
    });

    const classes = useStyles();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createProject(postData));
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a Project</Typography>
                <TextField name='title' 
                variant='outlined' 
                label='Title' 
                fullWidth
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  />
                  <TextField name='description' 
                variant='outlined' 
                label='Description' 
                fullWidth
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                  />
                  <FormControl size="small" fullWidth>
        <InputLabel  width='4'>Age</InputLabel>
        <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={postData.genre}
          label="Age"
          onChange={(e) => setPostData({ ...postData, genre: e.target.value })}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
            
               
                  <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth >Submit</Button>
                  
                  <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}

export default ProjectForm;