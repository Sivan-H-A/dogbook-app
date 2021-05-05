import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BreedCard({index, breed, clickFlag}) {
    const[img,setImg] = useState("https://www.bil-jac.com/Images/DogPlaceholder.svg");

    useEffect(() => {
        setImg("https://www.bil-jac.com/Images/DogPlaceholder.svg")
        if(breed){
            axios.get(`https://dog.ceo/api/breed/${breed.name.toLowerCase()}/images/random`).then(
                res=> setImg(res.data.message)
            );
        }   
    }, [breed, clickFlag])
    return (
        <Card>
            <Link to= {'breeds/'+breed.name}>
                <Card.Title style={{textAlign:"center"}}>{breed.name}</Card.Title>
                <Card.Img src={img}/>
            </Link>
             
        </Card>
    )
}
export default BreedCard;
