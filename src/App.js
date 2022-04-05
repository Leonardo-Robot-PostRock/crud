import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import AppContext from './context/AppContext';
import useInitialState from './hooks/useInitialState';

function App() {
  const initialState = useInitialState();
  
  return (
    <AppContext.Provider value={initialState}>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm />
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
