import './App.css';
import React, {useState, useEffect} from 'react';


const Posts = () => {


//Komponentin tilan määritys

const [posts, setPosts] = useState([])


useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json()) //muutetaan json data javascriptiksi
  .then(oliot => setPosts(oliot))
},[]
)

  return (
    <>
        <h3>posts from typicode</h3>

        {
          posts && posts.map(p => 

            <div className='posts' key={p.id}>
            <h1>{p.title}</h1>
            <p>{p.body}</p>
          
            </div>
          )
        }

    </>
  );
}

export default Posts;
