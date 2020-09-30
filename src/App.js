import React, { useState } from 'react';
import './App.css';
import About from './components/About'
import Nav from './components/Nav';
import Gallery from './components/Gallery'
import ContactForm from './components/Contact'
import categories from './utils/categories'
function App() {
  const [currentCategory,setCurrentCategory] = useState(categories[0])
  const [currentNav, setNav] = useState({about:true});

  return (
    <div>
      <Nav categories={categories} setCurrentCategory={setCurrentCategory} currentCategory={currentCategory}
      currentNav={currentNav} setNav={setNav} />
      <main>
      {currentNav.contact && <ContactForm/>}
      {currentNav.gallery &&  <Gallery currentCategory={currentCategory} />}
      {currentNav.about && <About/>}
      </main>
    </div>
  );
}

export default App;
