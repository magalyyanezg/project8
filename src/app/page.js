'use client'
import  {useEffect, useState, useMemo, useCallback} from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Task from "../app/components/task"


export default function Home() {

  //useSTATE - Hook que permite añadir estado a un componente 
  //Crear unestado local
  let [count, setCount] = useState(0); // => [0, function]  //devuelve un array con dos posiciones =>[state, setState]
  const [todos, setTodos] = useState([
    1,2,3,4,5,6,7,8,9
  ])


  function Increment() {
    setCount(count + 1);
    sessionStorage.setItem("count", count + 1)
  }

  //useMemo - Hook que permite memorizar el resultado de una funcion - memoización
  const countMemo = useMemo(
    //callback
    () =>  {
      return count * 2;
    },
    //depeendencias
    [count]
  )

    //useCallback - Hook que permite memorizar una función
    useCallback(
      //callback
      () => {
        setCount(count + 1)
      },
      //dependencias
      [count]
    )



  //Ejecutar su callback cuando el componente se monta
  //Retorna y ejecuta una función cuando el componente se desmonta
  useEffect(
     //callback
    () => {  
      console.log("Hello word");
      return () => {
        console.log("Goodbye word");
      };
    },
    //dependencias
    []
  )

  useEffect(
    () => {
      //extraer el valor del localStorage
      const value = sessionStorage.getItem("count")
      console.log("value", value)
      if (value) {
        setCount(+value)
      }
    },
    []
  )

  return (
  <div>
    <p>Count:  {count} </p>
    <button onClick= {Increment}>Increment</button>
     {
      todos.map((todo) => {
        return(
          <Task  id= {todo} description="Es una pelicula" tittle="Los tres hermanos" />
        )
      })
     }
  </div>

  );

  //localStorage -> alamacenamiento de datos percistente en el navegador
  //sessionStorage -> almacenamiento temporal en el navegador



}

//estudiar falsy js, truhty, como funciona libreria Day.js



