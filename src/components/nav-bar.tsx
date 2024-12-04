import logo from '../../public/logo.svg'

const Navbar=()=>{
    return (
        <div className="w-full h-12 border-b flex items-center">
            <div className='flex pl-5 gap-4'>
                <img className='h-5 w-5' src={logo} alt=""/>
                <h1 className='font-semibold'>Student Management</h1>
            </div>
            
        </div>
    )
}

export default Navbar;