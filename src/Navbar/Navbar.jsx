import BlogViewIcon from '../assets/Images/BlogView.png'
const Navbar = () => {
    return (
        <div className='bg-purple-500'>
            <h4><img src={BlogViewIcon} alt="" />BlogView</h4>
            <span>⭐ Star on Github</span>
        </div>
    )
}

export default Navbar
