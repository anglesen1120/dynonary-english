import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(5,1fr)',
    height: 'calc(100vh - 18rem)',
    gridGap: '0.8rem',

    maxWidth: '576px',
    margin: '0 auto',
    position: 'relative',

    '& > div': {
      width: '100%',
      height: '100%',
      borderRadius: 'var(--border-radius)',
      overflow: 'hidden',

      '&:first-child': {
        gridColumn: '1/2',
        gridRow: '1/3',
      },

      '&:nth-child(2)': {
        gridColumn: '2/3',
      },

      '&:nth-child(4)': {
        gridColumn: '1/3',
      },

      '&:nth-child(6)': {
        gridColumn: '1/2',
      },

      '&:nth-child(7)': {
        gridColumn: '2/3',
        gridRow: '4/6',
      },
    },
  },
}));
