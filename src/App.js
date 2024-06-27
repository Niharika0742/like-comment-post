import React,{useState} from "react";
import MovableImage from "./movingImage";
import Post from "./post";
function App() {
  const [imagePosting,setImagePosting] =useState([
    {id:1, src: "http://thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg", likes: 0, comments: [] },
   { id:2, src: "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg", likes: 0, comments: [] },
    {id:3, src: "https://cdn.pixabay.com/photo/2017/07/13/19/51/sunset-2501727_960_720.png", likes: 0, comments: [] },
    {id:4, src: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg", likes: 0, comments: [] },
    {id:5, src: "https://wallpapertag.com/wallpaper/full/d/3/c/968676-hi-res-background-images-2651x1813-retina.jpg", likes: 0, comments: [] },
    {id:6, src: "https://jooinn.com/images/beauty-of-nature-24.jpg", likes: 0, comments: [] }
  ]);
  return (
   
    <div style={{ display: 'flex',flexWrap: 'wrap', alignItems: 'center' }}>
      {imagePosting.map((post)=>(
          <Post 
          key={post.id}
          src={post.src}
          likes={post.likes}
          comments={post.comments}
          setImagePosting={setImagePosting}
          imagePosting={imagePosting}
          postId={post.id}
          />
      ))}
    </div>
   
  );
}

export default App;
