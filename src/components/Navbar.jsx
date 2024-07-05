import logo from '../assets/sbdLogoWhite.png'

const Navbar = () => {
  return (

    <div className="bg-[#001212] w-full h-[5rem] flex justify-between p-4">
        <a href="/" className='h-full flex'>
        <img src={logo} alt="Shia Business Directory"/>
        </a>
      <div className="text-white h-full content-center">
        <a href="/register" className='pr-5'>register</a>
        <a href="/allcatagories">all catagories</a>
      </div>

    </div>
  )
}

export default Navbar