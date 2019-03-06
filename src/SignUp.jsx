import React from 'react';
import styled from 'styled-components';

// typography
import { FormStyles } from './Typography/FormStyles';
import { TitleStyles } from './Typography/TitleStyles';
import { SocialContainer } from './Typography/SocialContainer';
import { SocialAnchorStyles } from './Typography/SocialAnchorStyles';
import { SpanStyles } from './Typography/SpanStyles';
import { InputStyles } from './Typography/InputStyles';
import { Container } from './Typography/Container';
import { show } from './Typography/ShowKeyFrames';
import { CoolButton } from './Typography/CoolButton';

const SignUpContainer = styled(Container)`
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

  &.rightPanelActive {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: ${show} 0.6s;
  }
`;

const SignUp = ({ selected }) => (
  <SignUpContainer className={ selected ? 'rightPanelActive' : ''}>
    <FormStyles action="#">
      <TitleStyles>Create Account</TitleStyles>
      <SocialContainer>
      <SocialAnchorStyles>
          <i className="fab fa-facebook-f"></i>
        </SocialAnchorStyles>
        <SocialAnchorStyles>
          <i className="fab fa-google-plus-g"></i>
        </SocialAnchorStyles>
        <SocialAnchorStyles>
          <i className="fab fa-linkedin-in"></i>
        </SocialAnchorStyles>
      </SocialContainer>

      <SpanStyles>or use your email for registration</SpanStyles>
      <InputStyles type="text" placeholder="name"/>
      <InputStyles type="email" placeholder="email"/>
      <InputStyles type="password" placeholder="password"/>
      <CoolButton>Sign Up</CoolButton>
    </FormStyles>
  </SignUpContainer>
);

export default SignUp;
