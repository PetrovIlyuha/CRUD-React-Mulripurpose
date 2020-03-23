import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../../redux/actions';
import StreamForm from '../StreamForm';
import { GiMeditation } from 'react-icons/gi';
import { backgroundStyle } from './styles';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div style={backgroundStyle}>
        <StreamForm
          initialValues={{
            title: `${title}`,
            description: `${description}`
          }}
          icon={GiMeditation}
          title={'Edit a'}
          buttonTitle={'Edit a'}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
