import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Gallery from './components/Gallery'
import ContactForm from './components/Contact'
import categories from './utils/categories'
function App() {
  const [currentCategory,setCurrentCategory] = useState(categories[0])
  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}></Nav>
      <main>
      <ContactForm></ContactForm>
      <Gallery currentCategory={currentCategory}></Gallery>
      <About></About>
      </main>
    </div>
  );
}

export default App;
