import  { useState } from 'react'
import "../styles/GeneralInfo.css";
export default function GeneralInfo() {
    const [isEdit,setIsEdit] = useState(true);
    const [formData,setFormData] = useState({name:"",email:"",phone:""});

    const handleChange =(e) =>{
        const {name,value} = e.target;
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
    <div className ="general-info">
        <h2>General Information</h2>
        {isEdit ? (
            <div>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
                />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
                />
                <input type="tel" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange}
                />
                <button onClick={handleSubmit}>Save</button>
            </div>
            ) : (
                <div>
                    <p>Name: {formData.name}</p>
                    <p>Email: {formData.email}</p>
                    <p>Phone: {formData.phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
                )}
                </div>

        );
}
