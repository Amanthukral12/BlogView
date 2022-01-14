import React, {Children, useRef,useState,useEffect} from 'react'
import { exportComponentAsJPEG, exportComponentAsPNG } from 'react-component-export-image';
const ComponentToImg = (props) => {
    const componentRef  = useRef();
    const [downloadClicked,setdownloadClicked]=useState(null);
    useEffect( () => {
    //    console.log("useEffect called");
     // console.log(downloadClicked.downloadClicked);
    }, [downloadClicked]);
    
    let downloadButton;
    switch(props.downloadAs){
        case "PNG":
            downloadButton = <button 
            className=''
                onClick={() =>{
                    console.log("button got ckicked");
                    setdownloadClicked({downloadClicked:true});
                    setTimeout(()=>{
                    //    console.log("state changed");
                        setdownloadClicked({downloadClicked:null})
                      //  console.log("download status ");
                       // console.log(downloadClicked);
                    },3000);
                    if(props.title.length==0 || props.author.length==0){
                        return;
                    }
                 //   setdownloadWarning({downloadWarning:false});
                    exportComponentAsPNG(componentRef)
                }}
            >Download</button>
        case "JPEG":
            downloadButton = <button 
            className=''
                 onClick={() => {
                    //  console.log("button got ckicked");
                    setdownloadClicked({downloadClicked:true});
                    setTimeout(()=>{ console.log("state changed")
                    setdownloadClicked({downloadClicked:null})
                //    console.log("download status ");
                //    console.log(downloadClicked);
                }
                    ,3000);
                    if(props.title.length==0 || props.author.length==0){
                    //    setdownloadWarning({downloadWarning:true});
                        return;
                    }
                //    setdownloadWarning({downloadWarning:false});
                    exportComponentAsJPEG(componentRef)
                 }}
            >Download</button>
    }
    return (
        <React.Fragment>
            <div ref={componentRef}>{props.children}</div>
            <div className='bg-purple-500 text-white text-center font-semibold w-32 py-1 rounded shadow-lg m-auto mb-5 mt-5'>
                {downloadButton}
            </div>
           
            {downloadClicked.downloadClicked!=null && (props.title.length==0 || props.author.length==0)==true &&
               (<p style={{color:"red","textAlign":"center",fontWeight:"bold"}}>Downloading failed</p>)
            }
            
           
            
        </React.Fragment>
    )
}

export default ComponentToImg
