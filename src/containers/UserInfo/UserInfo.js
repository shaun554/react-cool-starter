import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as fetchAnUser from '../../actions/fetchAnUser';
import UserCard from '../../components/UserCard';

import styles from './UserInfo.scss';

class UserInfo extends Component {
  static fetchData = (dispatch, params) => Promise.all([
    dispatch(fetchAnUser.fetchAnUserIfNeeded(params.id)),
  ]);

  componentDidMount() {
    const { dispatch, params } = this.props;

    UserInfo.fetchData(dispatch, params);
  }

  displayUserCard = () => {
    const { anUser, params } = this.props;
    const anUserById = anUser.get(params.id);

    if (!anUserById || anUserById.get('readyState') === fetchAnUser.AN_USER_FETCHING) {
      return <p>Loading...</p>;
    }

    if (anUserById.get('readyState') === fetchAnUser.AN_USER_FETCH_FAILED) {
      return <p>Oops, Failed to fetch the user!</p>;
    }

    return (
      <div>
        <UserCard anUser={anUserById.get('info')} />
      </div>
    );
  }

  render() {
    return (
      <div className={styles.UserInfo}>
        <Helmet title="User Info" />
        {this.displayUserCard()}
      </div>
    );
  }
}

UserInfo.propTypes = {
  dispatch: PropTypes.func,
  params: PropTypes.object,
  anUser: PropTypes.object,
};

const mapStateToProps = state => ({ anUser: state.get('anUser') });

export default connect(mapStateToProps)(UserInfo);
