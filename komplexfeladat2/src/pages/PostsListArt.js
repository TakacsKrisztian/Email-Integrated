import {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import "../css/App.css";
import "../css/index.css";
import "../css/global.css";
import "../css/HomePage.css";


export function HomePage()
{
  const [posts, setPosts] = useState([]);
  const [isFetchPending, setFetchPending] = useState(false);

  useEffect(() => {
    setFetchPending(true);
    fetch("https://localhost:7051/api/Post/category?category=Art", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*'
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
      {isFetchPending ? (<div className='spinner-border'></div>) : (
      <div className='d-flex flex-wrap'>
        {posts.map((posts) => (
          <div className='postcard card m-3 text-center p-2'>
            <NavLink key={`/Posts/${posts.id}`} to={`/Posts/${posts.id}`}>
            
            <p className='posttext postauthor mt-3 '>{posts.author}</p>
            <p className='posttext postcategory'>{posts.category}</p>
            <img className="img-fluid img-responsive card-image" 
            src={posts.image}
            />
            <p className='posttext posttitle'>{posts.title}</p>
            <p className='posttext postcontent'>{posts.content}</p>
            <p className='posttext postupload'>Feltöltés dátuma: <br></br>{posts.createdTime}</p>
            </NavLink>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default HomePage;