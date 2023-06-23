import React from 'react';
import info from "./info";
import "./diplom.css"
import ICloud from "./iCloud";
import Yandex from "./Yandex";
import Google from "./Google";
import OneDrive from "./OneDrive";
import Navs from "./nevs";
import Mega from "./Mega";
import DropBox from "./DropBox";



const Info = () => {
    return (
        <div className={"gener"}>
            <Navs/>
            <h1 style={{marginLeft:"15px"}} >Вы используете:</h1>
            <div className={"inf"}>
                {localStorage.getItem("check2") === "true"?
                    <div className={"box"}><Yandex/></div> : ""}
                {localStorage.getItem("check3") === "true"?
                    <div className={"box"}><Google/></div>: ""}
                {localStorage.getItem("check4") === "true"?
                    <div className={"box"}><OneDrive/></div>: ""}
                {localStorage.getItem("check5") === "true"?
                    <div className={"box"}><Mega/></div>: ""}
                {localStorage.getItem("check6") === "true"?
                    <div className={"box"}><DropBox/></div>: ""}
            </div>
        </div>
    );
};

export default Info;
