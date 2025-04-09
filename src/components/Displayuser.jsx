import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'

const Displayuser = () => {
    const params = useParams();
    const [user, setUser] = useState([])
    const [msg, setMsg] = useState("")

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:3004/userlist");
                // console.log(res);
                if (res.data) {
                    setUser(res.data)
                }
                else {
                    toast.error("some thing ")
                }
            } catch (error) {
                console.log("error hai ", error);
            }
        }
        fetchData();
    }, [user])


    const deleteUser = async (id) => {

        await axios.delete("http://localhost:3004/userlist/" + id)
            .then((res) => {
                setMsg("record deleted. ..!")
            })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center'>Display User </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        {msg ? <div className='alert alert-success'>{msg}</div> : ''}
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id </th>
                                    <th>Username</th>
                                    <th>Email </th>
                                    <th>Password </th>
                                    <th>Action </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    user.map((item, index) =>
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.username}</td>
                                                <td>{item.email}</td>
                                                <td>{item.password}</td>
                                                <Link className='btn btn-danger' onClick={() => { deleteUser(item.id) }}>delete</Link>&nbsp;
                                                <Link className='btn btn-success' to={`/edituser/${item.id}`}>Edit </Link>
                                            </tr>
                                        </>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </>
    )
}

export default Displayuser