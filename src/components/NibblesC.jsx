import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text}
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment2 = () => {
  return (
    <Container>
      <Avatar src="https://alchetron.com/cdn/nibbles-tom-and-jerry-c16dc6b4-68b7-42c6-9437-c9d3c01dc21-resize-750.jpeg" />
      <Details>
        <Name>
          Nibbles <Date>83 years ago</Date>
        </Name>
        <Text>
          That was funny 😂
        </Text>
      </Details>
    </Container>
  );
};

export default Comment2;
