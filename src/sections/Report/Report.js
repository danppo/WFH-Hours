import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import minutesToHours from '../../functions/minutesToHours';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const Report = ({ details }) => {
  const classes = useStyles();
  // eslint-disable-next-line no-unused-vars
  const [page, setPage] = React.useState(0);
  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  return (
    <Paper className={classes.root}>
      <TableContainer component={Paper}>
        <Table size='small' aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell align='right'>Hours</TableCell>
              <TableCell align='right'>Remaining</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {details.map((details) => (
              <TableRow
                key={details.day}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {details.dayName}
                </TableCell>
                <TableCell align='right'>{minutesToHours(details.hoursDone)}</TableCell>
                <TableCell align='right'>{minutesToHours(details.hoursRemaining)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default Report;
