import home_cover from '../images/home_cover.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <div className="w-4/5 absolute">
                <h1 className="text-3xl text-green-500 font-extrabold m-5 inline">Expert System</h1>
                <button className="my-5 px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full inline ">Admin Login</button>
            </div>
            <div className="grid grid-cols-7 w-4/5 m-auto">
                <div className="col-span-4 flex h-screen justify-center items-center">
                    <div className="p-12 m-auto ">
                        <h1 className="text-4xl font-extrabold">Welcome to Nutrition Diagnose</h1>
                        <Link to="/form-diagnosa"><button className="my-5 px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full">Diagnose</button></Link>
                    </div>
                </div>
                <div className="col-span-3 flex h-screen justify-center items-center">
                    <img src={home_cover} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home;