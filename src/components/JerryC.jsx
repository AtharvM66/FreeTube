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

const jerryCom = () => {
  return (
    <Container>
      <Avatar src="https://i.pinimg.com/736x/e7/64/4f/e7644f1812107e4a5a1e77be28cc16ac.jpg" />
      <Details>
        <Name>
          Jerry Mouse <Date>83 years ago</Date>
        </Name>
        <Text>
          That was not nice!!!
        </Text>
      </Details>
    </Container>
  );
};

export default jerryCom;
