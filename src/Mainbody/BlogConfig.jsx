import React, { useState, useEffect } from 'react';
import BlogImage from './BlogImage';
import Select from 'react-select';
import ComponentToImg from './ComponentToImg';
const BlogConfig = () => {
    const [title, setTitle] = useState("How I built my first project with react");
    const [author, setAuthor] = useState("Aman Thukral");
    const [bgColor, setBgColor] = useState("#8B5CF6")
    const [icons, setIcons] = useState({});
    const [icon, setIcon] = useState({'label': 'react', 'value': 'react'})
    const [downloadAs, setDownloadAs] = useState("PNG")

    const reset = () => {
        setTitle('How I built my first project with react')
        setAuthor('Aman Thukral')
        setBgColor('#8B5CF6')
        setIcon({'label': 'react', 'value': 'react'})
        setDownloadAs('PNG')
    }

    const getIcons = async () => {
        const response = await fetch('https://raw.githubusercontent.com/devicons/devicon/master/devicon.json');
        const data = await response.json();
        setIcons(data.map((item) => ({'value': item.name, 'label': item.name})));
    }

    useEffect(() => {
        getIcons();
    },[])

    return (
        <div className="flex md:flex-row flex-col text-black bg-gray-100 h-screen">
            <div className="w-full md:w-2/5 bg-white">
                <h6 className='mt-8 ml-8 font-medium text-gray-500 mb-8'>💻 Creating cover images for your<br /> 
                <span className='ml-8'>blogs is now super easy</span></h6>
                <div className='border-2 border-gray-200 w-11/12 ml-auto mr-auto rounded mt-2 mb-1'>
                    <input type="text"
                        placeholder='Enter title here'  
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                        className='w-full focus:outline-none focus:ring focus:border-blue-300
                        leading-5 p-2 rounded text-center '
                        />
                </div>
                <div className='border-2 border-gray-200 w-11/12 ml-auto mr-auto rounded mt-1'>
                    <input type="text"
                    placeholder='Enter Author here'
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }}
                    className='w-full focus:outline-none focus:ring focus:border-blue-300
                        leading-5 p-2 rounded text-center '
                    />
                </div>
                <div className='w-11/12 border-2 mt-3 rounded text-center m-auto'>
                    <h6 className='font-semibold text-gray-600 mb-4'>Background</h6>
                    <div className='flex flex-row mb-2'>
                    <div className='mr-auto ml-auto w-24 justify-center text-center '>
                        <span>Color
                    <input type="color"
                    value={bgColor}
                    onChange={(e) => {
                        setBgColor(e.target.value)
                    }}
                    className='w-24 h-10 pr-3 pl-3 p-1 bg-white border-2 flex-col rounded' />
                    </span>
                    </div>
                    </div> 
                </div>

                <div className='text-center mt-2 w-4/5 m-auto'>
                <h6 className='font-semibold text-gray-600 mb-2'>Dev Icon</h6>
                <Select
                    value={icon}
                    options={icons}
                    onChange={(e) => {
                        setIcon(e);
                    }}
                    className='uppercase'
                />
                </div>
                <div className='text-center mt-2 w-4/5 m-auto'>
                    <h6 className='font-semibold text-gray-600 mb-2'>Download As</h6>
                    <select
                        onChange={(e) => setDownloadAs(e.target.value)}
                        value={downloadAs}
                        className='border-2 w-full h-10 p-2 mb-4 text-center'
                    >
                        <option>PNG</option>
                        <option>JPEG</option>
                    </select>
                </div>
                <div className=' flex justify-center '>
                <button
                 onClick={() => reset()}
                 className='bg-purple-500 text-white font-semibold w-28 py-1 rounded shadow-lg'
                 >Reset</button>
                 </div>
            </div>
            <div className="bg-gray-100 h-full w-full p-2 md:px-24 md:py-16 rounded-lg">
                <ComponentToImg downloadAs={downloadAs} >
                    <BlogImage title={title} author={author} bgColor={bgColor} icon={icon}/>
                </ComponentToImg>
            </div>
        </div>
    )
}

export default BlogConfig
