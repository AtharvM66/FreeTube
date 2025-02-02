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

const SpikeC = () => {
  return (
    <Container>
      <Avatar src="https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=900,fit=cover/article/main-picture/spike-and-tyke-the-bulldogs-from-tom-and-jerry-64edbedc77fc0.png" />
      <Details>
        <Name>
          Spike Dog <Date>83 years ago</Date>
        </Name>
        <Text>
        🤣🤣🤣🤣
        </Text>
      </Details>
    </Container>
  );
};

export default SpikeC;
