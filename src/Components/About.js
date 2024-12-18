import React, { useState } from 'react'

export default function About(props) {
 
//   const [myStyle, setStyle] = useState({
  
//     color: 'black',
//     background: 'white'

//   })

//   const [btntext,setbtnText] = useState("Enable dark mode");


//    const handledarkmode = ()=> {
//     if(myStyle.color==='white'){

//       setStyle({
//         color: 'black',
//         background: 'white'
    

//       })

//       setbtnText("Enable dark mode")
//     }
//   else{
//     setStyle ( { color: 'white',
//      background: 'black',
//      border: '0.5px solid white'
//   })
//   setbtnText("Enable light mode")
// }}


  return (
  <>
  
  <div className={`container accordion bg-${props.mode} `} id="accordionExample">
  <h2 className="mt-5 ms-3">Accordian</h2>
  <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
    <h2 className="accordion-header">
      <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`accordion-item bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo"  className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'} accordion-collapse collapse`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'} accordion-item`}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree"  className={`bg-${props.mode} text-${props.mode==='light'?'dark':'light'} accordion-collapse collapse`} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>

  {/* <button className='btn btn-primary my-2' onClick={handledarkmode}>{btntext}</button> */}
</div>
  
  
  
  </>
  )
}
