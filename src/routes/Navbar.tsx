import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/cheesecake" className="navbar-options"> Cheesecake 🍰</NavLink>
      <NavLink to="/burger" className="navbar-options"> Burger 🍔</NavLink>
    </div>
  )
}
export default Navbar
