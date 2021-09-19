import React from 'react'

// Refactor the code so that it consists of three new components: Header, Content, and Total. 
// All data still resides in the App component, which passes the necessary data to each component using props. 
// Header 
// Content  
// Total 

//Header - takes care of rendering the name of the course, 
const Header = (props) => {

  const course = props.course
    return (

    <div>
      {course}
    </div>
  )
}

export default Header