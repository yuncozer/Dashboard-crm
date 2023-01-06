import React from 'react'
import DateObject from "react-date-object";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { RiDownload2Fill } from "react-icons/ri";

export const Home = () => {
  
  // Take the date 
  const date = new DateObject();
  const today = date.format("DD/MM/YYYY");
  // Take a screenshot and dowloand pdf
  const exportPDF = () => {
    const input = document.getElementById("body") 
    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save("prueba.pdf")
    })
}


  return (
    <div id='Page'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-8'>
        {/* card */}
          <div className=''>
            <div className='flex flex-col gap-2 items-center justify-center py-4 rounded-xl bg-secondary-100'>
              <img src="https://pbs.twimg.com/profile_images/1500923494665797632/VytKgxOP_400x400.jpg"
                    alt="Logo Hubspot"
                    className='w-12 h-12 object-cover rounded-full'
                />
              <span className='font-bold text-sm mb-4'>
                CRM from Hubspot
              </span>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col items-center'>
                  <h3>Date</h3>
                  <span className='text-primary'>{today}</span>
                </div>
                <div className='flex items-center'>
                  <button onClick={ () => exportPDF() }  className='flex flex-col items-center rounded-lg px-2 py-1 hover:bg-secondary-900 transition-colors'
                        to='/'>
                      <span>Domwload View</span>
                      <RiDownload2Fill    className='text-primary'/>
                  </button>
                </div>
              </div>
            </div>
          </div>


      </div>
    </div>
  )
}
