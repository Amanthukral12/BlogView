import BlogConfig from "./Mainbody/BlogConfig"
import Navbar from "./Navbar/Navbar"

function App() {

  return (
    <div className="text-white flex flex-col h-screen bg-gray-100">
     <Navbar />
     <BlogConfig />
    </div>
  )
}

export default App
