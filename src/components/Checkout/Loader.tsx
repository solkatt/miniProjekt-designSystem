import React, { CSSProperties } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function Loader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div style={loaderStyle}>
      <CircularProgress />
      </div>
    </div>
  );
}

const loaderStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:  'center',
    alignContent: 'center',
  }
