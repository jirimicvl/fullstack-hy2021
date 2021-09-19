import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'

// Refactor the code so that it consists of three new components: Header, Content, and Total. 
// All data still resides in the App component, which passes the necessary data to each component using props. 
// Header 
// Content  
// Total 


// Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
// Instead it only renders three Part components of which each renders the name and number of exercises of one part.
// const Part = () => {
//   return (
//     <div>
//       {props.part1} {props.exercises1}
//       {/* {props.part2} {props.exercises2}
//       {props.part3} {props.exercises3} */}
//     </div>
//   )
// }



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
      <Header course = {course}/>

      <Content part1={part1} exercises1={exercises1}/>
      <Content part2={part2} exercises2={exercises2} />
      <Content part3={part3} exercises3={exercises3} />

      <Total total = {total}  />
    </div>
  )
}

export default App