import ProgressBtn from "../buttons/ProgressBtn";

function Other( { onwerCheckedState, handleOnChangeOwner, formData, handleChange, onStepChange } ){

  return (
    <div id="upload-form-cont" className="four-ten">
      <div className='upload-form-wrapper'>
        <div className="title-hr-div">
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <hr/>
          </div>
          <div className="three-parts">
            <div className="title-wrapper">
              <h4>Additional Information</h4>
            </div>
            <hr className="selected-hr"/>
          </div>
        </div>
        <div className="form-wrapper">
          <div className="type-addinfo-cont">
            <p>Who owns this camera?</p>
            <div className="selection-btn-cont">
              <span className="selection-btn-wrapper">
                <button className={onwerCheckedState[0] ? "selected-type-btn" : null} onClick={() => handleOnChangeOwner(0)}>NYPD</button>
              </span>
              <span className="selection-btn-wrapper">
                <button className={onwerCheckedState[1] ? "selected-type-btn" : null} onClick={() => handleOnChangeOwner(1)}>Private Owner</button>
              </span>
              <span className="selection-btn-wrapper">
                <button className={onwerCheckedState[2] ? "selected-type-btn" : null} onClick={() => handleOnChangeOwner(2)}>Other</button>
              </span>
            </div>
            <div className="add-info-wrapper">
              <label>Include additional information that may help others find it.</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <ProgressBtn onStepChange={onStepChange}/>
    </div>
  )
}

export default Other;