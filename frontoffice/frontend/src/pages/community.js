import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import Community from "../components/Community";
import styled from "styled-components";

const Contenitore = styled.div`
  margin: 100px;
  margin-left: 2em;
  margin-right: 2em;
`;
const Container = styled.div` 
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const CommunityPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("http://localhost:4000/api/note/")
      .then((res) => {
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {loading ? (
        ""
      ) : (
        <div>
          <Container>
            {data.data.map((item) => (
              <Contenitore>
                <Community item={item}></Community>
              </Contenitore>
            ))}
          </Container>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
