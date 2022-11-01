import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// const testData = [{ name: "Marcel", age: 21 }];
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUsersData = (data) => {
    console.log(data);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, data];
    });
  };

  return (
    <div>
      <AddUser onGetUsersData={addUsersData} />
      <UsersList userData={usersList} />
    </div>
  );
}

export default App;
