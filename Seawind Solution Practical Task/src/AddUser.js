import React from 'react';
import {useState} from "react";
import {useNavigate} from "react-router-dom"
import {useDispatch,} from 'react-redux';
import { addUserData } from './UserReducer';


function AddUser() {

    const [name,setName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addUserData({name:name}))
        navigate('/home')
        window.location.reload();
    }
  return (
    <div>
       <center>
       <form onSubmit={handleSubmit}>
                <div class="form-group row">
                    <label className='col-sm-2 col-form-label' >Name</label>
                    <div class="col-sm-8">
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            placeholder="Enter Name" />
                    </div>
                    <button type="submit" className="col-sm-1 btn btn-success mb-2">Add User</button>
                </div>
            </form>
       </center>
      
    </div>
  )
}

export default AddUser
