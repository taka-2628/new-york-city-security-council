import '../../stylesheets/ProgressBtn.css';

function ProgressBtn( { onStepChange } ){
  const active = true;
  
  return (
    <div className="progress-btn-cont">
      <div className="progress-btn-wrapper">
        <span 
          className={ ( active) ? "active-submit" : "" }
          onClick={() => onStepChange()}
        >
          &#x203A;
        </span>
      </div>
    </div>
  )
}

export default ProgressBtn;