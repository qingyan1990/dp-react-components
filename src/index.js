import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components';

const App = () => {
  return (
    <div>
      <Button bsStyle="primary">Hello</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
