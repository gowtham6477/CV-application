import  { useState } from 'react';
import EducationExperience from './components/EducationExperience';
import GeneralInfo from './components/GeneralInfo';
import PracticalExperience from './components/PracticalExperience';
import CVDisplay from './components/CVDisplay';
import './styles/App.css';
function App() {
  const [cvData,setCvData] = useState({
    general:{name:"",email:"",phone:""},
    education:[],
    practical:[],
  });
  const handleGeneralInfoChange = (data) =>{
    setCvData((prevState) => ({
      ...prevState,
      general:data,
  }));
};
  const handleEductionalInfoChange = (data) =>{
    setCvData((prevState) => ({
      ...prevState,
      eduction:data,
  }));
}
  const handlePracticalInfoChange = (data) =>{
    setCvData((prevState) => ({
      ...prevState,
      practical:data,
  }));
};
  return (
    <div className='App'>
      <h1>CV Application</h1>
      <GeneralInfo data={cvData.general} onChange ={handleGeneralInfoChange}/>
      <EducationExperience data={cvData.education} onChange ={handleEductionalInfoChange
      }/>
      <PracticalExperience data={cvData.practical} onChange ={handlePracticalInfoChange}/>
      <CVDisplay data={cvData}/>
      </div>
  );
}
export default App;
