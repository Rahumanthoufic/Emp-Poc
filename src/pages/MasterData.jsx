import react from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import './MasterData.css';
import MasterTable from './MasterTable';


function MasterData() {
  return (
    <div>
      <Navbar />
      <div className = 'table-container'>
      <Sidebar />
      <MasterTable />
      </div>
    </div>
  );
}

export default MasterData;
