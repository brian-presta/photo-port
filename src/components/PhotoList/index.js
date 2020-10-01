import React from 'react'
import photos from '../../utils/photos'
import Modal from '../Modal'

function PhotoList({category}) {
  const [currentPhoto, setCurrentPhoto] = React.useState()
    function fireModal(data) {
      setCurrentPhoto(data)
    }
    return (
        <div>
          {currentPhoto && <Modal currentPhoto={currentPhoto} setCurrentPhoto={setCurrentPhoto}/>}
        <div className="flex-row">
          {photos[category].map((image, i) => (
            <img
              src={require(`../../assets/small/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              key={image.name}
              onClick={() => fireModal({...image,category,index:i})}
            />
          ))}
        </div>
      </div>
    )
}

export default PhotoList;