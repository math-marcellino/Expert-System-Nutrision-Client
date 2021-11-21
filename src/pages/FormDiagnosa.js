import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import axios from 'axios';

function FormDiagnosa(){

    const inputNama = useRef();
    const inputJenisKelamin = useRef();
    const inputBeratBadan = useRef();
    const inputTinggiBadan = useRef();
    const inputAktivitas = useRef();
    const inputUsia = useRef();
    const inputStress = useRef();

    const getFormData = async (event) =>{
        event.preventDefault();
        //variabel form data diri
        const nama = inputNama.current.value;
        const jenisKelamin = inputJenisKelamin.current.value;
        const beratBadan = inputBeratBadan.current.value;
        const tinggiBadan = inputTinggiBadan.current.value;
        const aktivitas = inputAktivitas.current.value;
        const usia = inputUsia.current.value;
        const stress = inputStress.current.value;

        const data_diri = {
            nama: nama,
            usia: usia,
            jenis_kelamin: jenisKelamin,
            tinggi_badan: tinggiBadan,
            berat_badan: beratBadan,
            faktor_aktivitas: aktivitas,
            faktor_stress: stress
        };

        console.log(data_diri);

        const res = await axios.post('http://localhost:8080/api/inference/checking', data_diri);

        const hasil = res.data;

        console.log(hasil);
    }

    return (
        <div>
            <div className="w-4/5 relative">
                <h1 className="text-3xl text-green-500 font-extrabold m-5">Expert System</h1>
            </div>
            <form className="w-4/5 m-auto" onSubmit={getFormData}>
                {/* Pertanyaan Data Diri */}
                <div className="px-5 my-10">
                    <h1 className="text-center text-3xl font-extrabold p-6 mb-5">Data Diri</h1>

                    <div>
                        <label htmlFor="name" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Nama</label>
                        <input type="text" name="name" ref={inputNama} className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="usia" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Usia</label>
                        <input type="number" name="usia" ref={inputUsia} className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="kelamin" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Jenis Kelamin</label>
                        <select name="kelamin" ref={inputJenisKelamin} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="berat" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Berat Badan (Kg)</label>
                        <input type="number" ref={inputBeratBadan} name="berat" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="tinggi" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Tinggi Badan (Cm)</label>
                        <input type="number" ref={inputTinggiBadan} name="tinggi" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="aktivitas" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Aktivitas</label>
                        <select name="aktivitas" ref={inputAktivitas} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Ringan">Ringan</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Berat">Berat</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="stress" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Stress</label>
                        <select name="stress" ref={inputStress} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Ringan">Ringan</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Berat">Berat</option>
                        </select>
                    </div>

                    <br />
                    {/* <div>
                        <label htmlFor="faktor_stress" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Faktor Stress</label>
                        <select name="faktor_stress" className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="pria">Pria</option>
                            <option value="wanita">Wanita</option>
                        </select>
                    </div> */}
                </div>

                <div className="w-4/5 m-auto relative inset-x-0 bottom-0 my-10">
                    <Link to="/hasil-diagnosa"><button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button> </Link>
                    {/* <button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button>  */}
                    <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Back</button></Link>
                </div>
            </form>
        </div>
    );
}

export default FormDiagnosa;