import React, {Component} from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { BiSearch, BiUpArrowAlt } from "react-icons/bi";
import { PiHandWavingBold } from "react-icons/pi";
import { AiOutlineArrowDown } from "react-icons/ai";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Bar } from "react-chartjs-2";
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import {View, Image, StyleSheet} from 'react-native';



export default class Content extends Component {

    handleChange = (event) => {
        this.setState({selectValue: event.target.value}, ()=> {});
        } 
    
    render(){
        const data =[
            {"name":"test1", "stocks":"32", "price": "45.99", "total":"20", "description":"wqew dasd asdda dff"},
            {"name":"test2", "stocks":"32", "price": "45.99", "total":"20", "description":"wqew dasd asdda dff"},
            {"name":"test3", "stocks":"32", "price": "45.99", "total":"20", "description":"wqew dasd asdda dff"},
            {"name":"test4", "stocks":"32", "price": "45.99", "total":"20", "description":"wqew dasd asdda dff"}
        ];
        
        
        //   const options = {
        //     responsive: false,
        //     scales: {
        //       xAxes: [
        //         {
        //           gridLines: {
        //             display: true,
        //             drawBorder: false,
        //             borderDash: [3, 3],
        //             zeroLineColor: "blue"
        //           },
        //           categoryPercentage: 0.7,
        //           barPercentage: 0.9,
        //           ticks: {
        //             beginAtZero: true
        //           }
        //         }
        //       ],
        //       yAxes: [
        //         {
        //           display: false,
        //           gridLines: {
        //             display: false,
        //             zeroLineColor: "transparent"
        //           },
        //           ticks: {
        //             beginAtZero: true
        //           }
        //         }
        //       ]
        //     }
        //   };


        return (
            <div style={{ padding: '5vh 20vh', backgroundColor:'rgb(236, 234, 234)',}} >

                <div style={{ alignContent: 'space-between', display:'flex'}}>
                    <p style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '30px', alignItems:'flex-start'}}>Hello Anurag <PiHandWavingBold sx={{ color: 'action.active', }} />,</p>
                    <Box sx={{ alignItems: 'flex-end', display: 'inline-block', marginLeft: '65%'}}>
                        <TextField 
                            id="outlined-multiline-flexible" 
                            // label="Search" 
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><BiSearch sx={{ color: 'action.active', }} /></InputAdornment>,
                              }}
                              placeholder='Search'
                              style={{ backgroundColor: 'white' }}
                            />
                    </Box>

                </div>
                
                <div className='contentContainer' style={{ }}>
                    <div className='earning-container' >
                        <div className='container-content'>
                            <div className='content-icon'>
                                <div className="circle">
                                    <FaPencilAlt size="50px" color="yellow" style={{ padding: '25px'}}/>
                                </div>
                            </div>
                            <div className='content-data'>
                                <p>Earning</p>
                                <p>$198K</p>
                                <p><BiUpArrowAlt color="green" style={{}}/> 37.8% this month</p>
                            </div>
                        </div>
                    </div>
                    <div className='earning-container' >
                        <div className='container-content'>
                            <div className='content-icon'>
                                <div className="circle">
                                <FaPencilAlt size="50px" color="yellow" style={{ padding: '25px'}}/>
                                </div>
                            </div>
                            <div className='content-data'>
                                <p>Orders</p>
                                <p>$2.4K</p>
                                <p><AiOutlineArrowDown color="red" style={{ }}/> 2% this month</p>
                            </div>
                        </div>
                    </div>
                    <div className='earning-container' >
                        <div className='container-content'>
                            <div className='content-icon'>
                                <div className="circle">
                                <FaPencilAlt size="50px" color="yellow" style={{ padding: '25px'}}/>
                                </div>
                            </div>
                            <div className='content-data'>
                                <p>Balance</p>
                                <p>$2.4K</p>
                                <p ><AiOutlineArrowDown color="red" style={{ }}/> 2% this month</p>
                            </div>
                        </div>
                    </div>
                    <div className='earning-container' >
                        <div className='container-content'>
                            <div className='content-icon'>
                                <div className="circle">
                                <FaPencilAlt size="50px" color="yellow" style={{ padding: '25px'}}/>
                                </div>
                            </div>
                            <div className='content-data'>
                                <p>Total Sales</p>
                                <p>$89K</p>
                                <p><BiUpArrowAlt color="green" style={{ }}/> 11% this month</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{  }}>
                    <div style={{ display: 'inline-block', backgroundColor:'white', borderRadius: '5%' }}>
                        <div style={{ padding:'2vh'}}>
                            <div style={{ display: 'inline-block', }}>
                                <p style={{ fontSize: '20px'}}><b>Overview</b></p>
                                <p style={{ fontSize: '20px'}}><b>Monthly Earning</b></p>
                            </div>
                            <select style={{ display: 'inline-block', height: '5vh', width:'15vh', borderRadius:'15%', marginLeft: '50%'}} onChange={this.handleChange}  id="Time">
                                <option value="red">Yearly</option>
                                <option value="green">Half-yearly</option>
                                <option value="blue">Quarterly</option>
                            </select>
                            
                        </div>
                        <BarChart style={{ display: 'inline-block' }}
                            xAxis={[
                                {
                                id: 'barCategories',
                                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                                scaleType: 'band',
                                barPercentage: 0.8,
                                gridLines: {color: "white", zeroLineColor: "transparent"}
                                //   drawBorder:,
                                },
                            ]}
                            yAxis={[
                                {
                                display: false,
                                gridLines: {
                                    display: false,
                                    // zeroLineColor: "transparent"
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                                }
                            ]}
                            leftAxis={null}
                            //   bottomAxis={null}
                            series={[
                                {
                                data: [5, 4, 8, 5, 6, 3, 6, 8, 7, 6, 5, 7],
                            
                                },
                            ]}
                            width={700}
                            height={400}
                        />
                    </div>
                    
                    <div  style={{ display: 'inline-block', backgroundColor:'white', borderRadius: '5%', marginLeft: '5vh' }}>
                        <div style={{padding:'2vh'}}>
                            <p style={{ fontSize: '20px', fontWeight: 'bolder'}}>Customers</p>
                            <p style={{ fontSize: '20px', fontWeight: 'bolder'}}>Customers that buy products</p>
                        </div>
                        <PieChart style={{ display: 'inline-block', verticalAlign: 'middle' }}
                            series={[
                                {
                                data: [ 
                                    { id: 0, value: 20, color: 'pink'},
                                ],
                                innerRadius: 80,
                                outerRadius: 150,
                                startAngle: 0,
                                endAngle: 61,
                                cx: 200,
                                cy: 200,
                                },
                                {
                                    data: [ 
                                        { id: 1, value: 40, color: 'indigo'},
                                    ],
                                    innerRadius: 90,
                                    outerRadius: 140,
                                    startAngle: 60,
                                    endAngle: 230,
                                    cx: 200,
                                    cy: 200,
                                    },
                                {
                                        data: [ 
                                            { id: 2, value: 40, color: 'grey'},
                                        ],
                                        innerRadius: 100,
                                        outerRadius: 130,
                                        startAngle: 230,
                                        endAngle: 360,
                                        cx: 200,
                                        cy: 200,
                                        }
                            ]}
                            width={400}
                            height={400}
                        />
                    </div>
                    
                    {/* <Bar data={data} options={options} /> */}
                </div>

                <div style={{ backgroundColor: 'white', margin: '1vh', padding: '2vh'}}>
                    <div tyle={{ display: 'inline-block', verticalAlign: 'middle'}}>
                        <div style={{ alignContent: 'space-between'}}>
                            <p style={{ display: 'inline-block', verticalAlign: 'middle', fontSize: '30px', }}>Product Sell</p>
                            <Box sx={{ alignItems: 'flex-end', display: 'inline-block', marginLeft: '40%'}}>
                                <TextField 
                                    id="outlined-multiline-flexible"    
                                    // label="Search" 
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><BiSearch sx={{ color: 'action.active', }} /></InputAdornment>,
                                    }}
                                    placeholder='Search'
                                    style={{ backgroundColor: 'white' }}
                                    />
                            </Box>
                            <Box style={{ display: 'inline-block'}}>
                                <select style={{ display: 'inline-block', marginLeft: '50px', height: '5vh', width:'20vh'}} onChange={this.handleChange}  id="Time">
                                    <option value="red">7 days</option>
                                    <option value="green">15 days</option>
                                    <option value="blue">30 days</option>
                                </select>
                            </Box>

                        </div>
                    </div>
                    

                    <div>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th  style={{ padding: '1vh' }}>Product Name</th>
                                <th style={{ padding: '1vh'}}>Stock</th>
                                <th style={{ padding: '1vh'}}>Price</th>
                                <th style={{ padding: '1vh' }}>Total Sales</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(function(d, idx){
                                    return (
                                        <tr style={{ alignContent: 'space-between',height: '80px' }}>
                                            <td colSpan={6} style={{ display: 'inline-flex'}}>
                                                <i style={{ display: 'inline-block' }}></i>
                                                <div style={{ display: 'inline-block' }}>
                                                    <p>{d.name}</p>
                                                    <p>{d.description}</p>
                                                </div>
                                            </td>
                                                <td style={{ padding: '1vh'}}>{d.stocks} in stock</td>
                                                <td  style={{ padding: '1vh'}}>$ {d.price}</td>
                                                <td  style={{ padding: '1vh' }}>{d.total}</td>
                                        </tr>
                                   
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                    
                </div>
            </div>
        )
    }
}