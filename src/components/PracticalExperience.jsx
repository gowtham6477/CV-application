import {useState} from 'react'

export default function PracticalExperience() {
    const[isEdit,setIsEdit] = useState(true);
    const[formData,setFormData] = useState({
        company:"",
        position:"",
        responsibility:"",
        duration:"",
    });

    const handleChange = (e) =>{
        const{name,value} = e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit = () =>{
        setIsEdit(false);
        onchange(formData);
    }
    const handleEdit =() =>{
        setIsEdit(true);
    }
  return (
    <div className='Practical-experience'>
        <h2>Practical Experience</h2>
        {isEdit ?(
            <div>
                <input type="text" name="company" placeholder='company' value={formData.company} onChange={handleChange}
                />
                <input type="text" name="position" placeholder='position' value={formData.position} onChange={handleChange}
                />
                <input type="text" name="responsibility" placeholder='responsibility' value ={formData.responsibility} onChange={handleChange}
                />
                <input type="text" name="duration" placeholder='duration' value={formData.duration} onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
                
        ):(
            <div>
                <p>Company: {formData.company}</p>
                <p>Position: {formData.position}</p>
                <p>Responsibility: {formData.responsibility}</p>
                <p>Duration: {formData.duration}</p>
                <button onClick={handleEdit}></button>
            </div>
            )}
            </div>

    );
}
