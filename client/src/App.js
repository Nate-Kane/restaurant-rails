// import logo from './logo.svg';
import './App.css';
import { Card, Container, Header } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import MenuList from "./MenuList";
import MenuForm from "./MenuForm";
import axios from "axios";


// const dummyData = [
//   {id: 1, name: "pasta" },
//   {id: 2, name: "pizza" },
// ];

function App() {
  const [menus, setMenus] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMenus();
  }, [])

  const getMenus = async () => {
      try {
        let res = await axios.get("/api/menus");
        setMenus(res.data)
    } catch (err) {
        setError(true);
        console.log(err);
    } finally {
        setLoading(false);
    }
  };

  const addMenu = async (menu) => {
    try {
      let res = await axios.post("/api/menus", menu);
      setMenus([...menus, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteMenu = async (id) => {
    try {
      let res = await axios.delete(`/api/menus/${id}`);
      let newMenus = menus.filter((m) => m.id !== id);
      setMenus(newMenus);
    } catch (err) {
      console.log(err);
    }
  };

  const updateMenu = async (id) => {
    console.log("not setup yet")
    // try {
    //   let res = await axios.put(`/api/menus/${id}`);
    //   let newMenus = menus.map((m) =>
    //     m.id !== id ? m : {...m, complete: !m.complete }
    //   );

    //   setMenus(newMenus);
    // } catch (err) {
    //   console.log(err);
    // }
  };

  const renderMenuList = () => {
    if (loading) return <p>loading</p>;
    if (error) return <p>error</p>;
    return (
      <>
        <MenuList
          updateMenu={updateMenu}
          deleteMenu={deleteMenu}
          menus={menus}
        />
        <MenuForm addMenu={addMenu} />
      </>
    );
  };

  return (
    <Container>
      <br/>
      <Header as="h1" textAlign="center" block color="red">Welcome to Italy on Wheels!</Header>
      {renderMenuList()}
    </Container>
  );
}

export default App;
