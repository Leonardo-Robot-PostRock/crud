import React from 'react';
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import useInitialState from './hooks/useInitialState';
import EditUserForm from './components/EditUserForm';

function App() {
  const { state, stateUpdaters } = useInitialState();

  const {
    users,
    currentUser,
    editing,
  } = state;

  const {
    addUser,
    deleteUser,
    editRowUser,
    updateUser
  } = stateUpdaters;

  return (
    <React.Fragment>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {
              editing ? (
                <div>
                  <h2>Edit user</h2>
                  <EditUserForm
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                <div>
                  <h2>Add user</h2>
                  <AddUserForm addUser={addUser} />
                </div>
              )
            }
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRowUser={editRowUser}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
