const state = {
  messages: [
    {
      type: 'message',
      author: 1,
      text: 'hello'
    }
  ],
  users: [{
    id:1,
    name: 'bob'
  }],
  currentUser: 1
}

const reducers = {
  messages: messagesReducer,
  ...
}

const defaultState = [];
const messageReducer = (state = defaultState, action) {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.payload];
    default:
      return state;
  }
}

const action = {
  type: 'USER_JOINS',
  payload: {
    id: 2,
    name: 'Bill'
  }
}

const usersReducer = (state = [], { type, payload }) => {
  switch(type) {
    case 'USER_JOINS':
      return [...state, payload];
    case 'USER_LEAVES':
      return state.filter(user => user.id != payload.id);
    default:
      return state;
  }
};

const actions = {
  ADD_MESSAGE,
  ADD_NOTIFICATION,
  USER_JOIN,
  USER_LEAVE,
  NAME_CHANGE,
  SEND_MESSAGE
}



@connect((state) => ({ totalUsers: state.users.length }))
class TotalUsers extends Component {
  render () { return <div>{this.props.totalUsers}</div>; }
}

@connect((state) => ({ messages: state.messages }))
class MessageList extends Component {
  render() {
    return (
      <div id="messages">
        {
          this.props.messages.map(message => <Message ...message />)
        }
      </div>
    );
  }
}
