import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { deleteUserData } from './UserReducer';
import { useDispatch } from 'react-redux';
function Home() {

    const [users] = useSelector(state => state.users);
    // console.log(users)

    const dispatch = useDispatch();

    const handleDelete = (id123) => {
        dispatch(deleteUserData({ id: id123 }))
    }
    return (
        <div className='container'>
            <div className='link-sp-mg'>
                <button className="btn btn-primary"><Link className='link' to='/add'>Add User</Link></button>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <table className="table" border="1">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                            {users && users.map((user) => (
                                <tr key={user.id}>
                                    <th>{user.id}</th>
                                    <th>{user.name}</th>
                                    <th>
                                        <button className='btn btn-secondary btn-space'><Link className='link' to={`/edit/${user.id}`}>Update</Link></button>
                                        <button className='btn btn-danger btn-space' onClick={() => { handleDelete(user.id) }}>Delete</button>
                                    </th>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
