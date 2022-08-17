import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Container = styled.div`
  padding: 0 0 0 2rem;
  width: 500px;
`;

const Content = styled.div`
  border-bottom: 1px solid lightgray;
  margin-bottom: 1.5rem;
  padding: 1rem;
`;

const Name = styled.div`
  font-size: 22px;
  margin-bottom: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    color: rgb(165, 163, 163);
  }
`;

const Address = styled.a`
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: darkslategrey;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    color: rgb(145, 169, 172);
  }
`;

const ContentFunc = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
`;

const ContentInfo = styled.div`
  margin-bottom: 10px;
`;

const ContactCard = ({ contact, removeContactHandler }) => {
  const { id, name, address } = contact;

  return (
    <Container>
      <Content>
        <ContentFunc>
          <Link to={`/edit/${id}`}>
            <BorderColorIcon
              style={{
                color: "lightblue",
                margin: "0 10px",
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
          </Link>
          <DeleteForeverIcon
            style={{
              color: "lightpink",
              margin: "0",
              fontSize: "22px",
              cursor: "pointer",
            }}
            onClick={() => removeContactHandler(contact.id)}
          />
        </ContentFunc>
        <ContentInfo>
          <AccountCircleIcon
            style={{ color: "LightSlateGrey", fontSize: "50px" }}
          />
          <Name>{contact.name}</Name>
          <Address href={contact.address} target="_blank">
            {contact.address}
          </Address>
        </ContentInfo>
      </Content>
    </Container>
  );
};

export default ContactCard;
