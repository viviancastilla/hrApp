const PersonList = ({ employees }) => {
    return (
        <div>
            <h1>Employee List</h1>
            {employees.length === 0 ? (
                <p>No employees added yet.</p>
            ) :(
                <ul>
                    {
                        employees.map((emp) => (
                            <li key={emp.id}>
                                <h3>{emp.name}</h3>
                                <p>Title: {emp.title}</p>
                                <p>Department: {emp.department}</p>
                                <p>Location: {emp.location}</p>
                                <p>start: {emp.start}</p>
                                <p>Phone: {emp.phone}</p>
                                <p>Email: {emp.email}</p>
                                <p>Favorite Animal: {emp.animal}</p>
                                <p>Salary: {emp.salary}€</p>
                                <p>Skills: {emp.skills}</p>
                            </li>
                        ))
                    }
                </ul>
            )}
        </div>
    );
};

export default PersonList;