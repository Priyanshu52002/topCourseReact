import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Filter from './component/Filter'
import Cards from './component/Cards'
import { filterData ,apiUrl } from './data';
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';

function App() {
  
  const [cardData,setcardData]=useState([]);
  const [category, setCategory] = useState("All");
  const[loading,setLoading]=useState(true);
  const fetchData=async function(){
         setLoading(true);
         try{
           const res=await fetch(apiUrl)
           const output=await res.json()
           setcardData(output.data);
         }
         catch(err){
           toast.error("Something Went Wrong");
         }
         setLoading(false)
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
        <Navbar />
        <div  className="bg-bgDark2">
        <Filter filter={filterData}
        category={category}
        setCategory={setCategory}
        />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
         {loading?<Spinner/>:<Cards cardData={cardData} category={category}/>} 
        </div>
    </div>
  );
}

export default App;
