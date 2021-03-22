import React from 'react';
import './Osnova.css'
import {Route } from "react-router-dom";
import {Osnov1} from "./1Alert/1Alert";
import {Osnov2} from "./2Znanie/2Znanie";
import {Osnov3} from "./3Raboni/3Raboni";
import {Osnov4} from './4Contact/4Contact';
import {Osnov5} from "./5Uvlech/5Uvlech";
import {Osnov6} from "./6Cherty/6Cherty";

function Osnova(props) {
    return (
          <div>
            <div><Route exact path='/1Alert' render={()=><Osnov1 State={props.State}/>}/></div>
            <div><Route exact path='/2Znanie' render={()=><Osnov2 Znanie={props.State.Znanie}/>}/></div>
            <div><Route exact path='/3Raboni' render={()=><Osnov3 Raboti={props.State.Raboti}/>}/></div>
            <div><Route exact path='/4Contact' render={()=><Osnov4 Cont={props.State.Cont}/>}/></div>
            <div><Route exact path='/5Uvlech' render={()=><Osnov5 Uvlech={props.State.Uvlech}/>}/></div>
            <div><Route exact path='/6Cherty' render={()=><Osnov6 Cherty={props.State.Cherty}/>}/></div>
        </div>
    )
}

export {Osnova};