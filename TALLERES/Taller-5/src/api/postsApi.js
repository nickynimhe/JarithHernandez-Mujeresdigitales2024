const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function toggleLike(postId) {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ liked: true }),
    });
    
    if (response.ok) {
      console.log(`Toggled like for post with ID: ${postId}`);
    } else {
      console.error(`Error toggling like for post with ID: ${postId}`);
    }
  } catch (error) {
    console.error(`Error toggling like for post with ID: ${postId}: ${error.message}`);
  }
}

export async function toggleShare(postId) {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ shared: true }),
    });
    
    if (response.ok) {
      console.log(`Toggled share for post with ID: ${postId}`);
    } else {
      console.error(`Error toggling share for post with ID: ${postId}`);
    }
  } catch (error) {
    console.error(`Error toggling share for post with ID: ${postId}: ${error.message}`);
  }
}