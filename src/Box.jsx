import {useState} from 'react';
import './App.css';
import "./Box.css";

const Box = (props) => {
    return(
        <div className="box">
            <p>{props.fullName}</p>
            <p>{props.title}</p>
            <p>{props.myAnimal}</p>
            <p>{props.age}</p>
            <p>ID: {props.id}</p>
        </div>
    );
};


const Box ? (props) => {
    return(
        <div className="box"
    )
}

function Box(){
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
}

export default Box;