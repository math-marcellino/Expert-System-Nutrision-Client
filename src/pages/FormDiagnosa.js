import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import diagnosa_penyakit from '../images/diagnosa-penyakit.png';

function FormDiagnosa(){
    const [checkedState, setCheckedState] = useState([])

    const inputNama = useRef();
    const inputJenisKelamin = useRef();
    const inputBeratBadan = useRef();
    const inputTinggiBadan = useRef();
    const inputPekerjaan = useRef();
    const inputAktivitas = useRef();

    const getData = (event) =>{
        event.preventDefault();
        //variabel form data diri
        const nama = inputNama.current.value;
        const jenisKelamin = inputJenisKelamin.current.value;
        const beratBadan = inputBeratBadan.current.value;
        const tinggiBadan = inputTinggiBadan.current.value;
        const pekerjaan = inputPekerjaan.current.value;
        const aktivitas = inputAktivitas.current.value;

        const data_diri = {
            nama: nama,
            jenisKelamin: jenisKelamin,
            beratBadan: beratBadan,
            tinggiBadan: tinggiBadan,
            pekerjaan: pekerjaan,
            aktivitas: aktivitas
        };

        console.log(data_diri);
    }

    const boxChecked = (value) =>{

    }

    return (
        <div>
            <div className="w-4/5 relative">
                <h1 className="text-3xl text-green-500 font-extrabold m-5">Expert System</h1>
            </div>
            <form className="w-4/5 m-auto" onSubmit={getData}>
                {/* Pertanyaan Data Diri */}
                <div className="px-5 my-10">
                    <h1 className="text-center text-3xl font-extrabold p-10">Data Diri</h1>

                    <div>
                        <label htmlFor="name" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Nama</label>
                        <input type="text" name="name" ref={inputNama} className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
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
                        <label htmlFor="pekerjaan" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Pekerjaan</label>
                        <input type="text" ref={inputPekerjaan} name="pekerjaan" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="aktivitas" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Aktivitas</label>
                        <select name="aktivitas" ref={inputAktivitas} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="pria">Pria</option>
                            <option value="wanita">Wanita</option>
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
                    <div className="grid grid-cols-7 w-4/5 m-auto">
                        <div className="col-span-4 flex justify-center items-center">
                            <div className="space-x-4 space-y-3">
                                <h1 className="text-2xl font-bold">Apa gejala penyakit yang sedang anda alami saat ini?</h1><br />
                                
                                <div>
                                    <input type="checkbox" id="G001" name="G001" value="G001"  onChange={boxChecked('G001')}/>
                                    <label htmlFor="G001" className="text-lg"> Sering mengalami sakit kepala atau pusing</label><br />
                                </div>

                                <div>
                                    <input type="checkbox" id="G002" name="G002" value="G002"/>
                                    <label htmlFor="G002" className="text-lg"> Wajah kemerahan</label><br />
                                </div>

                                <div>
                                    <input type="checkbox" id="G003" name="G003" value="G003"/>
                                    <label htmlFor="G003" className="text-lg"> Sering merasa kantuk atau kelelahan</label><br />
                                </div>

                                <div>
                                    <input type="checkbox" id="G004" name="G004" value="G004"/>
                                    <label htmlFor="G004" className="text-lg"> Detak jantung cepat</label><br />
                                </div>

                                <div>
                                    <input type="checkbox" id="G005" name="G005" value="G005"/>
                                    <label htmlFor="G005" className="text-lg"> Sulit bernafas</label><br />
                                </div>
                                
                            </div>
                        </div>

                        <div className="col-span-3 flex justify-center items-center">
                            <img src={diagnosa_penyakit} alt="" />
                        </div>

                    </div>                    
                </div>

                <div className="w-4/5 m-auto relative inset-x-0 bottom-0 my-10">
                    <Link to="/hasil-diagnosa"><button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button></Link>  
                    <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Back</button></Link>
                </div>
            </form>
        </div>
    );
}

export default FormDiagnosa;