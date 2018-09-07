import React from 'react'
import Link from 'gatsby-link'
import './header.css'
import logo from '../image/crown.svg'




const Header = ({ siteTitle }) => (
 <div className="headerGroup">
       <img src={logo} width="30" />
       <p>Home</p>
       <p>Articles</p>
       <p>About</p>

</div>
)

export default Header
