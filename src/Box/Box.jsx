import "./Box.css";

const Box =(props) => {
    return (
        <form>
            <div>
                <input placeholder="Name"/>
                <input placeholder="Title"/>
                <input placeholder="Salary"/>
                <input placerholder="Phone"/>
                <input placeholder="Email"/>
                <input placeholder="Animal"/>
            </div>
        </form>
    );
};

export default Box;