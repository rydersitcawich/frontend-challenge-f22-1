import React from 'react';
import './navbarlink.css';
function NavBarLink(props: any){
  return (
    <div className = 'nav-bar-link-container'>
        <a href = {props.to}>{props.value}</a>
    </div>
  )
}

export default NavBarLink;