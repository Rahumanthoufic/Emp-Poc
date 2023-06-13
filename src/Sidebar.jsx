import react from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div>
      <div className = 'sidebar'>
        <div>
            <ul className = 'side-menu'>
                <p>MAIN</p>
                <Link to='/' style={{textDecoration : 'none'}}>
                <li className = 'side-menu-item'>
                    <DashboardIcon />
                    <span>Dashboard</span>
                </li>
                </Link>
                <Link to='/teams' style={{textDecoration : 'none'}}>
                <li className = 'side-menu-item'>
                    <SummarizeIcon />
                    <span>Master Data</span>
                </li>
                </Link>
                <p>MORE</p>
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;