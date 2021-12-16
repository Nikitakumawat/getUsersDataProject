import React, { useState, useEffect } from "react";
import axios from "axios";

 const baseURL = "https://reqres.in/api/users?page=1";
//const baseURL = "https://jsonplaceholder.typicode.com/albums/1/photos";

function App() {
  const [post, setPost] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [avatar, setAvatar] =  useState();
  

  useEffect(() => {
    const getData = async ()=> {
      const res = await axios.get(baseURL);
      console.log(res.data);
      res.data.then((data)=>{setPost(data)})
      console.log(res.data.id);
      setId(res.data.id);
      setEmail(res.data.email);
      setAvatar(res.data.avatar);
      setFirst_name(res.data.first_name);
      setLast_name(res.data.last_name);
      
    }
    getData();
  },[]);
  return (
    <>
    
       <nav className="navbar">
        <p className="heading">Microsoft</p>
        <button>Get Users</button>
      </nav> 

      {/* <div className="container-fluid mt-5">
        <div className="row text-center">
          {post.map((curElem) => { 
            return (
              <div className="col-10 col-md-4 mt-5" key={curElem.id}>
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img
                        src={curElem.avatar}
                        className="rounded"
                        width="155"
                        alt="img"
                      />
                    </div>
                    <div className="ml-3 w-100">
                      <h4 className="mb-0 mt-0 textLeft">
                        {curElem.first_name}
                      </h4>
                      <span className="textLeft">{curElem.last_name}</span>
                      <div className="p-2 mt-2 bg-dark d-flex justify-content-between rounded text-white stats">
                        <div>
                          <span className="number1">{curElem.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
           })} 
        </div>
      </div>  */}

    </>
  );
}

export default App;
