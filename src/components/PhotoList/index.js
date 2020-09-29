import React from 'react'
import photos from '../../utils/photos'

function PhotoList({category}) {
    
    return (
        <div>
        <div className="flex-row">
          {photos[category].map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
            />
          ))}
        </div>
      </div>
    )
}

export default PhotoList;