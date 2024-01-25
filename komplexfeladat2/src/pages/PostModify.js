import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function PostModify() {
  const [postData, setPostData] = useState({
    Id: '',
    Title: '',
    Author: '',
    Category: '',
    Content: '',
    Image: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      setPostData({ ...postData, Category: selectedCategory });

      const response = await fetch(`https://localhost:7051/api/Post/${postData.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Post successfully updated!');
        navigate('/');
      } else {
        console.error('Error updating post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e, fieldName) => {
    setPostData({ ...postData, [fieldName]: e.target.value });
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };


  return (
    <form onSubmit={handleFormSubmit} className='p-5 text-center'>
        <h1>Modify post</h1>
      <div className='row'>
        <div className='col'>
        </div>
      <div className='form-group row col-6 text-center'>
      <input
          type="text"
          className="form-control mt-2"
          placeholder={postData.Author || "Author"}
          value={postData.Author}
          onChange={(e) => handleChange(e, 'Author')}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder={postData.Title || "Title"}
          value={postData.Title}
          onChange={(e) => handleChange(e, 'Title')}
        />
        <textarea
          className="form-control mt-2"
          placeholder={postData.Content || "Content Placeholder"}
          value={postData.Content}
          onChange={(e) => handleChange(e, 'Content')}
          rows={8}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder={postData.Image || "ImageURL"}
          value={postData.Image}
          onChange={(e) => handleChange(e, 'Image')}
        />
        
          
            <button className="btn btn-outline-light dropdown-toggle d-inline mb-2 mt-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">{selectedCategory || 'Category'}</button>
            <div>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Sport')}>Sport</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Animal')}>Animal</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Nature')}>Nature</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Portrait')}>Portrait</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('B@W')}>B@W</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Art')}>Art</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Travel')}>Travel</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Macro')}>Macro</a></li>
              <li><a className="dropdown-item" href="#" onClick={() => handleCategorySelect('Food')}>Food</a></li>
            </ul>
          </div>
        <button type="submit" className="btn btn-outline-primary d-inline mb-2"><i class="bi bi-check2"></i> Post</button>
        <button className="btn btn-outline-secondary d-inline mb-2" onClick={() => navigate('/')}><i class="bi bi-arrow-left"></i> Back</button>
      </div>
      <div className='col'>
      </div>
      </div>
    </form>
  );
};

export default PostModify;

