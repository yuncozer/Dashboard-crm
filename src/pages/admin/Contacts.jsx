import React from 'react'
import { RiDownload2Fill } from "react-icons/ri";
import { CardHubspot } from '../../components/CardHubspot';
import CardChart from '../../components/CardChart';
import { CardStatitics } from '../../components/CardStatitics';
import CardChartPie from '../../components/CardChartPie';

export const Contacts = () => {
  
    return (
      <div id='Page'>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* COL 1 Title */}
            <div className='inline-grid grid-cols-3 col-start-1 col-end-4 gap-4'>
              <CardChart/>
              <CardStatitics/>
              <CardStatitics/>
              <CardStatitics/>
              <CardStatitics/>
              <CardStatitics/>
              <CardStatitics/>
              
            </div>
          {/* COL 2  */}
            <div className='inline-grid grid-cols-1 gap-4'>
            <CardHubspot/> 
            <CardChartPie/> 
            </div>
          {/* COL 3 */}
         
          {/* COL 4 */}
         
  
  
        </div>
      </div>
    )
  }
  