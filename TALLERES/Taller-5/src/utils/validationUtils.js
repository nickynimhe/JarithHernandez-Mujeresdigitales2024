export const validatePost = (post) => {
    const errors = {};
  
    if (!post.title) {
      errors.title = "Title is required";
    } else if (post.title.length < 5) {
      errors.title = "Title must be at least 5 characters long";
    }
  
    if (!post.body) {
      errors.body = "Body is required";
    } else if (post.body.length < 10) {
      errors.body = "Body must be at least 10 characters long";
    }
  
    return errors;
  };
  
  export const isPostValid = (post) => {
    const errors = validatePost(post);
    return Object.keys(errors).length === 0;
  };