import { useEffect, useState } from "react";
import Header from "../../reusables/Header/Header";

const SightSeeingPage = () => {
  const [allSights, setAllSights ] = useState ([])
  useEffect(() => {
    fetch("http://locationhost:3000/Sights", {
    method: "GET",
  }).then(response => {
    return response.json();
  }).then(data  => {
    console.log("data", data)
    return setAllSights(data)
   
  })
}, [])
if (allSights.length > 0)
  return (
    <>
      <Header />
      <div className="page-content">
        <h1>SightSeeing</h1>
      <div>
        <p>{allSights[0].Title}</p>
        <p>This is an example page. Use this example to create your own pages</p>
     
       <button>Show me sights</button>
       </div>
       </div>
       </>
  )
}

export default SightSeeingPage;