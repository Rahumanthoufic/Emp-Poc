import react from 'react';
import './MasterData.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
//   const rows = [
//     {name :'Frozen yoghurt', calories:159, fat:6.0, carbs:24, protein:4.0},
//     {name :'Ice cream sandwich', calories:237, fat:9.0, carbs:37, protein:4.3},
//     {name :'Gingerbread', calories:356, fat:16.0, carbs:49, protein:3.9}
//   ];
  
 function Datatable(parms) {
    
    function handleClick(e){
      console.log(e);
    };


    const rows = parms.items;
    return (
      <TableContainer component={Paper} class='table'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead >
            <TableRow>
              <TableCell className='tableCell'>Product&nbsp;Id</TableCell>
              <TableCell className='tableCell'>Product</TableCell>
              <TableCell className='tableCell'>Brand</TableCell>
              <TableCell className='tableCell'>Category</TableCell>
              <TableCell className='tableCell'>Price</TableCell>
              <TableCell className='tableCell'>Discount&nbsp;%</TableCell>
              <TableCell className='tableCell'>Rating</TableCell>
              <TableCell className='tableCell'>Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                onClick = {handleClick}
              >
                <TableCell className='tableCell'>{row.id}</TableCell>
                <TableCell className='tableCell'>
                  <div className = 'cellWrapper'>
                    <img src={row.thumbnail} alt="" className='image'/>
                    {row.title}
                  </div>
                </TableCell>
                <TableCell className='tableCell'>{row.brand}</TableCell>
                <TableCell className='tableCell'>{row.category}</TableCell>
                <TableCell className='tableCell'>{row.price}</TableCell>
                <TableCell className='tableCell'>{row.discountPercentage}</TableCell>
                <TableCell className='tableCell'>{row.rating}</TableCell>
                <TableCell className='tableCell'>{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

export default Datatable;