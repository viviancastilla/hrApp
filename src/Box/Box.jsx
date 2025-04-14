import {useState} from 'react';
import './App.css';

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