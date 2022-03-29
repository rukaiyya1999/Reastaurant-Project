import React from 'react';
import Restonav from './Restonav'

import {
  Redirect
} from 'react-router-dom'
const Restologout=()=>{
  localStorage.clear();
    return <Redirect to='/login'/>
};

export default Restologout;
