import { Link } from 'react-router-dom';

function HasilDiagnosa(){
    return (
        <div>
            <div className="w-4/5 relative">
                <h1 className="text-3xl text-green-500 font-extrabold m-5">Expert System</h1>
            </div>
            <h1 className="text-center text-4xl font-extrabold">Hasil Diagnosa</h1>
            <div className="w-4/5 m-auto p-3 my-5 text-center">
                <div>
                    <h1 className="text-2xl">Berdasarkan gejala yang anda pilih, kemungkinan anda menderita : </h1>
                    <h1 className="text-xl my-5 font-bold">Nama Penyakit</h1>
                    <p>deskripsi penyakit...</p>
                    <br />
                    <h1 className="text-2xl my-5">Kebutuhan kalori anda adalah : </h1>
                    <h1 className="text-xl my-5 font-bold">... kkal</h1>
                </div>
                <br />
                <div>
                    <h1 className="text-xl my-5 font-bold">Berikut adalah rekomendasi bahan makanan yang dapat anda konsumsi :</h1>
                    <table className="shadow-lg bg-white m-auto">
                        <thead class="bg-green-400 text-white">
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
                            <tr>
                                <td class="px-6 py-2 text-s">test</td>
                                <td class="px-6 py-2 text-s">test</td>
                                <td class="px-6 py-2 text-s">test</td>
                                <td class="px-6 py-2 text-s">test</td>
                                <td class="px-6 py-2 text-s">test</td>
                                <td class="px-6 py-2 text-s">test</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="w-4/5 m-auto text-center relative inset-x-0 bottom-0 my-10">
                <Link to="/"><button className="px-6 py-2 bg-green-400 hover:bg-green-500 transition duration-300 text-white text-lg font-bold rounded-full ">Home</button></Link>  
                
            </div>
        </div>
    );
}

export default HasilDiagnosa;