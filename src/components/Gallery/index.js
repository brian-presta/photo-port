import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from '../../assets/small/commercial/0.jpg'
function Gallery(props) {
    const currrentCategory = {
        name: "commercial",
        description: "Photos of grocery stores, food trucks, and other commercial projects",
    }
    console.log(currrentCategory.photoPath)
    return (
    <section>
        <h1>{capitalizeFirstLetter(currrentCategory.name)}</h1>
        <p>{currrentCategory.description}</p>
        <div className="flex-row">
            <img src={photo} alt='Commercial Example' className="img-thumbnail mx-1"></img>
        </div>
    </section>
    );
}
export default Gallery;