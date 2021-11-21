import Home from './pages/Home';
import HasilDiagnosa from './pages/HasilDiagnosa';
import FormDiagnosa from './pages/FormDiagnosa';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import MakananCRUD from './pages/MakananCRUD';
import LaranganCrud from './pages/LaranganCRUD';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hasil-diagnosa' element={<HasilDiagnosa />} />
        <Route path="/form-diagnosa" element={<FormDiagnosa />} />
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="/admin-dashboard/" element={<MakananCRUD/>} />
        <Route path="/admin-dashboard/makanan" element={<MakananCRUD/>} />
        <Route path="/admin-dashboard/larangan" element={<LaranganCrud/>} />
      </Routes>
    </div>
  );
}

export default App;
