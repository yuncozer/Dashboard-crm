import React from 'react'
import { RiBuildingLine } from "react-icons/ri";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";

  const statisticsCardsData = [
    {
      color: "blue",
      icon: RiBuildingLine,
      title: "Today's Money",
      value: "$53k",
      footer: {
        color: "text-green-500",
        value: "+55%",
        label: "than last week",
      },
    },
  ];

export const CardStatitics = (statisticsCardsData) => {
  return (
    <div className='mt-4'>
        {/* <div className=''>
                <RiBuildingLine className='text-6xl  bg-purple-500/10 text-purple-500 p-2 box-content rounded-xl
                absolute -mt-4 grid h-16 w-16 place-items-center'/>
        </div> */}
        <Card className="bg-secondary-100">
      <CardHeader
        variant="gradient"
        color="purple"
        className="absolute -mt-4 grid h-16 w-16 place-items-center">
        <RiBuildingLine className='text-4xl'/>
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-white">
        Today's Money
        </Typography>
        <Typography variant="h4" color="light-green">
        +55%
        </Typography>
      </CardBody>
        <CardFooter className="border-t border-blue-gray-50 p-4" >
            <Typography className="text-green-500">
            +55% than last week
            </Typography>
        </CardFooter>
      
      
    </Card>
    </div>
    
  )
}
