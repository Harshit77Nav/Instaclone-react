import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

import './App.css';

function Form() {
  const history = useNavigate()

const [image,setImage] = useState('')
const [inputs,setInputs] = useState({
    author: '',
    location: "",
    description: "",
    image: ""
})
function handle(e) {
    const newData = {...inputs}
    newData[e.target.id] = e.target.value
    setInputs(newData)
}

const uploadImage = async (event) =>{
    const files = event.target.files
    const data = new FormData()
    data.append('file',files[0])
    data.append('upload_preset','instapost')

    const res = await fetch('https://api.cloudinary.com/v1_1/dnjym17lt/image/upload',{
        method:'POST',
        body:data
    })
    const file = await res.json()
    setImage(file.secure_url)
}

const imageUpload = (e) => {
    e.preventDefault();
    setInputs({...inputs, image:image})
}

const post = async (e) => {
    e.preventDefault()
    if(inputs.image) {
      if(inputs.author && inputs.location && inputs.description) {
        const { author, location, description, image} = inputs;
        await fetch("https://instaclone-node.onrender.com/blog", {
          method:'POST',
          headers:{"Content-Type": "application/json" },
          body: JSON.stringify({
            author,
            location,
            description,
            image
          })
        })
        history('/post')
      } else {
        alert("Please fill all the data")
      }
    } else {
      alert("Please upload image")
    }
}

  return (
    <div>
        <div className='box'>
      <form method="POST" className={'form'}>

        <input type={'file'} id={'file'} onChange={uploadImage} required />

        <label htmlFor="file"><button onClick={imageUpload} >upload</button></label><br/>

        <input onChange={(e)=>handle(e)} id='author' value={inputs.author} type={'text'} placeholder={'Author'} required />

        <input type={'text'} placeholder={'Location'} onChange={(e)=>handle(e)} id='location' value={inputs.location} required /><br/>

        <input type={'text'} placeholder={'Description'} onChange={(e)=>handle(e)} id='description' value={inputs.description} className='description' required   /><br/>

        <button className="btn" onClick={post}>Post</button>

      </form>
      </div>
    </div>
  );
}

export default Form;
