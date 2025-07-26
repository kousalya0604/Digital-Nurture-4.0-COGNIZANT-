import './App.css';


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
        setError(''); // clear error if successful
      })
      .catch(error => {
        setError('Error loading posts.');
        setPosts([]); // clear posts if failed
      });
  }, []); // ✅ only run once on mount

  return (
    <div>
      <h1>My Blog App</h1>
      <h2>Blog Posts</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
