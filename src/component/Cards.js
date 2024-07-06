import React from 'react';
import Card from './Card.js';
import { useState } from 'react';

function Cards(props){
    const cardData=props.cardData;
    let category=props.category;
    // const [likedCourses, setLikedCourses] = useState([]);
    function getCourses(){
        if(category==="All"){
            let allcardData=[]
            Object.values(cardData).forEach((array)=>{
                array.forEach((datacard)=>{
                     allcardData.push(datacard);
                })
           })
           return allcardData;
        }
        else{
            return cardData[category]
        }
    }
    

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((data)=>{
        return <Card key={data.id} eachCardData={data}/>
     })}
        </div>
    )
}
export default Cards;