import { useState } from "react";

function SidePanel({ isSidePanelOpen, cameraSelected, toggleSidebar}) {

  return(
    <>
    <div className={`side-panel ${isSidePanelOpen && cameraSelected ? 'active' : ''}`}>
      {
        cameraSelected
        ? <div id="camera-info-cont">
            <div id="image-wrapper">
              <img src={cameraSelected.image_url}></img>
            </div>
            <div id="text-wrapper">
              <h4>Camera Info</h4>
              <><span>Uploaded by {cameraSelected.user.username}</span><br/></>
              <div className="cam-info-text-group">
                { cameraSelected.latitude && cameraSelected.longitude ? <><span>Lat: {cameraSelected.latitude}, Long: {cameraSelected.longitude}</span><br/></> : null}
                { cameraSelected.address ? <><span>Address: {cameraSelected.address}</span><br/></> : null }
                { cameraSelected.intersection ? <><span>Intersection: {cameraSelected.intersection}</span><br/></> : null }
                { cameraSelected.zipcode ? <><span>Zipcode: {cameraSelected.zipcode}</span><br/></> : null }
                { cameraSelected.neighborhood.neighborhood ? <><span>Neighborhood: {cameraSelected.neighborhood.neighborhood}</span><br/></> : null }
                { cameraSelected.neighborhood.borough ? <><span>Borough: {cameraSelected.neighborhood.borough}</span><br/></> : null }
              </div>
              <hr/>
              <div className="cam-info-text-group">
                <span>Type: {cameraSelected.camera_type}</span><br/>
                <span>Owner: {cameraSelected.owner}</span><br/>
              </div>
              <hr/>
              <div className="cam-info-text-group">
                <span>Description: </span>
                <p>{cameraSelected.description}</p>
              </div>
            </div>
          </div>
        : null
      }
      <hr/>
    </div>
    <div className={`side-panel-overlay ${isSidePanelOpen == true ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  )
}

export default SidePanel;