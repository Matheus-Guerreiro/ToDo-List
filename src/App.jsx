import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

import GlobalStyles from "./globalStyles";
import * as C from "./styles";
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from "./styles";
import Svg from "./assets/Checklist-pana.svg";
import { ligthTheme, darkTheme } from "./theme";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");
  const [theme, setTheme] = useState("ligth");

  const themeToggler = () => {
    theme === "ligth" ? setTheme("dark") : setTheme("ligth");
  };

  const inputValue = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }]);

      const campo = document.querySelector("input");
      campo.value = "";

      setTask(0);


      return campo;
    } else {
      toast.warning("Escreva uma tarefa.");
    }
  };

  const endTask = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );

    setList(newList);
  };

  const deleteTask = (id) => {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  };

  return (
    <>
      <ThemeProvider theme={theme === "ligth" ? ligthTheme : darkTheme}>
        <GlobalStyles />
        <C.Container>
          <CheckBoxWrapper>
            <CheckBox
              onChange={() => themeToggler()}
              id="checkbox"
              type="checkbox"
            />
            <CheckBoxLabel htmlFor="checkbox" />
          </CheckBoxWrapper>
          <h1 className="title">To-Do List</h1>
          <img src={Svg} />
          <C.Header>
            <C.Input
              id="input"
              onChange={inputValue}
              placeholder="O que você tem para fazer ?"
            />
            <C.Button onClick={addTask}>Adicionar</C.Button>
          </C.Header>
          <C.Grid>
            <ul>
              {list.map((item) => (
                <C.ListItem isFinished={item.finished} key={item.id}>
                  <C.Check onClick={() => endTask(item.id)} />
                  <li>{item.task}</li>
                  <C.Trash onClick={() => deleteTask(item.id)} />
                </C.ListItem>
              ))}
            </ul>
          </C.Grid>
        </C.Container>
      </ThemeProvider>
    </>
  );
}

export default App;
