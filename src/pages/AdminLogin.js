import { Link } from 'react-router-dom'

function AdminLogin() {
    return (
        <div className="flex h-screen justify-center items-center m-auto bg-green-300">
            <form action="" className="px-5 py-10 rounded-xl bg-white shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-10">Admin Login</h1>

                <label htmlFor="emailAdmin" className="mb-10 inline-block text-right w-1/6 font-bold text-xl mx-5">E-mail</label>
                <input name="emailAdmin" type="email" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>
                
                <label htmlFor="passwordAdmin" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Password</label>
                <input name="passwordAdmin" type="password" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>
                <br />
                <br />
                <div className="text-center">
                    <Link to='/admin-dashboard'>
                        <button type="submit" className="px-5 py-2 text-lg bg-green-400 text-white font-bold rounded-md">Login</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;