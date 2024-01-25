import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/App.css';
import '../css/index.css';
import '../css/global.css';
import '../css/HomePage.css';

export function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  useEffect(() => {
    setFetchPending(true);
    fetch('https://localhost:7051/api/Post/category?category=Food', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((response) => response.json())
      .then((posts) => setPosts(posts))
      .catch(console.log)
      .finally(() => {
        setFetchPending(false);
      });
  }, []);

  return (
    <div>
      {isFetchPending ? (
        <div className='spinner-border'></div>
      ) : (
        <div className='d-flex flex-wrap'>
          {posts.map((post) => (
            <div className='postcard card m-3 text-center p-2' key={post.id}>
              <NavLink to={`/Posts/${post.id}`}>
                <p className='posttext postauthor mt-3 '>{post.author}</p>
                <p className='posttext postcategory'>{post.category}</p>
                <img
                  className='img-fluid img-responsive card-image'
                  src={post.image}
                  alt={post.title}
                />
                <p className='posttext posttitle'>{post.title}</p>
                <p className='posttext postcontent'>{post.content}</p>
                <p className='posttext postupload'>
                  Feltöltés dátuma: <br />
                  {post.createdTime}
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;