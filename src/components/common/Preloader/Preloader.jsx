import React from "react";
import preloader from './../../../assets/images/preloader.svg';

const Preloader = (props) => {
    return (
        <img src={preloader} alt="preloader" role={'main'}/>
    )
}

export default Preloader;