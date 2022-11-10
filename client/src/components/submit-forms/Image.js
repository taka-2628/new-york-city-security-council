import { useState } from "react";

import ProgressBtn from "../buttons/ProgressBtn";

function Image( { handleChange, onStepChange } ){
  const [ fileName, setFileName ] = useState('');
  const [ imageURL, setImageURL ] = useState('');

  function handleUploadingImage(e){

    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);

    const formdata = new FormData();
    formdata.append("image", e.target.files[0]);

    fetch("https://api.imgur.com/3/image/", {
      method: "post",
      headers: {
        Authorization: "Client-ID 0b6ac8866679a6e"
      },
      body: formdata
    }).then(data => data.json())
    .then(data => {
        console.log(data);
        setImageURL(data.data.link);
        handleChange("image_url", data.data.link);
    })
  }

  return (
    <div id="upload-form-cont" className="four-ten">
      <div className='upload-form-wrapper'>
        <div className="title-hr-div">
          <div className="three-parts">
            <div className="title-wrapper">
              <h4>Upload Image</h4>
            </div>
            <hr className="selected-hr"/>
          </div>
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <hr/>
          </div>
        </div>
        <div className="form-wrapper">
          <div id="image-uploader-cont">
            <div>
              <input 
                type="file" 
                id="file"
                onChange={(e) => handleUploadingImage(e)}
                hidden
              />
              <label htmlFor="file"><button>UPLOAD</button></label>
              { fileName ? <p id="file-name">{fileName}</p> : null }
              { imageURL ? <div id="image-preview-cont"><img id="image-preview" src={imageURL} /></div> : null }
            </div>
          </div>
        </div>
      </div>
      <ProgressBtn onStepChange={onStepChange}/>
    </div>
  )
}

export default Image;