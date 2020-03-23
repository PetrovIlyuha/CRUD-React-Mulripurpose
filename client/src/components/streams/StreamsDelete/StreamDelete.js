import React from 'react';
import ModalDeletion from '../../Utils/modal/Modal';
import { Link } from 'react-router-dom';
import history from '../../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../../redux/actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  actions = id => (
    <div className="actions">
      <div
        onClick={() => this.props.deleteStream(id)}
        className="ui negative button"
        style={{ padding: '15px 30px' }}
      >
        Yes
      </div>
      <Link to="/" className="ui button" style={{ padding: '15px 30px' }}>
        No
      </Link>
    </div>
  );

  renderContent() {
    if (!this.props.stream) {
      return 'Delete the Stream titled:';
    }
    return `Delete the Stream titled "${this.props.stream.title}"?`;
  }
  render() {
    const { id } = this.props.match.params;
    return (
      <ModalDeletion
        content={this.renderContent()}
        header="Deletion Approval Screen"
        actions={this.actions(id)}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
