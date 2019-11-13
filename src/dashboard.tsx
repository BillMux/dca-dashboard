import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import performance from './Performance.json';

import './style/dashboard.css';

const data = performance.data;

function Dashboard() {
  return (
    <div className='dashboard'>
      <GridList cols={4} spacing={2}>
        {data.map(tile => (
          <GridListTile className='gridTile'>
            <h2>{tile.title}</h2>
            <h1>{tile.value}</h1>
            <em>{tile.units === null ? null : `(${tile.units})`}</em>
            <h6>{tile.expected === null ? null : `Expected: ${tile.expected}`}</h6>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Dashboard;