import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../redux/postsSlice';
import { validatePost } from '../utils/validationUtils';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    const validationErrors = validatePost(post);
    
    if (Object.keys(validationErrors).length === 0) {
      dispatch(addNewPost(post));
      setTitle('');
      setBody('');
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <span className="error">{errors.title}</span>}
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        {errors.body && <span className="error">{errors.body}</span>}
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPostForm;