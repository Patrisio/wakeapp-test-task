import React from 'react';
import styled from 'styled-components';

import background from '../resources/images/joker.jpg';
import { Logo } from '../resources/icons';

import Button from './Button';

export default function MainScreen() {
  return (
    <MainScreenWrapper>
      <Header>
        <Logo />
      </Header>

      <Content>
        <H1>Sign up & get Welcome Bonus</H1>
        <H2>€ 100 + 55 free spins</H2>

        <Button>Deposit now</Button>
      </Content>
    </MainScreenWrapper>
  );
}

const MainScreenWrapper = styled.div`
  background: url(${background});
  max-width: 1248px;
  margin: 0 auto;
  color: #fff;
  padding: 0 0 127px;
`;

const Header = styled.header`
  padding: 26px 16px 0;
`;

const H1 = styled.h1`
  font-weight: bold;
  font-size: 43px;
  line-height: 109%;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const H2 = styled.h2`
  font-weight: bold;
  font-size: 28px;
  line-height: 118%;
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const Content = styled.div`
  width: 410px;
  padding: 187px 0 0 53px;
`;