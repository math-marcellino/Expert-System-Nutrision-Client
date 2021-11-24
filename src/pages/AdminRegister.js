import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import axios from 'axios';

function AdminRegister () {
    const navigate = useNavigate();

    const username = useRef();
    const password = useRef();

    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const registerData = {
            Nama_Admin: username.current.value,
            Password_Admin: password.current.value
        }


        const res = await axios.post('https://expert-system-nutrition.herokuapp.com/api/admin/acc/signup', registerData);

        console.log(res)

        if(res.data.message == "maaf username telah terdaftar silahkan gunakan username yang baru"){
            setMessage(res.data.message);
        } else{
            navigate('/admin-login', { replace: true });
        }
    }

    return(
        <div className="flex h-screen justify-center items-center m-auto bg-green-300">
            <form onSubmit={handleSubmit} className="px-5 py-10 rounded-xl bg-white shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-10">Admin Register</h1>

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
                    <button type="submit" className="px-5 py-2 text-lg bg-green-400 text-white font-bold rounded-md">Register</button>
                </div>
                
            </form>
        </div>
    )
}

export default AdminRegister;