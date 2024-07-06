import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { useState } from 'react';
function Card(props){
  const eachCardData=props.eachCardData;
  const [liked,setLiked]=useState(false);

  function likeclickHandler(){
    if(liked==true){
      toast.warning("Like Removed");
    }
    else{
      toast.success("successfully Liked");
    }
    setLiked(!liked);
  }
    return(
        <div className='bg-gray-900 bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
          <div div className='relative '>
            <img src={eachCardData.image.url} alt={eachCardData.image.alt}></img>
             <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
               <button onClick={likeclickHandler}>{liked?<FcLike fontSize="1.75rem"/>:<FcLikePlaceholder fontSize="1.75rem" />}</button>
             </div>
          </div>
          <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{eachCardData.title}</p>
            <p className='mt-2 text-white'>{eachCardData.description}</p>
          </div>
        </div>
    )
}
export default Card;