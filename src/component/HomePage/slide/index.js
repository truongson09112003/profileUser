import styles from './slide.module.css'
import { useState, useEffect, createContext } from 'react'
import Slider from './Handle'
import { Routes, Route } from 'react-router-dom'
import OverView from './overView'



function Slide() {

    return (
        <>
            <Slider />
        </>
    )
}


export default Slide