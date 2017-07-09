import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Label } from './components';

const App = () => {
  return (
    <div>
      <Button bsStyle="primary" href="http://www.baidu.com">Hello</Button>
      <Label color="#f50">hehe</Label>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
