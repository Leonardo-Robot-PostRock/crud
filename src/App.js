import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';
import EditUserForm from './components/EditUserForm';
import { useContext } from 'react';

function App() {
  const initialState = useInitialState();
  const { editing } = useContext(AppContext);


  return (
    <AppContext.Provider value={initialState}>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <AddUserForm />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
