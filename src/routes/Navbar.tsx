import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/cheesecake" className={({ isActive }) => !isActive ? "navbar-options": 'navbar-options active'}> Cheesecake 🍰</NavLink>

      <NavLink to="/burger" className={({ isActive }) => !isActive ? "navbar-options": 'navbar-options active'}> Burger 🍔</NavLink>
    </div>
  )
}
export default Navbar
