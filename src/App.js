import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Board></Board>
    </div>
  );
}

function Board() {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setplayer] = useState(1);

  useEffect(() => {
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let c of combination) {
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        alert("Player 1 win");
      }
      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        alert("Player 2 win");
      }
      if (marks[c[0]] === 3 && marks[c[1]] === 3 && marks[c[2]] === 3) {
        alert("Player 3 win");
      }
    }
  }, [marks])

  const ChangeMark = (i) => {
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setplayer(player === 1 ? 2 : 1);
    }
    else {
      alert("Plese Click on empty block");
    }

  }
  return (
    <div className='Board'>
      <div>
        <Block mark={marks[0]} position={0} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[1]} position={1} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[2]} position={2} ChangeMark={ChangeMark}></Block>
      </div>
      <div>
        <Block mark={marks[3]} position={3} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[4]} position={4} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[5]} position={5} ChangeMark={ChangeMark}></Block>
      </div>
      <div>
        <Block mark={marks[6]} position={6} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[7]} position={7} ChangeMark={ChangeMark}></Block>
        <Block mark={marks[8]} position={8} ChangeMark={ChangeMark}></Block>
      </div>
    </div>
  )
}
function Block({ mark, ChangeMark, position }) {
  return <div className={`Block mark${mark}`}
    onClick={e => ChangeMark(position)}></div>;

}

export default App;
