import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export default function AppLoader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{ color : 'white'}}/>
    </div>
  );
}