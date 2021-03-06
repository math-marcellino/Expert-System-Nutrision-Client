import { useEffect, useState, useRef } from 'react';
import AdminSidebar from "../Components/AdminSidebar";
import axios from 'axios';
import Modal from 'react-modal';

function MakananCRUD() {

    const [dataMakanan, setDataMakanan] = useState([]);
    const [modalAddIsOpened, setModalAddIsOpened] = useState(false);
    const [modalEditIsOpened, setModalEditIsOpened] = useState(false);
    const [dataMakananSpesifik, setDataMakananSpesifik] = useState({});

    const inputNamaMakanan = useRef();
    const inputProtein = useRef();
    const inputLemak = useRef();
    const inputKarbo = useRef();
    const inputTakaran = useRef();
    const inputKalori = useRef();

    const idEditMakanan = useRef();
    const editNamaMakanan = useRef();
    const editProtein = useRef();
    const editLemak = useRef();
    const editKarbo = useRef();
    const editTakaran = useRef();
    const editKalori = useRef();

    useEffect(() => {
        fetchMakanan();
    }, []);

    const fetchMakanan = () => {
        axios.get('https://expert-system-nutrition.herokuapp.com/api/makanan').then((resp) => {
            const makanan = resp.data;
            setDataMakanan(makanan);
        })
    }

    const deleteMakanan = async (id) => {
        await axios.delete(`https://expert-system-nutrition.herokuapp.com/api/makanan/${id}`);
        
        window.location.href = "/admin-dashboard/makanan";
    }

    const addMakanan = async (event) => {
        event.preventDefault();

        const dataMakananBaru = {
            Nama_Makanan: inputNamaMakanan.current.value,
            Nilai_Lemak: inputLemak.current.value,
            Nilai_Karbo: inputKarbo.current.value,
            Nilai_Protein: inputProtein.current.value,
            Nilai_Takaran: inputTakaran.current.value,
            Nilai_Kalori: inputKalori.current.value
        }

        await axios.post('https://expert-system-nutrition.herokuapp.com/api/makanan', dataMakananBaru);

        window.location.href = "/admin-dashboard/makanan";
    }

    const editMakanan = async (event) => {
        event.preventDefault();

        const dataMakananEdited = {
            Nama_Makanan: editNamaMakanan.current.value,
            Nilai_Lemak: editLemak.current.value,
            Nilai_Karbo: editKarbo.current.value,
            Nilai_Protein: editProtein.current.value,
            Nilai_Takaran: editTakaran.current.value,
            Nilai_Kalori: editKalori.current.value
        }
        console.log(dataMakananEdited);

        await axios.put(`https://expert-system-nutrition.herokuapp.com/api/makanan/${idEditMakanan.current.value}`, dataMakananEdited);

        window.location.href = "/admin-dashboard/makanan";
    }

    const fetchMakananSpesifik = (id) => {
        axios.get(`https://expert-system-nutrition.herokuapp.com/api/makanan/${id}`).then((resp) => {
            const makananSpesifik = resp.data;
            setDataMakananSpesifik(makananSpesifik);
        })
        setModalEditIsOpened(true);
    }
    if(sessionStorage.getItem("token")){
        return(
            <div className="flex">
                <AdminSidebar />
                <div className="m-auto p-10">
                    <table className="border-collapse shadow-lg">
                        <thead className="bg-green-400 text-white">
                            <tr>
                                <th className="py-6 px-6">Nomor</th>
                                <th className="py-6 px-6">Nama Makanan</th>
                                <th className="py-6 px-6">Protein</th>
                                <th className="py-6 px-6">Lemak</th>
                                <th className="py-6 px-6">Karbohidrat</th>
                                <th className="py-6 px-6">Takaran</th>
                                <th className="py-6 px-6">Kalori</th>
                                <th className="py-6 px-6">Action</th>
                            </tr>
                        </thead>
                        {dataMakanan && (
                            <tbody>
                                {dataMakanan.map((makanan, index) => (
                                    <tr className="text-center">
                                        <td className="p-3 border-b-2">{index + 1}</td>
                                        <td className="p-3 border-b-2">{makanan.Nama_Makanan}</td>
                                        <td className="p-3 border-b-2">{makanan.Nilai_Protein}</td>
                                        <td className="p-3 border-b-2">{makanan.Nilai_Lemak}</td>
                                        <td className="p-3 border-b-2">{makanan.Nilai_Karbo}</td>
                                        <td className="p-3 border-b-2">{makanan.Nilai_Takaran}</td>
                                        <td className="p-3 border-b-2">{makanan.Nilai_Kalori}</td>
                                        <td className="py-3 px-5 border-b-2">
                                            <button className="py-2 px-4 mx-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md" onClick={() => fetchMakananSpesifik(makanan._id)}>Edit</button>
                                            <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-md" onClick={() => deleteMakanan(makanan._id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        )}
                    </table>
                    <button onClick={() => setModalAddIsOpened(true)} className="float-right bg-green-400 p-3 text-white font-bold rounded-md mt-5">Tambah Makanan</button>
                </div>
    
                <Modal isOpen={modalAddIsOpened} onRequestClose={() => setModalAddIsOpened(false)}>
                    <button className="p-3 bg-red-500 text-white rounded-md float-right" onClick={() => setModalAddIsOpened(false)}>Close</button>
                    
                    <h1 className="text-3xl font-bold text-black text-center mt-16">Tambah Makanan</h1>
    
                    <form onSubmit={(e) => addMakanan(e)}>
                        <div>
                            <label htmlFor="namaMakanan" className="mt-12 inline-block text-right w-1/6 font-bold text-xl mx-5">Nama Makanan</label>
                            <input required type="text" ref={inputNamaMakanan} name="namaMakanan" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div>
                            <label htmlFor="nilaiProtein" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Protein</label>
                            <input required type="number" ref={inputProtein} name="nilaiProtein" step="0.01" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div>
                            <label htmlFor="nilaiLemak" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Lemak</label>
                            <input required type="number" ref={inputLemak} name="nilaiLemak" step="0.01" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div>
                            <label htmlFor="nilaiKarbo" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Karbohidrat</label>
                            <input required type="number" ref={inputKarbo} name="nilaiKarbo" step="0.01" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div>
                            <label htmlFor="nilaiTakaran" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Takaran</label>
                            <input required type="number" ref={inputTakaran} name="nilaiTakaran" step="0.01" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div>
                            <label htmlFor="nilaiKalori" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Kalori</label>
                            <input required type="number" ref={inputKalori} name="nilaiKalori" step="0.01" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                        </div>
                        <div className="text-center mt-10">
                            <button className="p-3 bg-green-400 text-lg text-white rounded-md font-bold" type="submit">Submit</button>
                        </div>
                    </form>
                </Modal>
    
                <Modal isOpen={modalEditIsOpened} onRequestClose={() => setModalEditIsOpened(false)}>
                    <button className="p-3 bg-red-500 text-white rounded-md float-right" onClick={() => setModalEditIsOpened(false)}>Close</button>
                    
                    <h1 className="text-3xl font-bold text-black text-center mt-16">Edit Makanan</h1>
    
                    {dataMakananSpesifik && (
                        <form onSubmit={(e) => editMakanan(e)}>
                            <input ref={idEditMakanan} type="hidden" defaultValue={dataMakananSpesifik._id} />
                            <div>
                                <label htmlFor="namaMakanan" className="mt-12 inline-block text-right w-1/6 font-bold text-xl mx-5">Nama Makanan</label>
                                <input required defaultValue={dataMakananSpesifik.Nama_Makanan} type="text" ref={editNamaMakanan} name="namaMakanan" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div>
                                <label htmlFor="nilaiProtein" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Protein</label>
                                <input required defaultValue={dataMakananSpesifik.Nilai_Protein} step="0.01" type="number" ref={editProtein} name="nilaiProtein" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div>
                                <label htmlFor="nilaiLemak" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Lemak</label>
                                <input required defaultValue={dataMakananSpesifik.Nilai_Lemak} step="0.01" type="number" ref={editLemak} name="nilaiLemak" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div>
                                <label htmlFor="nilaiKarbo" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Karbohidrat</label>
                                <input required defaultValue={dataMakananSpesifik.Nilai_Karbo} step="0.01" type="number" ref={editKarbo} name="nilaiKarbo" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div>
                                <label htmlFor="nilaiTakaran" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Takaran</label>
                                <input required defaultValue={dataMakananSpesifik.Nilai_Takaran} step="0.01" type="number" ref={editTakaran} name="nilaiTakaran" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div>
                                <label htmlFor="nilaiKalori" className="mt-10 inline-block text-right w-1/6 font-bold text-xl mx-5">Nilai Kalori</label>
                                <input required defaultValue={dataMakananSpesifik.Nilai_Kalori} step="0.01" type="number" ref={editKalori} name="nilaiKalori" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                            </div>
                            <div className="text-center mt-10">
                                <button className="p-3 bg-green-400 text-lg text-white rounded-md font-bold" type="submit">Submit</button>
                            </div>
                        </form>
                    )}
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

export default MakananCRUD;