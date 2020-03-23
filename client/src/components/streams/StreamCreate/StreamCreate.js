import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../../redux/actions';
import StreamForm from '../StreamForm';
import { GoRocket } from 'react-icons/go';
import { backgroundStyle } from './styles';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div style={backgroundStyle}>
        <StreamForm
          onSubmit={this.onSubmit}
          icon={GoRocket}
          title={'Create a'}
          buttonTitle={'Create a'}
        />
        ;
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
