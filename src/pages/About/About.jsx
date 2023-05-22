import React from 'react';
import { AboutSplit, AboutLeft, AboutRight, AboutTitle, AboutText } from './About.styled';
import aboutBg from '../../assets/aboutBg.gif';
import aboutMe from '../../assets/aboutMe.gif';
import itchioLogo from '../../assets/itchioLogo.png';
import barcelonaActivaLogo from '../../assets/barcelonaActivaLogo.png';

function About() {
  return (
    <AboutSplit>
      <AboutLeft>
        <AboutTitle>· about me ·</AboutTitle>
        <img src={aboutMe} style={{ width: 300 }} alt="Indie game final animation" />

        <AboutText>
          There's not much to say about me other than that I'm truly 
          <br />
          passionate about whatever affects the gaming industry.
          <br />
          However, the gaming industry is a harsh scenario for 
          <br />
          <b>small developers;</b>
          <br />
          don't forget to support them through platforms such as 
          <br />
          <br />
          <a href="https://itch.io/" target="_blank" rel="noreferrer">
            <img src={itchioLogo} style={{ width: 100 }} alt="itch.io official logo" />
          </a>
        </AboutText>
      </ AboutLeft>

      <AboutRight>
        <AboutTitle>· about the site ·</ AboutTitle>
        <img src={aboutBg} style={{ width: 300 }} alt="Indie game final animation" />

        <AboutText>
          This little <i>-and quite catastrophic-</i> project became
          <br />
          a reality thanks to <b>Barcelona Activa</b> and their free 
          <br />
          program for highly specialised training in the ICT sector:
          <br />
          <b>IT Academy.</b>
          <br />
          <br />
          <a href="https://www.barcelonactiva.cat/en/itacademy" target="_blank" rel="noreferrer">
            <img src={barcelonaActivaLogo} style={{ width: 145 }} alt="Barcelona Activa official logo" />
          </a>
        </AboutText>
      </ AboutRight>
    </ AboutSplit>
  )
}


export default About;
