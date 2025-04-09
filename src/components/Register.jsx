import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handler = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3004/registerList", form)
          .then((res)=>{
         try {
            if(res.data){
                // console.log("data added successfully", res.data);
              
                setForm(res.data);
                setForm({
                    name:"",
                    email:"",
                    password:""
                })
                navigate('/login')

            }else{
                console.log("data not added");
                
            }
            
         } catch (error) {
            console.log("Something error", error);
            
            
         }
          })
    };

    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-12">
                        <h1 className="text-center">User Register</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">User Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handler}
                                    className="form-control"
                                    placeholder="Enter user name"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handler}
                                    className="form-control"
                                    placeholder="Enter email ID"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handler}
                                    className="form-control"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-success btn-lg w-50">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
};

export default Register;
