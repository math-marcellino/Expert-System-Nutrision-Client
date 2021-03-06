import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import React, { useRef, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';

function FormDiagnosa(){

    const [hasilDiagnosa, setHasilDiagnosa] = useState({});
    const [modalIsOpened, setModalIsOpened] = useState(false);
    const [laranganMakanan, setLaranganMakanan] = useState([]);
    const [makananTerpilih, setMakananTerpilih] = useState([]);
    const [loading, setLoading] = useState(false);

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
        const jenisKelamin = inputJenisKelamin.current.value;
        const beratBadan = inputBeratBadan.current.value;
        const tinggiBadan = inputTinggiBadan.current.value;
        const aktivitas = inputAktivitas.current.value;
        const usia = inputUsia.current.value;
        const stress = inputStress.current.value;

        const data_diri = {
            // nama: nama,
            usia: usia,
            jenis_kelamin: jenisKelamin,
            tinggi_badan: tinggiBadan,
            berat_badan: beratBadan,
            faktor_aktivitas: aktivitas,
            faktor_stress: stress
        };

        setModalIsOpened(true);
        setLoading(true);

        const res = await axios.post('https://expert-system-nutrition.herokuapp.com/api/inference/checking', data_diri);
        
        setHasilDiagnosa(res.data);

        setMakananTerpilih(res.data.makananTerpilih);

        setLaranganMakanan(res.data.makananLarangan);

        setLoading(false);
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

                    {/* <div>
                        <label htmlFor="name" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Nama</label>
                        <input type="text" name="name" ref={inputNama} className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div> */}

                    <br />

                    <div>
                        <label htmlFor="usia" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Usia</label>
                        <input required type="number" name="usia" ref={inputUsia} min="18" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="kelamin" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Jenis Kelamin</label>
                        <select required name="kelamin" ref={inputJenisKelamin} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Pria">Pria</option>
                            <option value="Wanita">Wanita</option>
                        </select>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="berat" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Berat Badan (Kg)</label>
                        <input required type="number" ref={inputBeratBadan} name="berat" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="tinggi" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Tinggi Badan (Cm)</label>
                        <input required type="number" ref={inputTinggiBadan} name="tinggi" className="border w-3/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3"/>   
                    </div>

                    <br />

                    <div>
                        <label htmlFor="aktivitas" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Aktivitas</label>
                        <select required name="aktivitas" ref={inputAktivitas} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Ringan">Ringan - Aktivitas hidup utama seperti istirahat, kerja kantoran atau menyetir</option>
                            <option value="Sedang">Sedang - Disamping kegiatan sehari-hari, melakukan kegiatan yang lebih berat, seperti berdiri lebih lama atau pekerjaan rumah.</option>
                            <option value="Berat">Berat - Sedikit duduk / istirahat dan kemungkinan bekerja dilingkungan yang membutuhkan berdiri dan/atau sedikit kerja fisik.</option>
                        </select>
                    </div>

                    <br />

                    <div>
                        <label htmlFor="stress" className="inline-block text-right w-1/6 font-bold text-xl mx-5">Stress</label>
                        <select required name="stress" ref={inputStress} className="border w-1/5 rounded-xl focus:outline-none focus:border-green-400 py-2 px-3">
                            <option value="" selected disabled>Pilih</option>
                            <option value="Ringan">Ringan</option>
                            <option value="Sedang">Sedang</option>
                            <option value="Berat">Berat</option>
                        </select>
                    </div>
                </div>

                <div className="w-4/5 m-auto relative inset-x-0 bottom-0 my-10">
                    <button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button>
                    {/* <button type="submit" className="float-right px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Lihat Hasil</button>  */}
                    <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Back</button></Link>
                </div>
            </form>

            <Modal isOpen={modalIsOpened} onRequestClose={() => setModalIsOpened(false)} shouldCloseOnEsc={false} shouldCloseOnOverlayClick={false}>
                {loading ? (
                    <div className="flex justify-center items-center w-full h-full">
                        <div className="m-auto text-center">
                            <ReactLoading type="spinningBubbles" color="green" height={'50%'} width={'50%'}/>
                            <h1 className="mt-5">Menjalankan diagnosa...</h1>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1 className="text-3xl font-bold text-black text-center mt-10">Hasil Diagnosa</h1>
                        <div className="w-4/5 m-auto p-3 my-5">
                        <h1 className="text-center text-xl my-5">Penyakit Anda : <b>{hasilDiagnosa.penyakit}</b></h1>
                        <h1 className="text-xl text-center my-5 font-bold">Berikut adalah kebutuhan gizi anda</h1>
                            <table className="shadow-lg bg-white m-auto text-center">
                                <thead className="bg-green-400 text-white">
                                    <tr>
                                        <th className="px-6 py-2 text-s">Kebutuhan Energi</th>
                                        <th className="px-6 py-2 text-s">Kebutuhan Karbohidrat</th>
                                        <th className="px-6 py-2 text-s">Kebutuhan Protein</th>
                                        <th className="px-6 py-2 text-s">Kebutuhan Lemak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="px-6 py-2 text-s">{hasilDiagnosa.energi} kkal</td>
                                        <td className="px-6 py-2 text-s">{hasilDiagnosa.karbo} gram</td>
                                        <td className="px-6 py-2 text-s">{hasilDiagnosa.protein} gram</td>
                                        <td className="px-6 py-2 text-s">{hasilDiagnosa.lemak} gram</td>
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                            
                            <h1 className="text-xl text-center my-5 font-bold">Berikut adalah rekomendasi bahan makanan yang dapat anda konsumsi</h1>
                            <table className="shadow-lg bg-white text-center m-auto">
                                <thead className="bg-green-400 text-white">
                                    <tr>
                                        <th className="px-6 py-2 text-s">Nama Makanan</th>
                                        <th className="px-6 py-2 text-s">Takaran</th>
                                        <th className="px-6 py-2 text-s">Protein</th>
                                        <th className="px-6 py-2 text-s">Lemak</th>
                                        <th className="px-6 py-2 text-s">Karbohidrat</th>
                                        <th className="px-6 py-2 text-s">Kalori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {makananTerpilih.map((makanan) => (
                                    <tr>
                                        <td className="px-6 py-2 text-s">{makanan.Nama_Makanan}</td>
                                        <td className="px-6 py-2 text-s">{makanan.Nilai_Takaran} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Nilai_Protein} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Nilai_Lemak} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Nilai_Karbo} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Nilai_Kalori} kkal</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <br />

                            <h1 className="text-xl text-center my-5 font-bold">Berikut adalah larangan bahan makanan yang tidak boleh anda konsumsi</h1>
                            <table className="shadow-lg bg-white text-center m-auto">
                                <thead className="bg-green-400 text-white">
                                    <tr>
                                        <th className="px-6 py-2 text-s">Nama Makanan</th>
                                        <th className="px-6 py-2 text-s">Takaran</th>
                                        <th className="px-6 py-2 text-s">Protein</th>
                                        <th className="px-6 py-2 text-s">Lemak</th>
                                        <th className="px-6 py-2 text-s">Karbohidrat</th>
                                        <th className="px-6 py-2 text-s">Kalori</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {laranganMakanan.map((makanan) => (
                                    <tr>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nama_Makanan}</td>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nilai_Takaran} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nilai_Protein} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nilai_Lemak} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nilai_Karbo} gram</td>
                                        <td className="px-6 py-2 text-s">{makanan.Makanan.Nilai_Kalori} kkal</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h1 className="text-2xl text-center">
                                Silahkan lakukan konsultasi lebih lanjut dengan dokter spesialis untuk mendapatkan hasil yang lebih spesifik.
                            </h1>
                        </div>
                        <div className="w-4/5 m-auto text-center relative inset-x-0 bottom-0 my-10">
                            <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Home</button></Link>  
                        </div>
                    </div>
                )}
                
            </Modal>
        </div>
    );
}

export default FormDiagnosa;