import React from 'react';
import styled from 'styled-components';

// typography
import { FormStyles } from './Typography/FormStyles';
import { TitleStyles } from './Typography/TitleStyles';
import { SocialContainer } from './Typography/SocialContainer';
import { SocialAnchorStyles } from './Typography/SocialAnchorStyles';
import { SpanStyles } from './Typography/SpanStyles';
import { InputStyles } from './Typography/InputStyles';
import { AnchorStyles } from './Typography/AnchorStyles';
import { Container } from './Typography/Container';
import { CoolButton } from './Typography/CoolButton';

const SignInContainer = styled(Container)`
  left: 0;
  width: 50%;
  z-index: 2;
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
`;

const SignIn = ({ selected }) => (
  <SignInContainer>
    <FormStyles action="#">
      <TitleStyles>Sign In</TitleStyles>
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
      <SpanStyles>
        or use your account
      </SpanStyles>
      <InputStyles type="email" placeholder="email" />
      <InputStyles type="password" placeholder="password" />
      <AnchorStyles href="#">
        Forgot your password?
      </AnchorStyles>
      <CoolButton>Sign In</CoolButton>
    </FormStyles>
  </SignInContainer>
);

export default SignIn;
