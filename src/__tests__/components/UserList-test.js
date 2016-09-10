import React from 'react';
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import { fromJS } from 'immutable';
import { Link } from 'react-router';
import UserList from '../../components/UserList';

describe('<UserList />', () => {
  it('renders the linkable list item', () => {
    const mockData = fromJS([{ name: 'Welly', id: '1' }]);
    const listItem = (
      <Link to={`UserInfo/${mockData.get(0).get('id')}`}>
        {mockData.get(0).get('name')}
      </Link>
    );
    const wrapper = shallow(<UserList list={mockData} />);

    // eslint-disable-next-line no-unused-expressions
    expect(wrapper.contains(listItem)).to.be.true;
  });
});
