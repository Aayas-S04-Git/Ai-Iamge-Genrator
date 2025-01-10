import React, { useRef, useState } from 'react'
import './ImageGenrator.css'
import default_image from '../Assets/default_image.svg'

const ImageGenrator = () => {

  const[image_url,setImage_url] = useState("/");
  let inputRef=useRef(null);

  const imageGenrator =async()=>{
    if(inputRef.current.value===""){
      return 0;

    }
    const response=await fetch(
      // open api image   link
      "https://api.openai.com/v1/images/generations",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          Authorization: "Bearer ${token}  https://backend.buildpicoapps.com/aero/run/image-generation-api?pk=v1-Z0FBQUFBQm5kOU1hVjdHYndBZXFNaFFOSFFaSHVONDdRZTZXU2UyWE1DVWVsX2RhSVRXM21sS1B5djJmVEF3cFgtS2dMSmV6WVBnbGpma2VWcDJydGZPYS1qdVpoZEJZUHc9PQ==" ? "Generating..." : "Typing...",
          // "Bearer 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",
        },
        //  Api key
        body:JSON.stringify({
          prompt:`${inputRef.current.value}`,
          n:1,
          size:"512x512",
          
        }),
      }
    );
    let data=await response.json();
    console.log(data);
    // let data_arry=data.data();
    // setImage_url(data_arry[0].url);
  }
  
  return (
  
      <div className="ai-image-generator">
        <div className="header">Ai image <span>Genrator</span></div>
        <div className="img-loading">
          <div className="image"><img src={image_url==="/"?default_image:image_url} alt="" /></div>
        </div>
        <div className="search-box">
          <input type="text" ref={inputRef}className='search-input' placeholder='Describe What You Want To See'/>
          <div className="generate-btn" onClick={()=>{imageGenrator()}}> Generate</div>
        </div>
      </div>
      
    
  )
}

export default ImageGenrator
