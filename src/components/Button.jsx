import React from 'react'
import './button.css'

const Button = ({butonunIcindekiYazi, icon,}) => {

  

  {/* jsx de deyisenler {} icerisinde yazilir */}
 
  return (
  
    <a className="my-custom-btn">{icon && <img src={icon} className="ucbucaq"  />}{butonunIcindekiYazi}</a>
  )
}

export default Button