import React, { useState } from 'react'
import "../../styles/NewDestination.css"

export const NewDestination = () => {

    const [article, setArticle] = useState({ articleTitle: '', articleText: '' });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://travelblog-backend-production.up.railway.app/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(article)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add article');
            }
            setArticle({ articleTitle: '', articleText: '' });
        })
        .catch(error => {
            console.error(error);
            alert('Failed to add article, please try again.');
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setArticle((prevArticle) => ({ ...prevArticle, [name]: value }));
    };

    

    return (
        <form onSubmit={handleSubmit} className="new-destination-form">
          <h2 className="form-heading">New Destination</h2>
          <label htmlFor="articleTitle" className="form-label">
            Title:
          </label>
          <input
            type="text"
            id="articleTitle"
            name="articleTitle"
            value={article.articleTitle}
            onChange={handleChange}
            className="form-input"
          />
          <br />
          <label htmlFor="articleText" className="form-label">
            Text:
          </label>
          <input 
            type="text"
            id="articleText"
            name="articleText"
            value={article.articleText}
            onChange={handleChange}
            className="text-input"
          />
          <br />
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      );
}
