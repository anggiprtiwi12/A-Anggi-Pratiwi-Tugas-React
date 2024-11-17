import { useId } from 'react'
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext';

export default function Navbar({onSearchChange}) {
  const inputId = useId()
  const { isLoggedIn, login, logout } = useUser();

  const handleSearchInput = (e) => {
    onSearchChange(e.target.value)
  }
  return (
    <nav className='grid grid-cols-3 justify-between px-24 py-4 bg-[#526E48] items-center'>
        <ul>
          <li className='flex items-center justify-center'>
            <Link to='/' className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]'>Beranda</Link>
          </li>
        </ul>
        <ul className='flex justify-center items-center'>
          <li className='w-full'>
            <input type="text" className='text-black active:text-black focus:text-black px-4 py-2 w-full' name="cari" id={inputId} placeholder='Cari Produk...' onChange={handleSearchInput} />
          </li>
        </ul>
        {!isLoggedIn ? (
            <ul className='flex gap-2 justify-end'>
              <li className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]'>
                {/* <Link to="">Sign in</Link> */}
                <button onClick={ login}>Masuk</button>
              </li>
              <li>
                <Link className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]' to="/singup">Daftar</Link>
              </li>
          </ul>
        )
        : (
            <ul className='flex justify-end gap-2'>
              <li >
                <Link className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]' to="/cart">
                    Keranjang
                </Link>
              </li>
              <li >
                <Link to='/orders' className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]'>Pesanan Saya</Link>
              </li>
              <li>
                <button onClick={logout} className='text-[#F2F4FF] hover:text-[#9EDF9C] active:text-[#9EDF9C]'>Keluar</button>
              </li>
            </ul>
        )}
    </nav>
  )
}
