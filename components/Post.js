import React from 'react';

const getTagColor = (tag) => {
    const tagColors = {
        html: 'green',
        css: 'pink',
        js: 'yellow',
        php: 'blue',
    };
    return tagColors[tag] || 'gray';
};

const Post = ({ title, image, content, tags, published }) => {
    if (!published) return null;

    const defaultImage = 'https://via.placeholder.com/600x400';

    return (
        <div className="card">
            <div className="card-content">
                <h2 className="post-title">{title}</h2>
                <img src={image || defaultImage} alt={title} style={{ width: '100%', height: 'auto' }} />
                <p className="lorem-text">{content}</p>
                <div className="button-container">
                    <button className="read-more-btn">Leggi di più</button>
                </div>
                <div className="tags">
                    {tags.map(tag => (
                        <span key={tag} style={{ color: getTagColor(tag), marginRight: '8px' }}>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Post;

