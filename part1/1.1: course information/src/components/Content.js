// Refactor the code so that it consists of three new components: Header, Content, and Total. 
// All data still resides in the App component, which passes the necessary data to each component using props. 
//Content - renders the parts and their number of exercises

const Content = (props) => {

    return (
      <div>
          {props.part1} {props.exercises1}
          {props.part2} {props.exercises2}
          {props.part3} {props.exercises3}



        {/* <Part />
        <Part />
        <Part /> */}

      </div>
    )
  }

  export default Content
  