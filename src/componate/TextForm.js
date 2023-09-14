import React, { useState } from 'react'

const TextForm = (props) => {
  console.log("props", props.mode)

  const [text, setText] = useState(" ")

  const handelUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText)
    props.showAlert("convert to UpperCase !", "Success")
  }

  const handelLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText)
    props.showAlert("convert to LowerCase !", "Success")
  }

  const handelClearClick = () => {
    const newText = '';
    setText(newText)
    props.showAlert("Text Cleared !", "Success")
  }

  const handelCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copy To ClipBoard !", "Success")
  }

  const handelExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces  Removed !", "Success")
  }


  const handelOneCheng = (event) => {
    setText(event.target.value)
  }


  return (
    <div className='container' style={{ backgroundColor: props.mode === "light" ? props.mode : "light" }}>
      <div className='container my-1'>
        <h2>{props.heading}</h2>
        <div class="mb-3">
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handelOneCheng} style={{ backgroundColor: props.mode === 'light' ? props.mode : 'light' }} ></textarea>
        </div>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handelUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handelLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handelClearClick}>clear Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handelCopy}>Copy Text</button>
        <button disabled={text.length === 0} className='btn btn-primary mx-2' onClick={handelExtraSpaces}>Remove Extra Spaces</button>

      </div>
      <div className='container my-2'>
        <h2>your text summary</h2>
        <p>{text ? text.trim().split(" ").length : 0} words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>


    </div>
  )
}

export default TextForm