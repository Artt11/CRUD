import "./App.css";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UsersList } from "./components/UsersList";
import { useDispatch } from "react-redux";
import { fetchData } from "./fetchData";
import { AddUser } from "./components/AddUser";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="AddUser" element={<AddUser />} />
      </Routes>
    </Router>
  );
}

export default App;
