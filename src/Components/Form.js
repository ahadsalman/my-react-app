import React, {useState} from 'react'


export default function Form(props) {
    const [text, setText] = useState('Enter Text..');
    
    
    const handleClick = ()=> {
        let upText = text.toUpperCase();
        setText(upText);
    }
    
    const handledleOnchange = (event) =>{
    setText(event.target.value);
}

const handleLoClick = () => {

    let lowtext = text.toLowerCase();
    setText(lowtext);
}

const handleCleartext = () =>{

    setText("");
}

const [preview,setpreviewtext] = useState('Preview Text')

const handlePreview =()=>{
if(text.length===0){

    setpreviewtext('Please type some text to preview')
} else {

    setpreviewtext('Preview Text')
}
}
  return (
    <>
    <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
    <h1>{props.heading}</h1>
    <div className="container">
 
        <textarea className={`form-control bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`} value= {text} onChange={handledleOnchange} rows="8"/>
        <button className='btn btn-primary my-3 mx-2' onClick={handleClick}>Uppercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Lowercase</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handleCleartext}>Clear Text</button>
        <button className='btn btn-primary mx-2 my-2' onClick={handlePreview}>{preview}</button>
        

    
    <div className="container my-4"><h1>Your text summary</h1></div>
    <div className="container"><p>Total words are {text.trim().split(/\s/).filter(word => word).length} and total characters are {text.length}, and it will take {text.split(" ").length/125} minutes</p>
    <h2>Preview</h2>
    <p>{text.length===0?"Write something..":text}</p>
    </div>

</div>
</div>
</>
  )
}


