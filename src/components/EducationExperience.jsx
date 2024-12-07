import {useState} from 'react';
import "../styles/EducationExperience.css";

export default function EducationExperience({data,onChange}) {
    const [isEdit,setIsEdit] = useState(true);
    const [formData,setFormData] = useState(data);
    const handleAdd = () =>{
        setFormData([...formData,{school:"",title:"",date:""}]);
    }
    const handleChange =(index,key,value) =>{
        const newFormData = [...formData];
        newFormData[index][key] = value;
        setFormData(newFormData);
    }
    const handleSubmit = () =>{
        setIsEdit(false);
        onchange(formData);
    }
    const handleEdit =() =>{
        setIsEdit(true);
    }
  return (
    <div className='education-experience'>
        <h2>Education Experience</h2>
        {isEdit?(
            <div>
                {formData.map((edu,index)=>(
                    <div key={index}>
                        <input type="text" value={edu.school} onChange={(e)=>handleChange(index,"school",e.target.value)
                        } placeholder="School"/>
                        <input type="text" value={edu.title} onChange={(e)=>handleChange(index,"title",e.target.value)
                        } placeholder="Title"/>
                        <input type="text" value={edu.date} onChange={(e)=>handleChange(index,"date",e.target.value)
                        } placeholder="Date"/>
                       </div> 
                ))
                }
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            ):(
                <div>
                    {formData.map((edu,index)=>(
                        <div key={index}>
                            <p>School:{edu.school}</p>
                            <p>Title:{edu.title}</p>
                            <p>Date:{edu.date}</p>
                        </div>
                    ))}
                    <button onClick={handleEdit}>Edit</button>
                    </div>
       )}

    </div>
  );
}
