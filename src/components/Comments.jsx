import React from "react";
import styled from "styled-components";
import JerryC from "./JerryC";
import NibblesC from "./NibblesC";
import SpikeC from "./SpikeC";
import BlackladyC from "./BlackladyC";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://i.pinimg.com/originals/1f/13/17/1f1317e6a5887547544c0f1c721d1fa8.jpg" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <JerryC/>
      <NibblesC/>
      <SpikeC/>
      <BlackladyC/>
    </Container>
  );
};

export default Comments;
