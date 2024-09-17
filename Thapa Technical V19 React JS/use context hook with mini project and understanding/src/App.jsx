import "./App.css";
import { Login } from "./components/login";
import { Profile } from "./components/profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h2>Understanding Context API in react js with project</h2>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
