import {Route,  Routes } from 'react-router-dom';
import './App.css';
import Resume from './pages/Resume';
import Main from './pages/Main';
import Result from './pages/Result/Result';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({surname: '', name: '', fathername: '', img: '', post: '', salary: '', busyness: '', chart: '', telefhone: '', email: ''});
  const [preview, setPreview] = useState(null);


  return (
    <div className="App">
      <Routes>
        <Route path='/resume_konstructor' element={<Main change='Cоставить резюме'/>}/>
        <Route path='/resume' element={<Resume setPreview={setPreview} preview={preview} formData={formData} setFormData={setFormData} />}/>
        <Route path='result' element={<Result preview={preview} formData={formData}/>}/>
      </Routes>
    </div>
  );
}

export default App;
