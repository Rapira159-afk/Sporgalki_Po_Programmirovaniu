import React from 'react';
import d from './Spisok_L.module.css'
import {Contact} from "./4Contact/4Contact";
import {Raboni} from "./3Raboni/3Raboni";
import {Znanie} from "./2Znanie/2Znanie";
import {Alert} from "./1Alert/1Alert";
import { Uvlech } from './5Uvlech/5Uvlech';
import { Cherty } from './6Cherty/6Cherty';


const Spisok_L = () => {
    return (<div className={d.stile}>
            <ul>
                <div><Alert/></div>
                <div><Znanie/></div>
                <div><Raboni/></div>
                <div><Contact/></div>
                <div><Uvlech/></div>
                <div><Cherty/></div>
            </ul>

        </div>
    )
};
export {Spisok_L};