import { useState, useEffect, useRef } from 'react';
import Modal from 'react-modal';
import AdminSidebar from "../Components/AdminSidebar";
import axios from 'axios';

function LaranganCrud() {

    const [dataMakanan, setDataMakanan] = useState([]);
    const [dataLarangan, setDataLarangan] = useState([]);
    const [modalIsOpened, setModalIsOpened] = useState(false);

    const laranganTambahan = useRef();

    useEffect(() => {
        fetchLarangan();
    }, []);

    const fetchLarangan = () => {
        axios.get('https://expert-system-nutrition.herokuapp.com/api/obesitas').then((resp) => {
            const larangan = resp.data;
            setDataLarangan(larangan)
        })
    }

    const deleteLarangan = async (id) => {
        await axios.delete(`https://expert-system-nutrition.herokuapp.com/api/obesitas/${id}`);
        window.location.href = "/admin-dashboard/larangan";
    }

    const fetchMakanan = () => {
        axios.get('https://expert-system-nutrition.herokuapp.com/api/makanan').then((resp) => {
            const makanan = resp.data;
            setDataMakanan(makanan);
        })
        setModalIsOpened(true);
    }

    const addLarangan = async (event) => {
        event.preventDefault();

        const dataLaranganBaru = {
            ID_Makanan: laranganTambahan.current.value 
        }

        console.log(dataLaranganBaru)

        await axios.post('https://expert-system-nutrition.herokuapp.com/api/obesitas', dataLaranganBaru);

        window.location.href = "/admin-dashboard/larangan";
    }

    if(sessionStorage.getItem("token")){
        return(
            <div className="flex">
                <AdminSidebar />
                <div className="m-auto p-10">
                    <table className="border-collapse shadow-lg">
                        <thead className="bg-green-400 text-white">
                            <tr>
                                <th className="py-5 px-10">No</th>
                                <th className="py-5 px-10">Nama Makanan</th>
                                <th className="py-5 px-10">Action</th>
                            </tr>
                        </thead>
                        {dataLarangan && (
                            <tbody>
                                {dataLarangan.map((larangan, index) => (
                                    <tr className="text-center">
                                        <td className="p-3 border-b-2">{index + 1}</td>
                                        <td className="p-3 border-b-2">{larangan.Makanan.Nama_Makanan}</td>
                                        <td className="py-3 px-5 border-b-2">
                                            <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={() => {deleteLarangan(larangan._id)}}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                    <button className="float-right bg-green-400 p-3 text-white font-bold rounded-md mt-5" onClick={fetchMakanan}>Tambah Larangan</button>
                </div>
                <Modal isOpen={modalIsOpened} onRequestClose={() => setModalIsOpened(false)}>
                    <button className="p-3 bg-red-500 text-white rounded-md float-right" onClick={() => setModalIsOpened(false)}>Close</button>
    
                    <h1 className="text-3xl font-bold text-black text-center mt-16">Tambah Larangan Makanan (Obesitas)</h1>
    
                    <form onSubmit={(e) => addLarangan(e)}>
                        <label htmlFor="laranganMakanan" className="mt-12 inline-block text-right w-1/6 font-bold text-xl mx-5">Nama Makanan</label>
                            {dataMakanan && (
                                <select ref={laranganTambahan} name="laranganMakanan" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                                    
                                    {dataMakanan.map((makanan) => (
                                        <option value={makanan._id}>{makanan.Nama_Makanan}</option>
                                    ))}
                                </select>
                            )}
                            <div className="text-center mt-10">
                                <button className="p-3 bg-green-400 text-lg text-white rounded-md font-bold" type="submit">Submit</button>
                            </div>
                    </form>
                </Modal>
            </div>
        );
    } else{
        return(
            <div className="text-center">
                <h1 className="text-red-500 font-bold text-2xl p-10">You don't have access to this page!</h1>
            </div>
        )
    }
    
    
}

export default LaranganCrud;