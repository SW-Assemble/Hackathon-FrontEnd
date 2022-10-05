import type { NextPage } from "next";
import React, { useEffect } from "react";
import Image from "next/image";
import Speaker from "../public/img/speaker.png";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  bottom: 70px;
  left: 0;
  right: 0;
  text-align: center;
  width: 70%;
  background-color: #3dc1f1;
  z-index: 1;
  border-radius: 12px;
`;

const MainText = styled.h1`
  text-align: center;
  margin: 0;
  padding: 20px;
`;

const MenuItem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #333;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MenuWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  padding-bottom: 0px;
  padding-top:10px;
  background-color:white;
  margin-bottom: 5px;
  align-items: center;
  flex-direction: column;
`;

const TTSWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    box-shadow: 5px 5px 5px lightgray;
    background-color: white;
    border-radius: 100px;
    padding: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 800px;
    height: 150px;
    font-weight: bold;
    cursor: pointer;
    font-size: 50px;
    line-height: 20px;
    > p {
      margin-left: 50px;
    }
  }
  > div span {
    display: flex !important;
    height: 100px !important;
    width: 100px !important;
  }
`;

const Wrapper = styled.div`
  margin-top: 60px;
  width: 100%;
  height: fit-content;
  position: relative;
  padding-bottom: 250px;
  background-color: #eff7ff;
`;

const Slider: NextPage = () => {
  const onClick = () => {
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.text = "가나다라";
    window.speechSynthesis.speak(speechMsg);
  };
  return (
    <Wrapper>
      <TTSWrapper>
        <div onClick={onClick}>
          <Image src={Speaker} />
          <p>음성안내로 시작하기</p>
        </div>
      </TTSWrapper>
      <Container>
        <MainText>무엇을 도와드릴까요?</MainText>
        <MenuContainer>
          {new Array(5).fill(0).map((data, idx) => {
            return (
              <MenuWrapper key={idx}>
                <MenuItem />
                <h3>일자리 구직</h3>
              </MenuWrapper>
            );
          })}
        </MenuContainer>
      </Container>
    </Wrapper>
  );
};

export default Slider;
