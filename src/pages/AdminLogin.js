import axios from 'axios';
import { useRef, useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom'

function AdminLogin() {

    const [message, setMessage] = useState();
    const navigate = useNavigate();

    const username = useRef();
    const password = useRef();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const dataLogin = {
            Nama_Admin: username.current.value,
            Password_Admin: password.current.value
        }
        
        const res = await axios.post('https://expert-system-nutrition.herokuapp.com/api/admin/acc/signin', dataLogin);
        console.log(res);
        if(res.data.login){
            sessionStorage.setItem("token", res.data.token);
            navigate('/admin-dashboard', { replace: true });
        } else{
            setMessage(res.data.message);
        }

        
    }

    if(sessionStorage.getItem("token")){
        return(
            <Navigate to="/admin-dashboard"/>
        )
    } else {
        return (
            <div className="flex h-screen justify-center items-center m-auto bg-green-300">
                <form onSubmit={handleSubmit} className="px-5 py-10 rounded-xl bg-white shadow-lg">
                    <h1 className="text-3xl font-bold text-center mb-10">Admin Login</h1>
    
                    <label htmlFor="username" className="mb-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Username</label>
                    <input ref={username} name="username" type="text" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>
                    
                    <label htmlFor="password" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Password</label>
                    <input ref={password} name="password" type="password" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>
                    <br />
                    <br />
                    {message && (
                        <div className="text-center">
                            <span className="text-red-500 mb-5">{message}</span>
                            <br />
                            <br />
                        </div>
                    )}
                    <div className="text-center">
                        <button type="submit" className="px-5 py-2 text-lg bg-green-400 text-white font-bold rounded-md">Login</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default AdminLogin;