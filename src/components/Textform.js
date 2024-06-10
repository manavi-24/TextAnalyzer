    import React from 'react'
    import { useState } from 'react'

    export default function Textform(props) {
        const [text, setText] = useState("");
        
    
        const handleOnUClick = () => {
            let newText = text.toUpperCase();
            setText(newText);

            props.showAlert("Text has been set to uppercase", "success");
        }
        const handleOnLClick = () => {
            let newText = text.toLowerCase();
            setText(newText);
            
            props.showAlert("Text has been set to lowercase", "success");
        }
        const handleOnChange = (event) => {
        setText(event.target.value);
        }
        const handleOnClear = () => {
            let newText = "";
            setText(newText);
            
            props.showAlert("Text has been cleared", "success");
        }
        const handleCopy = () => {
            /*let text = document.getElementById("myBox");
            text.select();*/
            navigator.clipboard.writeText(text);
            props.showAlert("Text has been copied", "success");
        }
        const handleExtraSpaces = () => {
            let newText = text.replace(/\s+/g, ' ');
            setText(newText);

            props.showAlert("Extra spaces have been removed", "success");
        }

        const countCharactersExcludingSpaces = (text) => {
            return text.replace(/\s/g, "").length;
        };
        
       

        return (
            <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
        <div className="my-3">
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#042743', color: props.mode==='dark'?'white':'#042743'}} ></textarea>
        </div>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnUClick} >Convert to uppercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnLClick} >Convert to lowercase</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleOnClear} >Clear Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleCopy} >Copy Text</button>
        <button type="button" disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleExtraSpaces} >Remove extra spaces</button>


        </div>

        <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {countCharactersExcludingSpaces(text)} Characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview"}</p>   
        </div>


        </>
    )
    }
