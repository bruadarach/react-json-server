import React from "react";
import styled from "styled-components";
import ContactsIcon from "@mui/icons-material/Contacts";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: teal;
`;

const Title = styled.h1`
  font-weight: bold;
  font-family: "Urbanist", sans-serif;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Title>
        <ContactsIcon
          style={{
            color: "#fff",
            margin: "0 10px",
            fontSize: "25px",
          }}
        />
        Github Friends List
      </Title>
    </Container>
  );
};

export default Header;
