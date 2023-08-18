import logo from './logo.svg';
import './App.css';
import User from './components/User';
import React from 'react';

// function App() {
//   return (
//     <section>
//       <User married={false} name="Арнольд Шварцнегер" avatar="https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg" />
//       <User married={false} name="Илон Маск" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg" />
//       <User married={true} name="Сильвестер Сталлоне" avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg" />
//     </section>
//   );
// }

// function App() {
//   return (
//     React.createElement(User, { name: "Ivan Ivanov", married: false })
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          name: 'Арнольд Шварцнегер',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Arnold_Schwarzenegger_by_Gage_Skidmore_3.jpg',
          married: false
        },
        {
          id: 2,
          name: 'Илон Маск',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/274px-Elon_Musk_Royal_Society_%28crop2%29.jpg',
          married: false
        },
        {
          id: 3,
          name: 'Сильвестер Сталлоне',
          avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg/220px-Rambo_meets_with_Strategic_Soldier_group_%284%29_%28cropped3%29.jpg',
          married: true
        }
      ]
    }
  }
  render() {
    // const items = this.state.users.map(user => <li key={user.id}>{user.name}</li>)
    const renderUsers = this.state.users.map(({ id, name, avatar, married }) =>
      <li key={id}><User name={name} avatar={avatar} married={married} /></li>)

    return (
      <>
        <h1>Users</h1>
        <ul>{renderUsers}</ul>
      </>
    )
  }
}



export default App;
