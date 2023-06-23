import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Navs from "./nevs";
import {Button, Checkbox} from "@mui/material";

const Diplom = () => {
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
 const loc = () => {
     // localStorage.setItem("check2", check2)
     localStorage.setItem("check3", check3)
     localStorage.setItem("check4", check4)
     localStorage.setItem("check5", check5)
     localStorage.setItem("check6", check6)
 }
loc()

    return (
        <div className={"gener"}>
            <Navs></Navs>
            <div className={"linkis"} style={{margin:"45px"}}>
            <h1 style={{fontSize:"40px",fontFamily:""}}>Выберите облачные сервисы:</h1>
           <div className={"ln"}>
               <div className={"l"}> <Checkbox id={"sub2"} onChange={()=>setCheck2(!check2)}  checked={check2}/>
            <label style={{marginTop:"5px"}} htmlFor="sub2">Яндекс Диск</label>
           </div>
               <div className={"l"}> <Checkbox id={"sub3"} onChange={()=>setCheck3(!check3)}  checked={check3}/>
            <label style={{marginTop:"5px"}} htmlFor="sub3">Google Drive</label>
            </div>
               <div className={"l"}><Checkbox id={"sub4"} onChange={()=>setCheck4(!check4)}  checked={check4}/>
            <label style={{marginTop:"5px"}} htmlFor="sub4">OneDrive</label>
        </div>
               <div className={"l"}><Checkbox id={"sub5"} onChange={()=>setCheck5(!check5)}  checked={check5}/>
                   <label style={{marginTop:"5px"}} htmlFor="sub5">Mega</label>
               </div>
               <div className={"l"}><Checkbox id={"sub6"} onChange={()=>setCheck6(!check6)}  checked={check6}/>
                   <label style={{marginTop:"5px"}} htmlFor="sub6">DropBox</label>
               </div>
           </div>
               <Link to={"/info"}><Button style={{backgroundColor:"black"}} variant={"contained"} >Подтвердить</Button></Link>

            </div>
        </div>
    );
};

export default Diplom;
