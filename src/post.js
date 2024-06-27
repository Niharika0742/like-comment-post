import React, { useState } from 'react';

function Post({ src, likes, comments, setImagePosting, imagePosting, postId }) {
  const [newComment, setNewComment] = useState("");
  const [like, setLike] = useState(false);

  const handleLike = () => {
    if (!imagePosting) {
      console.error("imagePosting is undefined");
      return;
    }
    
    const updatedPosts = imagePosting.map(post => {
        console.log(post.id)
        console.log(post)
      if (post.id === postId) {
        console.log(like);
        return { ...post, likes: like ? post.likes - 1 : post.likes + 1 };
      }
      return post;
    });
    setLike(!like);
    setImagePosting(updatedPosts);
  };

  const handleComment = () => {
    if (!imagePosting) {
      console.error("imagePosting is undefined");
      return;
    }
    if (newComment.trim() !== "") {
      const updatedPosts = imagePosting.map(post => {
        if (post.id === postId) {
          return { ...post, comments: [...post.comments, newComment] };
        }
        return post;
      });
      setImagePosting(updatedPosts);
      setNewComment("");
    }
  };

  return (
    <div style={{width: 300, margin: 30, padding: 20, borderRadius: 10,  border: "2px solid black"}}>
      <img src={src} style={{ height: 200, width: 300,marginBottom:5 }} alt="Post" />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={handleLike} style={{ background: "none", border: "none", padding: 5, cursor: "pointer" }}>
          {like ? (
            <img src="https://clipground.com/images/instagram-like-png-5.png" style={{ height: 20, width: 20}} alt="Liked" />
          ) : (
            <img src="https://vectorified.com/images/like-icon-png-17.png" style={{ height: 20, width: 20}} alt="Like" />
          )}
        </button>
        <span style={{ marginLeft: 10 }} > Likes: {likes} </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          style={{ background: "none", border: "none", padding:5 , cursor: "pointer", flexGrow: 1 }}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleComment} style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}>
            <img src="http://www.pngall.com/wp-content/uploads/8/Comment-PNG.png" style={{ height: 40, width: 40 }} />
        </button>
      </div>
      <div style={{ maxHeight: 50, overflowY: "auto", background: "white", color: "black", padding: 10, borderRadius: 5, marginTop: 10, border: "2px solid beige" }}>
        {comments.map((comment, index) => (
          <p key={index} style={{ margin: "5px 0" }}>Niha:{comment}</p>
        ))}
      </div>
    </div>
  );
}

Post.defaultProps = {
  imagePosting: [],
  setImagePosting: () => {},
  comments: []
};

export default Post;
