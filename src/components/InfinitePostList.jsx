import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import Post from './Post';

const InfinitePostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.items);
  const status = useSelector(state => state.posts.status);
  const page = useSelector(state => state.posts.page);

  const loadMorePosts = useCallback(() => {
    if (status === 'succeeded') {
      dispatch(fetchPosts(page));
    }
  }, [status, dispatch, page]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts(1));
    }
  }, [status, dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePosts]);

  if (status === 'loading' && posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
      {status === 'loading' && <div>Loading more...</div>}
    </div>
  );
};

export default InfinitePostList;