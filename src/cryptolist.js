import React from 'react';
const TableRow = ({ crypto }) => {
  return (
    <tr className='tablerow'>
      <td><img src={crypto.image} alt={crypto.name} style={{ width: '20px', height: '20px' }} / >{crypto.name}</td>
      <td>{crypto.symbol.toUpperCase()}</td>
      <td>${crypto.current_price}</td>
      <td>{crypto.total_volume}</td>
    </tr>
  );
};

export default TableRow;
