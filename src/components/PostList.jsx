import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadPosts } from '../redux/postsSlice'
import Post from './Post'

const PostList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.items)
  const status = useSelector(state => state.posts.status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(loadPosts())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList