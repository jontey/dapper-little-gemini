import React from "react";
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4 mb-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">Movie DB</span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
      </div>
    </nav>
  )
}

export default Header