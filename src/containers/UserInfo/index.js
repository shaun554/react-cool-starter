import React, { Component, PropTypes } from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as action from './action';
import UserCard from '../../components/UserCard';

import styles from './UserInfo.scss';

class UserInfo extends Component {
  // Fetching data method used for both server and client
  static fetchData(dispatch, params) {
    return Promise.all([
      dispatch(action.fetchDataIfNeeded(params.id)),
    ]);
  }

  componentDidMount() {
    const { dispatch, params } = this.props;

    // Fetching data on component loaded
    // the preventing dobule fetching data mechanism
    // is implemented in the action.js
    UserInfo.fetchData(dispatch, params);
  }

  // Prevent the components which with the same props and state are rendered repeatly
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  displayUserCard = () => {
    const { userInfo, params } = this.props;
    const userInfoById = userInfo.get(params.id);

    if (!userInfoById || userInfoById.get('readyState') === action.DATA_REQUESTING) {
      return <p>Loading...</p>;
    }

    if (userInfoById.get('readyState') === action.DATA_FAILED) {
      return <p>Oops, Failed to fetch user info!</p>;
    }

    return <UserCard info={userInfoById.get('info')} />;
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
  params: PropTypes.objectOf(PropTypes.string),
  userInfo: ImmutablePropTypes.map,
};

const mapStateToProps = state => ({ userInfo: state.get('userInfo') });

export default connect(mapStateToProps)(UserInfo);
