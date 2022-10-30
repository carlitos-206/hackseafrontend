import React from 'react'

const UserSelectionBlock = ({ img, title }) => {
    function selectuser(e) {
        var allUserBlockElement = document.querySelectorAll("UserSelectionBlock")

        console.log(allUserBlockElement);

        var targetElement = e.target.parentElement
        targetElement.style.cssText = "opacity: 1"

        if (e.target.tagName === "IMG") {
            e.target.style.cssText = "border: 2px solid black; border-radius: 100%"
        }
    }

    return (
        <div className='UserSelectionBlock' onClick={selectuser}>
            <img src={img} alt="user selection image" />
            <p>{title}</p>
        </div>
    )
}

export default UserSelectionBlock