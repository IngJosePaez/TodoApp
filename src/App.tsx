import { Button, Container, TextField } from "@mui/material";
import "./App.css";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  // Estado local para almacenar el valor del campo de texto y las tareas
  const [textValue, setTextValue] = useState<string>(""); // Estado para el valor del campo de texto
  const [tasks, setTasks] = useState<string[]>([]); // Estado para almacenar las tareas
  
  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (textValue?.length < 1) return;// Si la longitud del valor del texto es menor que 1, retorna sin hacer nada
    setTasks([...tasks, textValue]);// Agrega el nuevo valor del campo de texto al estado de tareas
    setTextValue(""); // Limpia el campo de texto
  };

  // Función para eliminar todas las tareas
  const handleRemoveAllTasks = () => {
    setTasks([]);// Establece el estado de las tareas como un arreglo vacío
  };

  // Función para eliminar una tarea específica
  const handleRemoveTask = (index: number) => {
    const currentTasks = tasks; // Obtiene una referencia al arreglo de tareas actual
    const taskToRemove = currentTasks.splice(index, 1);// Remueve la tarea del arreglo
    console.log(taskToRemove);// Imprime la tarea removida en la consola, nada mas a modo de verificar que hace el trabajo de borrar
    setTasks(tasks.filter((task) => task !== taskToRemove[0])); // Actualiza el estado de las tareas, filtrando la tarea removida
  };

  // Aqui va mi Renderizado
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(90deg, rgba(62,55,187,1) 0%, rgba(73,80,255,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <Container
        style={{
          width: "400px",
          height: "550px",
          background: "#ffffff",
          borderRadius: 10,
        }}
      >
        {/* Encabezado de la aplicación */}
        <h2 style={{ fontSize: "30px", fontWeight: "bold" }}>Todo App</h2>
        {/* Campo de entrada de texto para agregar nuevas tareas */}
        <div
          style={{
            height: "55px",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <TextField
            id="outlined-basic"
            label="Add your new todo"
            variant="outlined"
            style={{ height: "100%", width: "90%", padding: 1 }}
            value={textValue}
            onChange={(e) => setTextValue(e.target.value)}
          />
          {/* Botón para agregar nueva tarea */}
          <Button
            variant="contained"
            style={{
              height: "100%",
              width: "10%",
              background: "#990cb5",
              fontSize: 30,
              fontWeight: "bold",
            }}
            onClick={handleAddTask}
          >
            +
          </Button>
        </div>
        {/* Contenedor para mostrar las tareas */}
        <div style={{ height: "320px", overflowY: "auto", marginTop: 20 }}>
            {/* Mapeo de las tareas para mostrarlas */}
          {tasks && tasks.map((task, index) => (  
              <div
                key={index}
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 5,
                  borderRadius: 5,
                  justifyContent: "space-between",
                  background: "#d9d9d9",
                }}
              >
                <p style={{ paddingLeft: 10 }}>{task}</p>
                {/* Botón para eliminar una tarea */}
                <Button 
                  style={{color:'#fff',backgroundColor:'#FF0000'}}
                
                //  className="buttonDelete"
                  onClick={() => handleRemoveTask(index)}
                >
                  <DeleteIcon />
                </Button>
              </div>
            ))}
        </div>
         {/* Contenedor para mostrar el número de tareas pendientes y botón para eliminar todas */}
        <div className="containerTasks">
          <p>You have pending {tasks?.length} tasks</p>
          {/* Botón para eliminar todas las tareas */}
          <Button
            variant="contained"
            style={{
              height: "100%",
              background: "#990cb5",
              fontSize: 12,
              textTransform: "capitalize",
            }}
            onClick={handleRemoveAllTasks}
          >
            Clear all
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
