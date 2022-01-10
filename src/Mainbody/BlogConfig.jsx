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
                <input type="text"
                    placeholder='Enter title here'
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }} />
                    <input type="text"
                    placeholder='Enter author here'
                    onChange={(e) => {
                        setAuthor(e.target.value)
                    }} />
                <div>
                    <h6>Background</h6>
                    <span>Color</span>
                    <input type="color"
                    value={bgColor}
                    onChange={(e) => {
                        setBgColor(e.target.value)
                    }} />
                </div>
                <h6>Dev Icon</h6>
                <Select
                    value={icon}
                    options={icons}
                    onChange={(e) => {
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
