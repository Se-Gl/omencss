import Link from 'next/link'
import Button from './Button'
import Logo from './Logo'

export default function Header() {
  return (
    <header className='container'>
      <nav className=' fixed top-0 flex items-center h-15rem flex justify-between z-100 w-100per max-w-100rem'>
        <div className='ml-10px sm:ml-0px'>
          <Link href='/'>
            <a>
              <Logo width='121' height='17' />
            </a>
          </Link>
        </div>
        <ul className='flex text-16px sm:text-12px sm:mx-10px text-purple'>
          <li>Home</li>
          <li className='sm:mx-10px mx-25px'>Docs</li>
          <li>Blog</li>
        </ul>
        <Button>Contact</Button>
      </nav>
    </header>
  )
}