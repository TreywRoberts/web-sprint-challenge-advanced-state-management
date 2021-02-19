import axios from 'axios';

export const SMURFS_LOADING = 'SMURFS_LOADING';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAILED = 'SMURFS_FAILED';
export const ADD_SMURF = 'ADD_SMURF'
export const SHOW_ERROR = 'SHOW_ERROR'

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = (dispatch) =>{
    return dispatch =>{
        dispatch({type:SMURFS_LOADING});
        axios
            .get('http://localhost:3333/smurfs')
            .then(res =>{
                // console.log(res)
                dispatch({type:SMURFS_SUCCESS, payload:res.data})
                
            })
            .catch(err=>{
                console.log('this is error',err)
                dispatch({type:SMURFS_FAILED, payload:err})

            })
    }
}

export const addSmurf = (newSmurf) =>{
    return({type:ADD_SMURF, payload:newSmurf})
}

export const showError = err =>{
    return({type:SHOW_ERROR, payload:err})
}