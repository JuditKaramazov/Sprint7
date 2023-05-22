import React from 'react';
import { Link } from 'react-router-dom';
import { WelcomeContainer, Introduction, WelcomeTitle, StyledText } from './Welcome.styled';
import welcomeBg from '../../assets/welcomeBg.gif';
import startButton from '../../assets/startButton.png';

function Welcome() {
  return (
    <WelcomeContainer>
      <img src={welcomeBg} alt="Indie game animation" />

      <Introduction>
        <WelcomeTitle>· can you price art? ·</WelcomeTitle>

        <StyledText>
          Not really; its value is as <b>immeasurable</b> as human souls are.
          <br />
          However, here we'll answer <em>part</em> of your questions.
          <br />
          <br />
          <b>Tiny games, tiny prices</b>: <br />
          calculate the total costs covering the monthly work of honest, skillful artisans.
        </StyledText>

        <Link to="home" className="link">
          <img src={startButton} alt="Retro gaming button" />
        </Link>
      </Introduction>
    </WelcomeContainer>
  );
}

export default Welcome;
