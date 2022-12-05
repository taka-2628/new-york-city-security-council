import { useState, useContext } from "react";

import { UserContext } from '../../context/user';

import Comment from "./Comment";

function CommentSection( { comments, cameraSelected, cameras, setCameras } ){
  const { user } = useContext(UserContext);

  /* DELETE COMMENT */
  function onDeleteComment(id){
    const updatedComments = comments.filter(comment => comment.id !== id);
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
 
  /* UPDATE COMMENT */
  function onEditComment(updatedComment){
    const updatedComments = comments.map(comment => {
      if(comment.id === updatedComment.id){
        comment.body = updatedComment.body
        return comment
      } else {
        return comment
      }
    });
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

  const commentlist = comments.map((comment) => {
    return (
      <Comment 
      key={comment.id}
      comment={comment}
      user={user}
      onDeleteComment={onDeleteComment}
      onEditComment={onEditComment}
    />
    )
  })

  return (
    <div id="comment-section">
      <div id="comment-list" >
        <ul>
          {commentlist}
        </ul>
      </div>
    </div>
  )
}

export default CommentSection;