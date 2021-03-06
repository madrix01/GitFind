import React, { useState } from "react";

function CreateRepo(props) {
  const [repo, setRepo] = useState({
    title: "",
    language: ""
  });
  function handleChange(event) {
    const { title, value } = event.target;

    setRepo(prevNote=> {
      return {
        ...prevNote,
        [title]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input value={note.title} name="title" placeholder="Title" />
        <textarea
          onChange={handleChange}
          value={note.content}
          name="content"
        //  placeholder="Take a note..."
          rows="3"
        />
       </form>
    </div>
  );
}

export default CreateRepo;
