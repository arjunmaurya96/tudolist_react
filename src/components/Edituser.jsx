import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom'

const Edituser = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [store , setStore] = useState({
        "username":"",
        "email":"",
        "password":""
    })
    useEffect(()=>{
        axios.get("http://localhost:3004/userlist/" + params.id)
        .then((res)=>{
            setStore(res.data)
        })
    },[])

    const handler=(e)=>{
        const {name, value} = e.target;
        setStore({...store,[name]:value})
    }

    const editform=(e)=>{
        e.preventDefault()
        axios.put("http://localhost:3004/userlist/"+ params.id, store)
        .then((res)=>{
if(res){
    toast.success("Edit user successfull ... !")
    navigate("/")

}else{
    toast.error("Not edit user ....?")
}
        })
    }

  return (
   <>
   <div className="container">
    <div className="row">
        <div className="col-md-12">
            <h1 className='text-center mt-5'>Edit User </h1>
        </div>
    </div>
    <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
        <form action="" onSubmit={editform}>
                            <div class="mb-3">
                                <label for="formGroupExampleInput" class="form-label"> User name  </label>
                                <input type="text" name='username' onChange={handler} value={store.username} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label"> Email id </label>
                                <input type="text" name='email' onChange={handler} value={store.email} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="formGroupExampleInput2" class="form-label"> Password  </label>
                                <input type="text" name='password' onChange={handler} value={store.password} class="form-control" />
                            </div>
                            <div class="mb-3">
                                <div className='text-center'>
                                    <input type="submit" value="edituser" className='btn btn-primary' />
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

export default Edituser