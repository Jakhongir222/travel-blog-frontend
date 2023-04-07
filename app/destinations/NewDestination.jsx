import React, { useState } from 'react'

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
        <form onSubmit={handleSubmit}>
            <label htmlFor='articleTitle'>Title:</label>
            <input
                type='text'
                id='articleTitle'
                name='articleTitle'
                value={article.articleTitle}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor='articleText'>Text:</label>
            <input
                type='text'
                id='articleText'
                name='articleText'
                value={article.articleText}
                onChange={handleChange}
            />
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
}
