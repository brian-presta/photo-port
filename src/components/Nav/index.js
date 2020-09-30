import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../..//utils/helpers'
function Nav(props) {
  const { categories, setCurrentCategory, currentCategory, currentNav, setNav} = props
  function changeTitle() {
    if (currentNav.gallery) {
      document.title = capitalizeFirstLetter(currentCategory.name)
    }
    else {
      if(currentNav.about) {document.title = 'about'}
      if(currentNav.contact) {document.title = 'contact'}

    }
  }
  useEffect(changeTitle, [currentNav,currentCategory])
  function navClicked(name) {
    setNav({[name]:true})
  }
  function categoryClicked(category) {
    setCurrentCategory(category)
    setNav({gallery:true})
  }
  console.log(currentNav)
  return (
            <header>
              <h2>
                <a href="/">
                  <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
              </h2>
              <nav>
                <ul className="flex-row">
                  <li className={`mx-2 ${currentNav.about && 'navActive'}`}>
                    <span onClick={()=>navClicked('about')}>About Me</span>
                  </li>
                  <li className={`mx-2 ${currentNav.contact && 'navActive'}`}>
                    <span onClick={() => navClicked('contact')}>Contact</span>
                  </li>
                  {categories.map( category => (
                      <li className={`mx-1 ${currentCategory.name === category.name && currentNav.gallery && 'navActive'}`}>
                          <span onClick={() => categoryClicked(category)}>
                              {category.name}
                          </span>
                      </li>
                  ))}
                </ul>
              </nav>
            </header>
  )
}

export default Nav