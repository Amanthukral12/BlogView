import React, {Children, useRef} from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
const ComponentToImg = (props) => {
    const componentRef  = useRef();
    let downloadButton;
    switch(props.downloadAs){
        case "PNG":
            downloadButton = <button 
            className=''
                onClick={() => exportComponentAsPNG(componentRef)}
            >Download</button>
        case "JPEG":
            downloadButton = <button 
            className=''
                 onClick={() => exportComponentAsJPEG(componentRef)}
            >Download</button>
    }
    return (
        <React.Fragment>
            <div ref={componentRef}>{props.children}</div>
            <div className='bg-purple-500 text-white text-center font-semibold w-32 py-1 rounded shadow-lg m-auto mb-5 mt-5'>
                {downloadButton}
            </div>
            
        </React.Fragment>
    )
}

export default ComponentToImg
