import { useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from '../../context/user';

import Comment from "./Comment";
import CommentForm from "./CommentForm";

function CommentSection( { comments, cameraSelected, cameras, setCameras } ){
  const { user } = useContext(UserContext);

  /* SCROLLABLE COMMENT LIST - scrolling always starts from bottom */
  const scrollable = useRef(null);
  useEffect(() => {
    const scrollableUl = scrollable.current;
    scrollableUl.scrollTop = scrollableUl.scrollHeight;
  }, []);

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

  /* */

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
        <ul ref={scrollable}>
          {commentlist}
        </ul>
      </div>
      { 
        user 
        ? <CommentForm cameraSelected={cameraSelected} user={user} comments={comments} cameras={cameras} setCameras={setCameras}/> 
        : <div id="signin-redirect">
            <p>Please login before comment:</p>
            <Link to="/signin">Log in / Signup</Link>
          </div>
      }
    </div>
  )
}

export default CommentSection;