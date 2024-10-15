import React from 'react';
import style from './Pleloader.module.css';
import preloader from '../../../img/loader.gif'

let Preloader = (props) => {
    return (
        <img src={preloader} className={style.preloader}/>
    )
}

export default Preloader;
