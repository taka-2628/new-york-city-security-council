function Submit( { handleSubmit, errors } ){

  return (
    <div id="upload-form-cont" className="four-ten">

      <div className='upload-form-wrapper'>
        <div className="title-hr-div">
          <div className="submit">
            <div className="title-wrapper">
              <h4>Submit</h4>
            </div>
            <hr className="selected-hr"/>
          </div>
        </div>

        <div className="form-wrapper">
          <div className="button-center-cont">
            <button className="center-btn" onClick={handleSubmit}>SUBMIT</button>
            <div className="error-div">
              <div className="error-p-wrapper">
                {
                  errors 
                  ? errors.map((err) => (<p key={err} className="error-p">{err}</p>))
                  : null 
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Submit;