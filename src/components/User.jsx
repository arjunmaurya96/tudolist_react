import axios from 'axios';
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const User = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const handler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        // console.log(data);

    }
    const submitform = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3004/userlist`, {
                params: {
                    email: data.email,
                    username: data.username
                }
            });

            if (response.data.length > 0) {
                toast.error("Username or Email already exists!");
                return; 
            }
            const result = await axios.post("http://localhost:3004/userlist", data)

            if (result.data) {
                setData({
                    username: "",
                    email: "",
                    password: ""
                })
                toast.success("data added..!")
            }
            else {
                toast.error("data not added ...!")
            }
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center mt-5'>User form </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Toaster />
                        <form action="" onSubmit={submitform}>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label"> User name  </label>
                                <input type="text" name='username' onChange={handler} value={data.username} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label"> Email id </label>
                                <input type="text" name='email' onChange={handler} value={data.email} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label"> Password  </label>
                                <input type="text" name='password' onChange={handler} value={data.password} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <div className='text-center'>
                                    <input type="submit" value="Submit" className='btn btn-primary' />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        </>
    )
}

export default User