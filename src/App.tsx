import { convertXML } from 'simple-xml-to-json';
import './App.css'
import {useEffect, useState} from "react";

function App() {
    const FetchXML = () => {
        let [json, setJson]= useState<string>('')
        useEffect(() => {
            fetch('https://boardgamegeek.com/xmlapi/boardgame/373106')
                .then(res => res.text())
                .then(data => {
                    setJson(convertXML(data))
                    console.log(data)
                    console.log(json)
                })
        },[])
        return (
            <>
                <div>{json}</div>
            </>
        )
    }

    return (
        <>
            <FetchXML />
        </>
    )
}

export default App
