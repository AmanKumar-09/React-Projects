import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { UseSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((status) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true,
    },

    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },

    {
      name: "All status",
      slug: "/all-status",
      active: authStatus,
    },

    {
      name: "Add post",
      slug: "/add-post",
      active: authStatus,
    },

  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />

            </Link>
          </div>
          
          <ul className='flex ml-auto'>
            {navItems.map((item) =>
            item.active ? (
              <li key={item.name} >
                <button
                onClick={() => navigate(item.slug)}
 
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>

              </li>
            ) : null
            )}

            {/* Show the logout button if the user is authenticated */}
            
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}

          </ul>

        </nav>
      </Container>

    </header>
  )
}
import { formatProdErrorMessage } from '@reduxjs/toolkit'

export default Header