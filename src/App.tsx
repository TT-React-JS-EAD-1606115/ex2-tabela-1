import React from "react";
import { ListItem } from "./components/ListItem";
import "./App.css";

export interface Course {
  name: string;
  description: string;
  instructor: string;
  id: number;
}

const courses: Course[] = [
  {
    id: 456,
    name: "React JS",
    description: "Curso de React JS com Typescript",
    instructor: "Luciel Santos",
  },
  {
    id: 453,
    name: "JS e CSS Pro",
    description: "Curso de JS e CSS Pro JS",
    instructor: "Sabino",
  },
  {
    id: 78,
    name: "Typescript",
    description: "Utilizando o Typescript",
    instructor: "Luciel Santos",
  },
  {
    id: 35,
    name: "Node JS",
    description: "Node JS para backend",
    instructor: "Cicero",
  },
  {
    id: 745,
    name: "Banco de Dados",
    description: "Banco de dados com SQL",
    instructor: "Cicero",
  },
];

function App() {
  return (
    <div className="container">
      <h1>Tabela de cursos</h1>

      <ol>
        {courses.map((course, index) => (
          <ListItem course={course} key={course.id} />
        ))}
      </ol>
    </div>
  );
}

export default App;
