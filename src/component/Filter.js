function Filter(props){
    const filterdata=props.filter
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title){
        setCategory(title);
    }
    const filterTitle=filterdata.map(data=>{
        return <button
        className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black border-2 hover:bg-opacity-50 transition-all duration-200
              ${
                category === data.title
                  ? "bg-opacity-90 border-white"
                  : "bg-opacity-40 border-transparent"
              }
            `}
        key={data.id}
    
        onClick={()=>filterHandler(data.title)}
        >{data.title}</button>
    })


    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center">
            {filterTitle}
        </div>
    )
    
}
export default Filter;