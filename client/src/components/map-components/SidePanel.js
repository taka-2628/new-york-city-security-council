import { useState } from "react";

import CommentSection from "./CommentSection";

function SidePanel({ isSidePanelOpen, cameraSelected, toggleSidebar, cameras, setCameras}) {
  
  const date = cameraSelected ? new Date(cameraSelected.created_at) : null // formated_Date - SDK returned date
  const formatedDate = cameraSelected ? (`${date.getFullYear()}-${date.getMonth() +1 }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`) : null;

  return(
    <>
      <div className={`side-panel ${isSidePanelOpen && cameraSelected ? 'active' : ''}`}>
        <div className='side-panel-wrapper'>
          {
            cameraSelected
            ? <div id="camera-info-cont">
                <div id="image-wrapper">
                  <img src={cameraSelected.image_url}></img>
                </div>
                <div id="text-wrapper">
                  <h4>Camera Info</h4>
                  <div className="cam-info-text-group">
                    <><span>Uploaded by {cameraSelected.user.username}</span><br/></>
                    <><span>{formatedDate}</span><br/></>
                  </div>
                  <hr/>
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
          <div id="hr-wrapper"><hr/></div>
          {cameraSelected ? <CommentSection comments={cameraSelected.comments} cameraSelected={cameraSelected} cameras={cameras} setCameras={setCameras}/> : null}
        </div>
      </div>
      <div className={`side-panel-overlay ${isSidePanelOpen == true ? 'active' : ''}`} onClick={toggleSidebar}></div>
    </>
  )
}

export default SidePanel;