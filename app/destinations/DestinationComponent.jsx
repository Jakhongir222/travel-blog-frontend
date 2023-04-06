"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/destination.css"
import axios from 'axios'


function DestinationComponent() {

  const images = {'Uzbekistan': 'https://images.unsplash.com/photo-1591139308596-9b663fa6d0a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8SXJhbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Sweden': 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8U3dlZGVufGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'Japan': 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8SmFwYW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'France': 'https://images.unsplash.com/photo-1505205296326-2178af1b47bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fEZyYW5jZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Thailand' : 'https://images.unsplash.com/photo-1534008897995-27a23e859048?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8VGhhaWxhbmQnfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    'Greece': 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyZWVjZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Maldives': 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8TWFsZGl2ZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'India': 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SW5kaWF8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'USA': 'https://images.unsplash.com/photo-1550850839-8dc894ed385a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fFVTQXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Iceland': 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8SWNlbGFuZHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'United Arab Emirates': 'https://images.unsplash.com/photo-1495885531856-008baf2cbaac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fFVuaXRlZCUyMGFyYWIlMjBlbWlyYXRlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60',
    'Turkey': 'https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8VHVya2V5fGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
  };


  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [destinationToEdit, setDestinationToEdit] = useState(null);
  const baseURL = 'https://travelblog-backend-production.up.railway.app/articles';

  useEffect(() => {
    setLoading(true);
    axios.get(baseURL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`${baseURL}/${id}`)
      .then(() => {
        setData((prevState) => prevState.filter(item => item.articleId !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleUpdate = (id, updatedTitle, updatedText) => {
    axios.put(`${baseURL}/${id}`, {
      articleTitle: updatedTitle,
      articleText: updatedText
    })
      .then(() => {
        setData((prevState) => {
          return prevState.map(item => {
            if (item.articleId === id) {
              return {
                ...item,
                articleTitle: updatedTitle,
                articleText: updatedText
              };
            }
            return item;
          });
        });
        setEditMode(false);
        setDestinationToEdit(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    setEditMode(true);
    const destination = data.find(item => item.articleId === id);
    setDestinationToEdit(destination);
  };

  if (isLoading) return <p>Loading...</p>;
  if (!data.length) return <p>No data to show</p>;

  return (
    <div className='articles'>
      {data.map((item) => (
        <div className='article-cart' key={item.articleId}>
          <img className='article-image' src={images[item.articleTitle]} alt={item.articleTitle} width='368' height='250' />
          {editMode && destinationToEdit && destinationToEdit.articleId === item.articleId ? (
            <div className='article-edit'>
              <input type='text' defaultValue={destinationToEdit.articleTitle} onChange={(e) => setDestinationToEdit({ ...destinationToEdit, articleTitle: e.target.value })} />
              <textarea defaultValue={destinationToEdit.articleText} onChange={(e) => setDestinationToEdit({ ...destinationToEdit, articleText: e.target.value })} />
              <button className='save-button' onClick={() => handleUpdate(destinationToEdit.articleId, destinationToEdit.articleTitle, destinationToEdit.articleText)}>Save</button>
              <button className='cancel-button' onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          ) : (
            <>
              <p className='article-title'>{item.articleTitle}</p>
              <p className='article-text'>{item.articleText}</p>
              <div className="button-container">
                <button className='edit-button' onClick={() => handleEdit(item)}>Edit</button>
                <button className='delete-button' onClick={() => handleDelete(item.articleId)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
  
}

export default DestinationComponent;
