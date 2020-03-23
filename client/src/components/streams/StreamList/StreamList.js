import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  styledTable,
  styledTableHeader,
  styledTableWrapper,
  styledTableContainer
} from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import { Button } from '@material-ui/core/';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { MdCamera } from 'react-icons/md';
import { MdCameraRoll } from 'react-icons/md';
import { fetchStreams } from '../../../redux/actions/index';
import history from '../../../history';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <TableCell>
          <Link to={`/streams/edit/${stream.id}`}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Edit
            </Button>
          </Link>
          <Link to={`/streams/delete/${stream.id}`}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Link>
        </TableCell>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => (
      <>
        <TableRow key={stream.id} style={{ paddingLeft: '240px' }}>
          <TableCell
            style={{
              fontSize: '1.8rem',
              width: '200px',
              color: 'white'
            }}
          >
            <MdCameraRoll />
            {''}
            <Link
              to={`/streams/${stream.id}`}
              style={{ color: 'palegoldenrod' }}
            >
              {stream.title}
            </Link>
          </TableCell>
          <TableCell
            style={{ fontSize: '1.8rem', color: 'white' }}
            align="right"
          >
            {stream.description}
          </TableCell>
          {this.renderAdmin(stream)}
        </TableRow>
      </>
    ));
  }

  renderCreateButton() {
    if (this.props.isSignedIn) {
      return (
        <Button
          variant="contained"
          content="link"
          style={{
            position: 'absolute',
            top: '90%',
            left: '63%'
          }}
          size="large"
        >
          <Link
            to="/streams/new"
            style={{
              color: 'red',
              fontSize: '1.3rem',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center'
            }}
          >
            <MdCamera />
            {''}
            Create New Stream
          </Link>
        </Button>
      );
    }
  }

  render() {
    return (
      <div style={styledTableWrapper}>
        <Table style={styledTable}>
          <span style={{ fontSize: '2.34rem' }}>All Streams</span>
          <TableContainer component={Paper} style={styledTableContainer}>
            <TableHead style={styledTableHeader} aria-label="simple table">
              <TableRow>
                <TableCell
                  align="center"
                  style={{ color: 'white', fontSize: '2rem' }}
                >
                  Stream Title
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: 'white', fontSize: '2rem' }}
                >
                  Stream Description
                </TableCell>
                <TableCell
                  align="center"
                  style={{ color: 'white', fontSize: '2rem' }}
                >
                  Owner's Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{this.renderList()}</TableBody>
          </TableContainer>
        </Table>
        {this.renderCreateButton()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
