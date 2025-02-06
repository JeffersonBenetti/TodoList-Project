import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, Mask, Main, H1, ListCheck, InButtonBox, Input, Button, BookMark, List, Check, Trash, IsFinishedBox, ElseBox, AddList, H3, H4 } from './styles.js'

function App() {

  const [list, setList] = useState([])
  const [task, setTask] = useState('')

  // Carregar a lista de tarefas do localStorage quando o app for carregado
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('tasks'));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Função para atualizar o localStorage sempre que a lista mudar
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  }, [list]);

  const entryValue = (event) => {
    setTask(event.target.value)
  }

  const addTask = () => {
    if (task.trim()) {
      setList([...list, { id: uuid(), task, finished: false }])
      setTask('')
    }
  }

  const finishTask = (id) => {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  const deleteTask = (id) => {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  const taskFinished = (array) => {
    const newList = array.filter(item => item.finished)

    return newList.length
  }

  // Carregar a lista de tarefas do localStorage quando o app for carregado
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem('tasks'));
    if (storedList) {
      setList(storedList);
    }
  }, []);

  // Função para atualizar o localStorage sempre que a lista mudar
  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(list));
    }
  }, [list]);

  return (
    <Container>
      <Mask></Mask>
      <Main>
        <H1><ListCheck /> Todo-<span>List</span></H1>

        <InButtonBox>
          <Input value={task} onChange={entryValue} placeholder="Adicione uma Tarefa" />
          <Button onClick={addTask}>Criar <BookMark /></Button>
        </InButtonBox>

        <IsFinishedBox>
          <p>Tarefas criadas <span>{list.length}</span></p>
          <p>Concluídas <span>{taskFinished(list)} de {list.length}</span></p>
        </IsFinishedBox>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <List key={item.id} $isFinished={item.finished}>
                  <Check onClick={() => finishTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </List>
              ))
            ) : (
              <ElseBox>
                <AddList />
                <H3>Você ainda não tem tarefas cadastradas</H3>
                <H4>Crie tarefas e organize seus itens a fazer</H4>
              </ElseBox>
            )
          }
        </ul>
      </Main>
    </Container>
  )
}

export default App