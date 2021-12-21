import React, { useState } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Loading from "./Loading";

const baseURL = "https://reqres.in/api/users?page=1";

const App = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(baseURL);
      const data = res.data.data;
      console.log(data);
      console.log(res.data.data[0].id);
      setPost(data);
      setLoading(false);
    } catch (error) {
      console.log("my error is" + error);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid ">
          <div className="heading">Microsoft</div>
          <form className="d-flex">
            <button
              className="btn btn-get-users btn-dark btn-outline-light"
              onClick={getData}
            >
              Get Users
            </button>
          </form>
        </div>
      </nav>
      <div className="app container-fluid mt-5 ">
        <div className="wrapper row text-center">
          {post.map((e) => (
            <>
              <div className="cards  col-10 col-sm-4 col-md-4 col-lg-4 mt-5 ml-10">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={e.avatar} />
                  <Card.Body>
                    <Card.Title>
                      {e.id + " " + e.first_name + " " + e.last_name}
                    </Card.Title>
                    <Card.Text>
                      <li>{e.email}</li>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
