import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 85 },
    { name: 'Rohit', score: 40 },
    { name: 'Rahul', score: 65 },
    { name: 'Pant', score: 90 },
    { name: 'Dhawan', score: 50 },
    { name: 'Jadeja', score: 30 },
    { name: 'Ashwin', score: 75 },
    { name: 'Bumrah', score: 60 },
    { name: 'Shami', score: 95 },
    { name: 'Kuldeep', score: 45 },
    { name: 'Surya', score: 100 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {below70.map((p, i) => (
          <li key={i}>{p.name} - {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
