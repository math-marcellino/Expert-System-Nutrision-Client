import { Link } from 'react-router-dom';

function AdminSidebar() {
    return(
        <div className="relative min-h-screen bg-green-300 w-1/5">
            <h1 className="text-white font-bold text-3xl text-center py-5">Nutrition Admin Dashboard</h1>

            <Link to="/admin-dashboard/makanan">
                <div className="w-full hover:bg-green-400 py-5 cursor-pointer">
                    <h1 className="text-white text-center text-2xl font-bold">Makanan</h1>
                </div>
            </Link>
            
            <Link to="/admin-dashboard/larangan">
                <div className="w-full hover:bg-green-400 py-5 cursor-pointer">
                    <h1 className="text-white text-center text-2xl font-bold">Larangan Makanan (Obesitas)</h1>
                </div>
            </Link>

            <Link to="/">
                <div className="w-full hover:bg-green-400 py-5 cursor-pointer">
                    <h1 className="text-white text-center text-2xl font-bold">Go to Homepage</h1>
                </div>
            </Link>
        </div>
    );
}

export default AdminSidebar;