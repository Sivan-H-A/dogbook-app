import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Breeds from '../../components/Breeds/Breeds';
import BreedModel from '../../model/BreedModel';
import './BreedsPage.css'

function BreedsPage() {
    const [breedsList, setBreedsList] = useState([]);
    const [filterText, setFilterText] = useState("")
    const [changeImg, setChangeImg] = useState(false);

    useEffect(() => {
        axios.get("https://dog.ceo/api/breeds/list/all").then(res=>{
            setBreedsList(Object.keys(res.data.message).map((name, index) => new BreedModel(index,name.charAt(0).toUpperCase() + name.slice(1))));
        }).catch();
    }, []);

    return (
        <Container>
             <Row className="p-breeds">
                <Col className="col-md-6 col-12">               
                    <Form.Control type="text" value={filterText} placeholder="Filter by:" onChange={(e)=>setFilterText(e.target.value)}/>
                </Col>
                <Col className="col-md-3 col-12">
                    <Button 
                        variant="info"
                        onClick={()=>setChangeImg(!changeImg)}>
                        Change Imgae</Button>
                </Col >
            </Row>
           <Breeds breedsList={filterText ? breedsList.filter(breed=>(breed.name).toLowerCase().includes(filterText.toLowerCase())): breedsList} 
                changeImg={changeImg}/> 
        </Container>
    )
}
export default BreedsPage;
