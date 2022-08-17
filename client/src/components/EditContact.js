import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 30px;
  color: rgb(24, 24, 24);
  font-family: "Comfortaa", cursive;
  margin: 1.5rem 0;
`;

const Form = styled.form`
  /* height: 250px; */
  border-bottom: 1px solid lightgray;
`;

const Wrapper = styled.div`
  margin: 1.2rem 0;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  font-family: "Urbanist", sans-serif;
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 18px;
  font-family: "Urbanist", sans-serif;
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 0.5rem;
  font-size: 16px;
  width: 50%;
`;

const Button = styled.button`
  color: #fff;
  padding: 0.7rem 3rem;
  border-radius: 5px;
  background-color: teal;
  border: none;
  font-family: "Comfortaa", cursive;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 2rem;
  cursor: pointer;
`;

const EditContact = ({ contacts, updateContactHandler }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const selectedContact = contacts.filter((contact) => {
    return contact.id === id;
  });

  const [nameEdit, setNameEdit] = useState(selectedContact[0].name);
  const [addressEdit, setAddressEdit] = useState(selectedContact[0].address);

  const updateContact = (e) => {
    console.log(e.target.id, "targetID");
    e.preventDefault();
    updateContactHandler({ id: id, name: nameEdit, address: addressEdit });
    setNameEdit("");
    setAddressEdit("");
    navigate("/");
  };

  return (
    <Container>
      <Title>Edit Contact</Title>
      <Form onSubmit={updateContact}>
        <Wrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={nameEdit}
            onChange={(e) => {
              setNameEdit(e.target.value);
            }}
            required
          />
        </Wrapper>
        <Wrapper>
          <Label>Github</Label>
          <Input
            type="text"
            name="email"
            placeholder="Github Address"
            value={addressEdit}
            onChange={(e) => {
              setAddressEdit(e.target.value);
            }}
            required
          />
        </Wrapper>
        <Button>Update</Button>
      </Form>
    </Container>
  );
};

export default EditContact;
