import React from 'react'
import { RiDownload2Fill } from "react-icons/ri";
import { CardHubspot } from '../../components/CardHubspot';
import {CardChart} from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import {CardChartPie} from '../../components/CardChartPie';
import { TableList } from '../../components/TableList';

export const AccountManagers = () => {
  
    return (
      <div id='Page'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
         
        <TableList/>
  
        </div>
      </div>
    )
  }
  