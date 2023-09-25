import React, { useState } from 'react';
import Queue from './lib/Queue';
import './App.css';

const App: React.FC = () => {
  const [queue, setQueue] = useState<Queue>(new Queue());
  
  const add = () => {
    const num = Math.floor(Math.random() * 300) + 1;
    const newQueue = new Queue();
    Object.assign(newQueue, queue);
    newQueue.add(num);
    setQueue(newQueue);
  }

  const remove = () => {
    const newQueue = new Queue();
    Object.assign(newQueue, queue);
    newQueue.pop();
    setQueue(newQueue);
  }
  
  const queueArray = queue.toArray();

  return (
    <div className="App">
      <h1>FIFO Queue Visualization</h1>
      <div className="queue">
        {queueArray.length === 0 ? (
          <p className="text-message">The Queue is Empty</p>
        ) : (
          queueArray.map((num, index, arr) => (
            <div key={index} className={`queue-item ${index === 0 ? 'front' : ''} ${index === arr.length - 1 ? 'end' : ''}`}>
              {num}
            </div>
          ))
        )}
      </div>
      <div className="buttons">
        <button onClick={add}>ADD</button>
        <button onClick={remove}>REMOVE</button>
      </div>
    </div>
  );
}

export default App;