import React from "react";
import { useState,useEffect } from "react";
import Card from "../Cards/Cards";
import PieChartComponent from "../PieCharts/Piecharts";
import styles from './Topsection.module.css'

function TopSection(){


    return (
        <div className={styles.top}>
            <Card />
            
            <PieChartComponent/>
        </div>
    )
}

export default TopSection;