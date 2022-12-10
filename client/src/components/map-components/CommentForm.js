import { useState } from "react";

function CommentForm( { cameraSelected, user, comments, cameras, setCameras }){
  const [ commentBody, setCommentBody ] = useState("");
  
  /* POST NEW COMMENT */
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        camera_id: cameraSelected.id,
        body: commentBody,
      }),
    })
    .then((r) => r.json())
    .then((comment) => {
      onAddNewComment(comment);
      setCommentBody("");
    });
    function onAddNewComment(comment){
      const newComment = {...comment, user: user};
      const updatedComments = ([...comments, newComment]);
      const updatedCameras = cameras.map((camera) => {
        if(camera.id === cameraSelected.id){
          camera.comments = updatedComments
          return camera
        } else {
          return camera
        }
      });
      setCameras(updatedCameras);
    }
  }

  return (
    <form id="comment-form" onSubmit={handleSubmit}>
      <textarea 
        type="text"
        name="body"
        autoComplete="off"
        placeholder="Write your comment.."
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        required
      >
      </textarea>
      <input type="submit"></input>
    </form>
  )
}

export default CommentForm;