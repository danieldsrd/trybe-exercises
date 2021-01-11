const JSX = <h1>Hello JSX!</h1>;

ReactDOM.render(
  JSX,
  document.getElementById('root')
);

const JSX = (
  <div>
    <h1>Hello</h1>
    <p>Olar</p>
    <ul>Third Element
      <li>First</li>
      <li>Sec</li>
      <li>Third</li>
    </ul>
  </div>
)

const JSX = (
  <div>
    {/* A JSX comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

const JSX = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

ReactDOM.render(
  JSX,
  document.getElementById('challenge-node')
)

const JSX = (
  <div className='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
)

const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

const MyComponent = function() {
  return  (
    <div>Daniel</div>
  )
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
         <ChildComponent />
      </div>
    );
  }
};