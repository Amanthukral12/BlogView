const BlogImage = ({title, bgColor, author, icon}) => {
    return (
        <div style={{backgroundColor: bgColor}} 
            className="flex flex-row w-full h-80 py-12 px-16 text-gray-600 ">
                <div  className="w-full bg-white flex p-12 pr-8 rounded-lg">
                <i className={`devicon-${icon.value}-plain text-8xl m-4 mr-5`}></i>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold mb-4">{title}</h1>
                        <hr className="border-2 bg-gray-800 w-1/2 mb-2" />
                        <h3 className="text-3xl font-bold">{author}</h3>
                    </div>
                    
                </div>
            
        </div>
    )
}

export default BlogImage
