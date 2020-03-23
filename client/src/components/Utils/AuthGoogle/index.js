import React, { Component } from 'react';
import { Button } from '@material-ui/core/';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FaGoogle } from 'react-icons/fa';
import { connect } from 'react-redux';
import { signIn, signOut } from '../../../redux/actions';
class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '48714471304-957nn65pc42k17f7ifmv3c5filvsbcov.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    const currentUser = this.auth.currentUser.get().getId();
    if (isSignedIn) {
      this.props.signIn(currentUser);
    } else {
      this.props.signOut();
    }
  };

  signInHandler = () => {
    this.auth.signIn();
  };

  signOutHandler = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <CircularProgress />;
    } else if (this.props.isSignedIn) {
      return (
        <Button
          variant="contained"
          color="secondary"
          className="google_button"
          onClick={this.signOutHandler}
        >
          <FaGoogle />
          <span style={{ paddingLeft: '4px' }}>Sign Out</span>
        </Button>
      );
    }
    return (
      <Button
        variant="contained"
        color="primary"
        className="google_button"
        onClick={this.signInHandler}
      >
        <FaGoogle />

        <span style={{ paddingLeft: '4px' }}>Sign In</span>
      </Button>
    );
  }
  render() {
    return <div style={{ marginLeft: '10px' }}>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
