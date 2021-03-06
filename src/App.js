import Home from './pages/Home';
import FormDiagnosa from './pages/FormDiagnosa';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './pages/AdminLogin';
import MakananCRUD from './pages/MakananCRUD';
import LaranganCrud from './pages/LaranganCRUD';
import AdminRegister from './pages/AdminRegister';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/form-diagnosa" element={<FormDiagnosa/>} />
        <Route path="/admin-login" element={<AdminLogin />}/>
        <Route path="/admin-register" element={<AdminRegister />}/>
        <Route path="/admin-dashboard/" element={<MakananCRUD/>} />
        <Route path="/admin-dashboard/makanan" element={<MakananCRUD/>} />
        <Route path="/admin-dashboard/larangan" element={<LaranganCrud/>} />
      </Routes>
    </div>
  );
}

export default App;
