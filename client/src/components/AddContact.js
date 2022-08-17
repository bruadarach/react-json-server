import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";

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
  padding: 0.6rem;
  font-size: 16px;
  width: 500px;
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

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const addContact = (e) => {
    e.preventDefault();
    addContactHandler({ id: uuid(), name: name, address: address });
    setName("");
    setAddress("");
  };

  return (
    <Container>
      <Title>Add Contact</Title>
      <Form onSubmit={addContact}>
        <Wrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
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
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            required
          />
        </Wrapper>
        <Button>Add</Button>
      </Form>
    </Container>
  );
};

export default AddContact;
