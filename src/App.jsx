import React, { Component } from 'react';

// Components
import SignUp from './SignUp';
import SignIn from './SignIn';
import OverlayComponent from './Overlay';

// Typography
import { GlobalStyles } from './Typography/GlobalStyles';
import { Container } from './Typography/Container';

class App extends Component {
  state = {
    selected: null,
  }

  handleSignInClick = () => {
    this.setState({ selected: false });
  }

  handleSignUpClick = () => {
    this.setState({ selected: true });
  }

  render() {
    const { selected } = this.state;

    return (
      <Container>
        <GlobalStyles />
        <SignUp selected={selected}/>
        <SignIn selected={selected}/>
        <OverlayComponent
          selected={selected}
          handleSignUpClick={this.handleSignUpClick}
          handleSignInClick={this.handleSignInClick}
        />
      </Container>
    );
  }
}

export default App;
