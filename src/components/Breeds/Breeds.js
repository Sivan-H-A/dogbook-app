import React from 'react'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import BreedCard from './BreedCard';

function Breeds({breedsList , changeImg}) {  
    return (
        <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry columnsCount={4} gutter="10px">
                    {breedsList? breedsList.map((breed, index)=>
                        <BreedCard breed={breed} 
                                key={index}
                                style={{width: "100%", display: "block"}}
                                clickFlag={changeImg}/>)
                        :null}
                </Masonry>
        </ResponsiveMasonry>
    )
}
export default Breeds;