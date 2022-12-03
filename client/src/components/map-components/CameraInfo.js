function CameraInfo({ camera }) {
  console.log(camera)
  return (
    <div id="camera-info-cont">
      <img src={camera.image_url}></img>
      { camera.latitude && camera.longitude ? <span>Lat: {camera.latitude}, Long: {camera.longitude}</span> : null}

      { camera.address ? <span>Address: {camera.address}</span> : null }
      { camera.intersection ? <span>Intersection: {camera.intersection}</span> : null }
      { camera.zipcode ? <span>Zipcode: {camera.zipcode}</span> : null }

      { camera.neighborhood.neighborhood ? <span>Neighborhood: {camera.neighborhood.neighborhood}</span> : null }
      { camera.neighborhood.borough ? <span>Borough: {camera.neighborhood.borough}</span> : null }

      <span>{camera.camera_type}</span>
      <span>{camera.owner}</span>
      <p>{camera.description}</p>
    </div>
  );
}

export default CameraInfo;