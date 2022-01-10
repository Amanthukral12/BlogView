import React, {Children, useRef} from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
const ComponentToImg = (props) => {
    const componentRef  = useRef();
    let downloadButton;
    switch(props.downloadAs){
        case "PNG":
            downloadButton = <button 
                onClick={() => exportComponentAsPNG(componentRef)}
            >Download</button>
        case "JPEG":
            downloadButton = <button 
                 onClick={() => exportComponentAsJPEG(componentRef)}
            >Download</button>
    }
    return (
        <React.Fragment>
            <div ref={componentRef}>{props.children}</div>
            {downloadButton}
        </React.Fragment>
    )
}

export default ComponentToImg
