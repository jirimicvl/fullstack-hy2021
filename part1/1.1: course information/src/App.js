import React from 'react'

// Refactor the code so that it consists of three new components: Header, Content, and Total. 
// All data still resides in the App component, which passes the necessary data to each component using props. 
// Header 
// Content  
// Total 

//Header - takes care of rendering the name of the course, 
const Header = (props) => {
  // const course = props.course
  return (
    <div>
      {props.course}
    </div>
  )
}

//Content - renders the parts and their number of exercises
const Content = (props) => {
  return (
    <div>
      {props.part1} {props.exercises1}
      {props.part2} {props.exercises2}
      {props.part3} {props.exercises3}
    </div>
  )
}

//Total - renders the total number of exercises.
const Total = (props) => {

  return (
    <div>
      {props.total}
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'

  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />

      <Content part1={part1} exercises1={exercises1}    />

      <Content part2={part2} exercises2={exercises2}    />

      <Content part3={part3} exercises3={exercises3}    />

      <Total total = {total}  />
    </div>
  )
}

export default App