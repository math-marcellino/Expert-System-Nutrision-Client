import { Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import diagnosa_penyakit from '../images/diagnosa-penyakit.png';
import axios from 'axios';

function FormDiagnosa(){
    const [checkedState, setCheckedState] = useState([]); //check state dari checbox
    const [dataGejala, setGejala] = useState([]); //data list gejala dari database
    const [data, setData] = useState({});
    const [kodeGejala, setKodeGejala] = useState([]); //kode gejala pasien yang isi

    const inputNama = useRef();
    const inputJenisKelamin = useRef();
    const inputBeratBadan = useRef();
    const inputTinggiBadan = useRef();
    const inputAktivitas = useRef();
    const inputUsia = useRef();

    const getFormData = async (event) =>{
        event.preventDefault();
        //variabel form data diri
        const nama = inputNama.current.value;
        const jenisKelamin = inputJenisKelamin.current.value;
        const beratBadan = inputBeratBadan.current.value;
        const tinggiBadan = inputTinggiBadan.current.value;
        const aktivitas = inputAktivitas.current.value;
        const usia = inputUsia.current.value;

        const data_diri = {
            nama: nama,
            usia: usia,
            jenis_kelamin: jenisKelamin,
            tinggi_bada: tinggiBadan,
            berat_badan: beratBadan,
            faktor_aktivitas: aktivitas,
            gejala: kodeGejala
        };

        const res = await axios.post('http://localhost:8080/api/inference/checking', data_diri);

        const hasil = res.data;

        console.log(hasil);
    }

    useEffect(() => {
        fetchDataGejala();
    }, []);

    useEffect(() => {
        setGejala(data.data)
        console.log(dataGejala)
    }, [data, dataGejala]);

    useEffect(() => {
        if(dataGejala){
            const arrayState = new Array(dataGejala.length).fill(false);
            setCheckedState(arrayState);
        }
    }, [dataGejala]);

    const fetchDataGejala = async () =>{
        const response = await axios.get('http://localhost:8080/api/gejala');
        setData(response);
    }

    const handleOnChange = (position) =>{
        const updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);
        setCheckedState(updatedCheckedState);
        const arrayGejala = [];
        for(var i = 0; i < updatedCheckedState.length; i++){
            if(updatedCheckedState[i] == true){
                arrayGejala.push(dataGejala[i].ID_Gejala);
            }
        }
        setKodeGejala(arrayGejala);
    }

    return (
        <div>
            <div className="w-4/5 relative">
                <h1 className="text-3xl text-green-500 font-extrabold m-5">Expert System</h1>
            </div>
            <form className="w-4/5 m-auto" onSubmit={getFormData}>
                {/* Pertanyaan Data Diri */}
                <div className="px-5 my-10">
                    <h1 className="text-center text-3xl font-extrabold p-6">Data Diri</h1>

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
                            <option value="pria">Pria</option>
                            <option value="wanita">Wanita</option>
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
                
                {/* Pertanyaan Gejala */}
                <div className="my-10">
                    <div className="grid grid-cols-7 m-auto">
                        <div className="col-span-4 flex justify-center items-center">
                            {dataGejala && (
                                 <div className="space-x-4 space-y-3">
                                
                                    <h1 className="text-2xl font-bold">Apa gejala penyakit yang sedang anda alami saat ini?</h1><br />
 
                                     {dataGejala.map((gejala, index) =>(
                                         <div>
                                             <input type="checkbox" checked={checkedState[index]} onChange={() => handleOnChange(index)} id={gejala.ID_gejala} name={gejala.ID_gejala} value={gejala.ID_Gejala}/>
                                             <label htmlFor={gejala.ID_Gejala} className="text-lg mx-4">{gejala.Nama_Gejala}</label><br />
                                         </div>
                                     ))}
                                     
                                 </div>   
                            )}
                            
                        </div>

                        <div className="col-span-3 flex justify-center items-center">
                            <img src={diagnosa_penyakit} alt="" />
                        </div>

                    </div>                    
                </div>

                <div className="w-4/5 m-auto relative inset-x-0 bottom-0 my-10">
                    <button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button> 
                    <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Back</button></Link>
                </div>
            </form>
        </div>
    );
}

export default FormDiagnosa;