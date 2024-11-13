import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import './App.css';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Post />
            </main>
            <Footer />
        </div>
    );
};

export default App;
