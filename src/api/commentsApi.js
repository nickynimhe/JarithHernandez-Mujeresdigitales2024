const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchComments(postId) {
  const response = await fetch(`${API_URL}/${postId}/comments`);
  const data = await response.json();
  return data;
}

export async function addComment(postId, comment) {
  const response = await fetch(`${API_URL}/${postId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(comment),
  });
  const data = await response.json();
  return data;
}