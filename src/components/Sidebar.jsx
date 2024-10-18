import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiOutlineArchiveBoxXMark } from "react-icons/hi2";
import { CiInboxIn, CiInboxOut, CiBoxes } from "react-icons/ci";
import { FaBars} from 'react-icons/fa';
import { BsBoxSeam,BsInboxes } from "react-icons/bs";

import { IoHomeOutline } from "react-icons/io5";
import { MdRecycling } from "react-icons/md";
import { LiaFlaskSolid } from "react-icons/lia";

const Sidebar = () => {
  const location = useLocation();
  const [isProductOpen, setIsProductOpen] = useState(false); 
  const [isProsesOpen, setIsProsesOpen] = useState(false); 
  const [isLabOpen, setIsLabOpen] = useState(false); 
  const [isCollapsed, setIsCollapsed] = useState(false); 

  return (
    <aside className={`bg-zinc-900 p-4 transition-all duration-300 h-full max-h-screen ${isCollapsed ? 'w-20' : 'w-64'} overflow-y-auto custom-scrollbar`}>

      <div className="flex justify-between mb-4">
        {!isCollapsed && (
          <h1 className={`text-zinc-100 text-center text-2xl font-bold transition-opacity duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
            SIM
          </h1>
        )}
        <button
          className={`text-xl ${isCollapsed ? 'w-full h-full flex items-center justify-center mt-2 text-2xl' : 'ml-auto'}`}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <FaBars className='text-zinc-100 ' />
        </button>
      </div>
      <nav className='mt-11'>
        <ul>
          <li className="mb-2">
            <Link
              to="/"
              className={`flex items-center p-2 ${location.pathname === '/' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <IoHomeOutline className='text-2xl text-zinc-100 ' />
              {!isCollapsed && <span className="ml-2 text-zinc-100 font-bold">Dashboard</span>}
            </Link>
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setIsProductOpen(!isProductOpen)}
            >
              <BsBoxSeam className='text-2xl text-zinc-100 '/>
              {!isCollapsed && <span className="ml-2 text-zinc-100 font-bold text-base">Product</span>}
            </span>
            {isProductOpen && (
              <ul className={`ml-4 ${isCollapsed ? 'ml-0' : 'ml-6'}`}>
                <li className="mb-1">
                  <Link
                    to="/add-product"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/add-product' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <CiBoxes className='text-2xl text-zinc-100' />
                    {!isCollapsed && <span className="ml-2">Add Product</span>}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/add-stok"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/add-stok' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <BsInboxes className='text-xl text-zinc-100' />
                    {!isCollapsed && <span className="ml-2">Add Stok</span>}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/incoming"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/incoming' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <CiInboxIn className='text-2xl text-zinc-100'/>
                    {!isCollapsed && <span className="ml-2">Incoming</span>}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/outgoing"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/outgoing' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <CiInboxOut className='text-2xl text-zinc-100'/>
                    {!isCollapsed && <span className="ml-2">Outgoing</span>}
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    to="/rejecting"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/rejecting' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <HiOutlineArchiveBoxXMark className='text-2xl text-zinc-100'/>
                    {!isCollapsed && <span className="ml-2">Rejecting</span>}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setIsProsesOpen(!isProsesOpen)}
            >
              <MdRecycling className='text-2xl text-zinc-100 '/>
              {!isCollapsed && <span className="ml-2 text-zinc-100 font-bold text-base">Proses</span>}
            </span>
            {isProsesOpen && (
              <ul className={`ml-4 ${isCollapsed ? 'ml-0' : 'ml-6'}`}>
                
                <li className="mb-1">
                  <Link
                    to="/rejecting"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/rejecting' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <HiOutlineArchiveBoxXMark className='text-2xl text-zinc-100'/>
                    {!isCollapsed && <span className="ml-2">Rejecting</span>}
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="mb-2">
            <span
              className={`flex items-center p-2 font-semibold cursor-pointer ${isCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setIsLabOpen(!isLabOpen)}
            >
              <LiaFlaskSolid className='text-2xl text-zinc-100 '/>
              {!isCollapsed && <span className="ml-2 text-zinc-100 font-bold text-base">Lab</span>}
            </span>
            {isLabOpen && (
              <ul className={`ml-4 ${isCollapsed ? 'ml-0' : 'ml-6'}`}>
                <li className="mb-1">
                  <Link
                    to="/add-product"
                    className={`flex items-center p-2 text-zinc-100 dark:text-gray-300 ${location.pathname === '/add-product' ? 'rounded-md bg-zinc-600' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                  >
                    <CiBoxes className='text-2xl text-zinc-100' />
                    {!isCollapsed && <span className="ml-2">Add Product</span>}
                  </Link>
                </li>
                
              </ul>
            )}
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
