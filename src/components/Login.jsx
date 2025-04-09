import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
    const [form, setForm] = useState({
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
            .then((res) => {
                try {
                    if (res.data) {
                        // console.log("data added successfully", res.data);
                        setForm(res.data);
                        setForm({

                            email: "",
                            password: ""
                        })
                    } else {
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
                        <h1 className="text-center">User Login </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form onSubmit={formSubmit}>

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
                                    Login
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

export default Login;
