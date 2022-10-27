import { useState } from "react";

const Header = ({ course }) => {
  console.log(CSSSupportsRule)
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <p>{part} {exercise}</p>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <>
      <Part part={parts[0].name} exercise={parts[0].exercise} />
      <Part part={parts[1].name} exercise={parts[1].exercise} />
      <Part part={parts[2].name} exercise={parts[2].exercise} />
    </>
  )
}

const Total = ({ parts }) => {
  console.log(parts)
  let count = 0
  parts.forEach(part => count += part.exercise)
  return (
    <p>Number of exercises {count}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10,
      },
      {
        name: 'Using props to pass data',
        exercise: 7,
      },
      {
        name: 'State of a component',
        exercise: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
