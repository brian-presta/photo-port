import React from "react"

function Modal({ currentPhoto, setCurrentPhoto }) {
    const {name, description, category, index} = currentPhoto
    function closeModal() {
        setCurrentPhoto(null)
    }
    return (
        <div className="modalBackdrop">
            <div className="modalContainer" >
            <h3 className="modalTitle">{name}</h3>
                <img alt={description} src={require(`../../assets/large/${category}/${index}.jpg`)} />
                <p>{description}</p>
                <button type="button" onClick={closeModal}>Close this modal</button>
            </div>
        </div>
    )
}

export default Modal