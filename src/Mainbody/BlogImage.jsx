const BlogImage = ({title, bgColor, author, icon}) => {
    return (
        <div>
            <div style={{backgroundColor: bgColor}}>
                <i className={`devicon-${icon.value}-plain text-8xl`}></i>
                <div>{title}</div>
                <div>{author}</div>
                </div>
        </div>
    )
}

export default BlogImage
