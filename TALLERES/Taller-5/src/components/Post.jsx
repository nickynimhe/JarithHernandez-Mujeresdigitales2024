import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, toggleShare } from '../redux/postsSlice';
import CommentList from './CommentList';
import * as commentsApi from '../api/commentsApi';
import * as postsApi from '../api/postsApi';
import * as usersApi from '../api/usersApi';
import PropTypes from 'prop-types';
import likeIcon from '../assets/icons/like.png';
import heartIcon from '../assets/icons/heart.png';
import shareIcon from '../assets/icons/share.png';
import shareIconLink from '../assets/icons/share-link.png'; 
import commentIcon from '../assets/icons/comment.png';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState('');
  const [showComments, setShowComments] = useState(false);
  const [users, setUsers] = useState([]);
  const [comments, setComments] = useState([]);
  const [postDate, setPostDate] = useState('');
  const [postUser, setPostUser] = useState(null);
  const [isShared, setIsShared] = useState(post.shared); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await usersApi.fetchUsers();
        setUsers(usersData);

        const randomDate = new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28), Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
        setPostDate(randomDate.toLocaleString());

        const randomPostUser = usersData[Math.floor(Math.random() * usersData.length)];
        setPostUser(randomPostUser);

        const postComments = await commentsApi.fetchComments(post.id);
        const commentsWithUsernames = postComments.map(comment => {
          const user = usersData.find(user => user.id === comment.userId);
          return {
            ...comment,
            username: user ? user.name : usersData[Math.floor(Math.random() * usersData.length)].name,
            profilePicture: user
              ? `https://robohash.org/${user.id}`
              : `https://robohash.org/${Math.floor(Math.random() * 1000)}`,
          };
        });

        setComments(commentsWithUsernames);
      } catch (error) {
        console.error('Error al obtener comentarios o usuarios:', error);
      }
    };

    fetchData();
  }, [post.id]);

  const handleLoadComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (newComment.trim() && users.length > 0) {
      const randomUser = users[Math.floor(Math.random() * users.length)];
      const newCommentData = {
        id: Date.now(),
        body: newComment,
        userId: randomUser.id,
        username: randomUser.name,
        profilePicture: `https://robohash.org/${randomUser.id}`,
      };
      await commentsApi.addComment(post.id, newCommentData);
      setComments([...comments, newCommentData]);
      setNewComment('');
    }
  };

  const handleLike = async () => {
    await postsApi.toggleLike(post.id);
    dispatch(toggleLike(post.id));
  };

  const handleShare = async () => {
    await postsApi.toggleShare(post.id);
    dispatch(toggleShare(post.id));
    setIsShared(!isShared);
  };

  return (
    <div className="post">
      <div className="post-header">
        {postUser && (
          <div className="post-user">
            <img
              src={`https://robohash.org/${postUser.id}`}
              alt={postUser.name}
              className="profile-picture"
            />
            <h3>{postUser.name}</h3>
          </div>
        )}
        <div className="post-date">{postDate}</div>
      </div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div className="post-actions">
        <button className={`like-button ${post.liked ? 'liked' : ''}`} onClick={handleLike}>
          <img
            src={post.liked ? heartIcon : likeIcon}
            alt="Like"
            className="like-icon"
            style={{ width: '15px', height: '15px' }}
          />
          {post.liked ? 'Unlike' : 'Like'} ({post.likes})
        </button>

        <button className="share-button" onClick={handleShare}>
          <img 
            src={isShared ? shareIconLink : shareIcon} 
            alt="Share" 
            className="share-icon" 
            style={{ width: '15px', height: '15px' }} 
          />
          {isShared ? 'Unshare' : 'Share'} ({post.shares})
        </button>

        <button className="comment-button" onClick={handleLoadComments}>
          <img src={commentIcon} alt="Comment" className="comment-icon" style={{ width: '15px', height: '15px' }} />
          {showComments ? 'Hide Comments' : 'Show Comments'}
        </button>
      </div>

      {showComments && (
        <div className="comments">
          <CommentList comments={comments} />
          <form onSubmit={handleAddComment}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Add Comment</button>
          </form>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    shared: PropTypes.bool.isRequired,
    shares: PropTypes.number.isRequired,
  }).isRequired,
};

export default Post;
