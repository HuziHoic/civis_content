import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

function BatteryPolicy() {
    return ( 
        <div>

            <ul class="nav">
  <li className="nav-item">
    <NavLink className="nav-link" to=''>Read and Respond</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to='discussion'>Discussion Forum</NavLink>
  </li>

            </ul>
            <Outlet/>
        </div>
     );
}

export default BatteryPolicy;