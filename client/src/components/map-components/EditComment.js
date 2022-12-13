import React, { useState } from "react";

function EditComment( { comment, handleEdit }){
  const [commentBody, setCommentBody] = useState(comment.body);
  const [errors, setErrors] = useState("");
  
  function handleEditFormSubmit(e, id){
    e.preventDefault();

    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: commentBody
      }),
    })
    .then((r) => {
      if (r.ok) {
        r.json().then(updatedComment => handleEdit(updatedComment));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  
  return (
    <>
      <form className="edit-message" onSubmit={(e) => handleEditFormSubmit(e, comment.id)}>
        <textarea
          type="text"
          name="body"
          autoComplete="off"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
        <input type="submit" value="Save" />
      </form>
      <div className="error-div">
        {
          errors
          ? errors.map((err) => (
            <p key={err} >{err}</p>
          )) 
          : null
        }
      </div>
  </>
  );
}

export default EditComment;