import React from 'react';
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, } from 'react-redux';
import { EditUserData } from './UserReducer';


function EditUser() {

    const [name, setName] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { eid } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(EditUserData({ id: eid, name: name }))
        navigate('/home')

    }
    return (
        <div>
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
                    <button type="submit" className="col-sm-1 btn btn-success mb-2">Update</button>
                </div>
            </form>

        </div>
    )
}

export default EditUser
