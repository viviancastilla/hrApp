import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddEmployee.css";

const AddEmployee = ({ onAddEmployee }) => {
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        salary: "",
        phone: "",
        email: "",
        animaml: "",
        startDate: "",
        location: "",
        department: "",
        skills: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            ...formData,
            skills: formData.skills.split(",").map((s) => s.trim()),
        };

        onAddEmployee(newEmployee);
        navigate("/employees");
    };

    return(
        <div className="form-container">
            <h1>Add New Employee</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} />
                <input type="text" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                <input type="text" name="animal" placeholder="Favorite Animal" value={formData.animal} onChange={handleChange} />
                <input type="text" name="startDate" placeholder="Start Date" value={formData.startDate} onChange={handleChange} />
                <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
                <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
                <input type="text" name="skills" placeholder="Skills" value={formData.skills} onChange={handleChange} />

                <button type="submit">Add employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;