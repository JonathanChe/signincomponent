import React from 'react';
import styled from 'styled-components';

// Typography
import { TitleStyles } from './Typography/TitleStyles';
import { ParagraphStyles } from './Typography/ParagraphStyles'
import { OverlayPanel } from './Typography/OverlayPanel';
import { CoolButton } from './Typography/CoolButton';

const OverlayContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;

  &.activeRightPanel {
    transform: translateX(-100%);
  }
`;

const Overlay = styled.div`
  background: #ff416c;
  background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
  background: linear-gradient(to right, #ff4b2b, #ff416c);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;

  &.rightPanelActive {
    transform: translateX(50%);
  }
`;

const OverlayLeft = styled(OverlayPanel)`
  transform: translateX(-20%);

  &.rightPanelActive {
    transform: translateX(0);
  }
`;

const OverlayRight = styled(OverlayPanel)`
  right: 0;
  transform: translateX(0);

  &.rightPanelActive {
    transform: translateX(20%);
  }
`;

const OverlayComponent = ({ handleSignInClick, handleSignUpClick, selected }) => (
  <OverlayContainer className={ selected ? 'rightPanelActive' : ''}>
    <Overlay className={ selected ? 'rightPanelActive' : ''}>
      <OverlayLeft className={ selected ? '' : ''}>
        <TitleStyles>Welcome Back!</TitleStyles>
        <ParagraphStyles>
          To keep connected with us please login with your personal info
        </ParagraphStyles>
        <CoolButton
          className="ghost"
          onClick={handleSignInClick}
        >
          Sign in
        </CoolButton>
      </OverlayLeft>
      <OverlayRight className={ selected ? 'rightPanelActive' : ''}>
        <TitleStyles>Hello, Friend!</TitleStyles>
        <ParagraphStyles>
          Enter your personal details and start the journey with us
        </ParagraphStyles>
        <CoolButton
          className="ghost"
          onClick={handleSignUpClick}
        >
          Sign Up
        </CoolButton>
      </OverlayRight>
    </Overlay>
  </OverlayContainer>
);

export default OverlayComponent;
