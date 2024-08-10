import React, { useState } from "react";

export default function TextForm(props) {
  const handleUp = () => {
    console.log("Udate " + text);
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLow = () => {
    console.log("Udate " + text);
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const handelCopy =()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handelExtraSplit =()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const handelClear =()=>{
    let newtext='';
    setText(newtext);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleChange}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUp} >Upper</button>
        <button className="btn btn-primary mx-4" onClick={handleLow}>Lower</button>
        <button className="btn btn-primary " onClick={handelCopy}>Copy</button>
        <button className="btn btn-primary mx-4" onClick={handelExtraSplit}>Extra Space</button>
        <button className="btn btn-primary " onClick={handelClear}>Clear</button>
      </div>

      <div className="container my-4">
        <p>{text.split(" ").length} : Words & {text.length} : Character</p>
        <p>{0.008 * text.split(" ").length} : Minutes to read</p>
        <h6>Preview</h6>
        <p>{text}</p>
      </div>
    </>
  );
}
