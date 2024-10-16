// Comment.jsx
import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.profilePicture} alt={comment.username} className="comment-profile-picture" />
      <strong>{comment.username}</strong>: {comment.body}
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired, // Agregar la foto de perfil como prop
  }).isRequired,
};

export default Comment;
