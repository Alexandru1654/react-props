import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import './App.css';

const posts = [
    {
        id: 1,
        title: "Titolo del Post",
        image: '',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html", "css"],
        published: true,
    },
    {
        id: 2,
        title: "Titolo del Post",
        image: '',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "css"],
        published: true,
    },
    {
        id: 3,
        title: "Titolo del Post",
        image: '',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["js", "php"],
        published: true,
    },
    {
        id: 4,
        title: "Titolo del Post",
        image: '',
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
        tags: ["html"],
        published: false,
    },
];

const App = () => {
    const publishedPosts = posts.filter(post => post.published);

    return (
        <div>
            <Header />
            <main>
                {publishedPosts.map(post => (
                    <Post key={post.id} {...post} />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default App;
