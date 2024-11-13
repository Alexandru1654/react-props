import React from 'react';

const Post = () => {
    return (
        <div className="card">
            <div className="card-content">
                <h2 className="post-title">Titolo del Post</h2>
                <p className="lorem-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis velit nec augue varius aliquet. Sed euismod purus non dolor varius, a ultricies risus auctor. Quisque sollicitudin ligula et metus gravida, sed fermentum metus cursus.
                </p>
                <div className="button-container">
                    <button className="read-more-btn">Leggi di più</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
