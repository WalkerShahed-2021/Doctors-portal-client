import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Appoinments = ({date, setDate}) => {
    const {user, token} = useAuth();
    const [appoinments, setAppoinments] = useState([]);
    function  withdraw( account, amount ) {
        account.total -= amount;
    }
    console.log(withdraw);

    useEffect(() => {
        const url = `http://localhost:5000/appoinments?email=${user.email}&date=${date.toLocaleDateString()}`;
        fetch(url, {
          headers: {
            'authorization' : `Bearer ${token}`,
          }
        })
        .then(res => res.json())
        .then(data => setAppoinments(data))
    }, [date, user.email]);
    return (
        <div>
            <h1>Appoinments: {appoinments.length}</h1>
            <TableContainer component={Paper}>
      <Table  aria-label="Appoinments Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">service</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.Payment ? 'paid' : 
               <Link to={`dashboard/Payment/${row._id}`}><Button variant='contained'>Pay</Button></Link>
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appoinments;