import React, { useState, useEffect } from 'react';
import BlogImage from './BlogImage';
import Select from 'react-select';
const BlogConfig = () => {
    const [title, setTitle] = useState("How I built my first project with react");
    const [author, setAuthor] = useState("Aman Thukral");
    const [bgColor, setBgColor] = useState("#8B5CF6")
    const [icons, setIcons] = useState({});
    const [icon, setIcon] = useState({'label': 'react', 'value': 'react'})

    const getIcons = async () => {
        const response = await fetch('https://raw.githubusercontent.com/devicons/devicon/master/devicon.json');
        const data = await response.json();
        setIcons(data.map((item) => ({'value': item.name, 'label': item.name})));
    }

    useEffect(() => {
        getIcons();
    },[])

    return (
        <div className="flex md:flex-row flex-col text-black bg-gray-100 h-full">
            <div className="md:w-2/5 bg-white">
                form
                <Select
                    value={icon}
                    options={icons}
                    onChange={(e) => {
                        console.log(e)
                        setIcon(e);
                    }}

                >

                </Select>
            </div>
            <div className="">
                <BlogImage title={title} author={author} bgColor={bgColor} icon={icon}/>
            </div>
        </div>
    )
}

export default BlogConfig
