import BlogViewIcon from '../assets/Images/BlogView.png'
const Navbar = () => {
    return (
        <div className='bg-purple-500 flex justify-between p-1'>
           <h4 className='flex my-auto ml-4 mr-auto font-bold text-2xl'>
                <img src={BlogViewIcon} alt="Icon" className='h-8 w-8 m-1 mr-2' />BlogView</h4>
                <a href="https://github.com/Amanthukral12/BlogView" className='p-1 my-1 mx-2 transform hover:scale-x-105'>
                    <span className='bg-gray-900 text-sm font-semibold p-1 my-1 ml-auto rounded'>
                        ⭐ Star on Github</span>
                        </a>
        </div>
    )
}

export default Navbar
