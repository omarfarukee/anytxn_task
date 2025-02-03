// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router'

export default function Service() {
  return (
    <div className='h-screen flex justify-center flex-col items-center'>
            <p className='text-3xl text-center'>This page is under construction </p>
            <NavLink to="/" className="text-blue-700 underline">Go Home</NavLink>
            <img className='w-96' src="https://cdn.dribbble.com/users/448601/screenshots/2169052/crane_dribbble.gif" alt="" />
    </div>
  )
}
