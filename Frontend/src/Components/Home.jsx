import React, { useEffect, useState } from 'react'


function Home() {
    const [table, setTable] = useState([]);
    const getData = async () => {
      try {
        let res = await fetch(`http://localhost:4000`);
        let data = await res.json();
        setTable(data);
          console.log(table);
      } catch (error) {
        console.log("error", error);
      }
    };
    useEffect(() => {
      getData();
    }, []);


  return (
    <div>


      <div>
      {table.map((e) => {
        return (
          <div >
            
            <p>{e.name}</p>
            <p>{e.email}</p>
          </div>
        );
      })}
    </div>
      
    </div>
  )
}

export default Home
