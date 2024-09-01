import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Fetch = () => {
  let url = "https://api.github.com/users";
  const [data, push] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let navigate = useNavigate()


  useEffect(() => {
    setIsLoading(true);
    axios.get(url).then((result) => {
      push(result.data);
      console.log(result.data);
      
      setTimeout(() => {
        setIsLoading(false);
      },3000);
    });
  }, []);


  const handleMove = () =>{
    navigate("/user/home")
  }

  // axios.get(url).then((result) => {
  //   push(result);
  // });
  return (
    <>
      {isLoading ? (
        <>
          <div className="loader">
            <div className="justify-content-center jimu-primary-loading"></div>
          </div>
        </>
      ) : (
        <>

          {data.map((item) => {
            return(
              <div key={item.id}>
                <small>{item.id}</small>
                <p>{item.login}</p>
                <img src={item.avatar_url} alt="" style={{width: "50px", height: "50px", borderRadius: "100%"}} />
                <button onClick={handleMove}>Next</button>
              </div>
            )
          })} 
        </>
      )}
    </>
  );
};

export default Fetch;
