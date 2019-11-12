import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1200,
      height: 600,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

const tileData = [
  {
    title: 'stat1',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat2',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat3',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat4',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat5',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat6',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat7',
    value: 1234,
    units: 'units'
  },
  {
    title: 'stat8',
    value: 1234,
    units: 'units'
  }
];

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4}>
        {tileData.map(tile => (
          <GridListTile>
            <GridListTileBar
              title={tile.title}
              titlePosition='top'
              subtitle={<span>{tile.value}</span>}
            />
            <caption>{tile.units}</caption>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}