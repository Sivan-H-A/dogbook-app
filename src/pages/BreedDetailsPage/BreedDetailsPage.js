import React, {useEffect, useState} from 'react'
import { Link, Redirect, useParams } from "react-router-dom";
import axios from 'axios';
import { Button, Card, Modal } from 'react-bootstrap'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

 function BreedDetailsPage() {
    const [show, setShow] = useState(false);
    const [activeImg, setActiveImg] = useState("");
    const { breed } = useParams();
    const [redirectTo,setRedirectTo] =useState("");

    const [breedImgList, setBreedImgList] = useState([]); 

    
    useEffect(() => {
        if(breed){
            axios.get(`https://dog.ceo/api/breed/${breed.toLowerCase()}/images`).then(res=>{
                setBreedImgList(res.data.message.map((img,index)=><Card.Img key={index} alt={breed} src={img} onClick={(e)=>handleImgClick(e)}/>));                         
                setRedirectTo("");
            })
            .catch((err)=>{
                if (err.response.status === 404) {
                    setRedirectTo('/');
                } else{
                    setRedirectTo('/home')
                }
            });
        }
    }, [breed]);
    
    if(redirectTo){
        return <Redirect to={redirectTo}/>
    }
    function handleImgClick(e){
        setActiveImg(e.target.src);
        setShow(true);
    }
    return (  
        <> 
        { breedImgList.length >0  ?
            <div>
                <h1 className="text-center">{breed}</h1>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                    <Masonry columnsCount={3} gutter="10px">
                        {breedImgList? breedImgList :null}
                    </Masonry>
                </ResponsiveMasonry>  
                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title className="text-center">{breed}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img style={{width:"100%"}}src={activeImg}/>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button variant="secondary" onClick={()=>setShow(false)}>
                            Close
                        </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
            :
            <Link to="/"/>        
        }
        </>
    )
}
export default BreedDetailsPage