import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import Calendar from './Calendar.js';

const dji = 
[
    {Date: new Date('2000-01-03'), Open: 11501.849609, High: 11522.009766, Low: 11305.69043, Close: 11357.509766, Close: 11357.509766, Volume: 169750000},
    {Date: new Date('2000-01-04'), Open: 11349.75, High: 11350.05957, Low: 10986.450195, Close: 10997.929688, Close: 10997.929688, Volume: 178420000},
    {Date: new Date('2000-01-05'), Open: 10989.370117, High: 11215.099609, Low: 10938.669922, Close: 11122.650391, Close: 11122.650391, Volume: 203190000},
    {Date: new Date('2000-01-19'), Open: 11535.240234, High: 11574.679688, Low: 11456.009766, Close: 11489.360352, Close: 11489.360352, Volume: 193090000},
    {Date: new Date('2000-01-20'), Open: 11490.290039, High: 11558.700195, Low: 11274.980469, Close: 11351.299805, Close: 11351.299805, Volume: 191230000},
    {Date: new Date('2000-01-21'), Open: 11356.259766, High: 11387.599609, Low: 11232.480469, Close: 11251.709961, Close: 11251.709961, Volume: 205840000},
    {Date: new Date('2000-01-24'), Open: 11251.94043, High: 11366.5, Low: 10917.269531, Close: 11008.169922, Close: 11008.169922, Volume: 202740000},
    {Date: new Date('2000-01-25'), Open: 11010.959961, High: 11079.519531, Low: 10883.450195, Close: 11029.889648, Close: 11029.889648, Volume: 209230000}
];  

const CalendarView = () => {
    const svg = useRef(null);

    useEffect(()=>{
        const svgElement = Calendar(dji, {
            x: d => d.Date,
            y: d => d.Volume,
            weekday: 'weekday',
            width: 928,
        });

        console.log(svgElement);

        if(svg.current){
            svg.current.appendChild(svgElement)
        } 
    }, []);

 

    return (
        <div ref={svg} />

        );
    // {Calendar(dji, {
    //     x: d => d.Date,
    //     y: d => d.Volume,
    //     weekday: 'weekday',
    //     width: 928,
    // })
    // }
}

export default CalendarView;