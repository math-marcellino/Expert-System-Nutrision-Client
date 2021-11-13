import Home from './pages/Home';
import HasilDiagnosa from './pages/HasilDiagnosa';
import FormDiagnosa from './pages/FormDiagnosa';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hasil-diagnosa' element={<HasilDiagnosa />} />
        <Route path="/form-diagnosa" element={<FormDiagnosa />} />
      </Routes>
    </div>
  );
}

export default App;
