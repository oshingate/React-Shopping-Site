import React from 'react';
import { render } from 'react-dom';

import Shopping from './components/Shopping';

export default function App() {
  return (
    <>
      <Shopping />
    </>
  );
}

render(<App />, document.getElementById('root'));
