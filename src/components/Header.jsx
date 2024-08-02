import mainLogo from 'assets/main-logo.png'

const Header = () => {
  return (
    <header className='fixed h-14 w-full bg-[#F55A5A] text-white font-inter flex items-center justify-center gap-2'>
      <img className='h-6' src={mainLogo} alt="Web site logo" />
      <h1 className='text-sm tracking-tighter '>my travel journal.</h1>
    </header>
  )
}

export default Header
