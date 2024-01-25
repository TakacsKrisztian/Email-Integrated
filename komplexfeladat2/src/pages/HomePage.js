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
    fetch("https://localhost:7051/api/Post", {
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
    <div className="p-4 m-auto text-center content bg-ivory">
        {isFetchPending ? (<div className="spinner-border"></div>) : (
        <div>
                {posts.map((posts) => (
                    <NavLink key={`/Posts/${posts.id}`} to={`/Posts/${posts.id}`}>
                      <div key = {posts.id} className="card col-sm-3 d-inline-block ms-4" style={{borderRadius: '20px', backgroundColor: '#0A2234', color: 'white'}}>
                        <div className="card-body">
                          <h2 style={{ textAlign: 'center', fontWeight: 'bold'}}>{posts.title}</h2>
                          <p style={{ textAlign: 'center', fontSize: '20px'}}>{posts.category}</p>
                            <img src={posts.image} alt={posts.image} style={{maxWidth: '100%', maxHeight: '50%', objectFit: 'cover', alignSelf: 'center', borderRadius: '10px' }}/>
                          <p style={{ textAlign: 'center', fontSize:'25px' }} className='postcontent mt-3'>{posts.content}</p>
                          <p style={{ textAlign: 'center', fontSize:'18px'}}>Photo by: {posts.author}</p>
                        </div>
                      </div>
                    </NavLink>
                ))}
        </div>
        )}
    </div>
  );
};

export default HomePage;