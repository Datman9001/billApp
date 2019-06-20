
import React, { Component } from 'react';
import Nav from './components/bills/Nav';
import Bills from './components/bills/Bills';
import Addbills from './components/bills/Addbills';
import Menu from './components/bills/Menu';
import update from 'immutability-helper';
import './App.css';
import { all } from 'q';

 
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      addBillOpen: false,
      allBills:[{bill_name:'geico', amount: 50, status: 'unpaid'}] 
    } 
  }

  
  // opens form for to add a new bill
  addBill = () => {
    
        this.setState({
          addBillOpen: !this.state.addBillOpen
          
        })
       
        
        
        
  }

  
  // put new bill inside of array
  saveBill = bill => {
    const newBill = update(this.state.allBills,{
      $push: [bill]
    })
    this.setState({
      allBills: newBill,
      addBillOpen: !this.state.addBillOpen,
     
    })

    

     
  }

  // method for checking bill is paid
  billStatus = billIndex => {
    const bill = this.state.allBills;
    const status = bill[billIndex];
    if(status.status == 'unpaid'){
      status.status = 'paid';
    } else{
      status.status = 'unpaid';
    }
    const newState = update(this.state, {
      allBills: {
        $set: bill
      }
    });

    this.setState(newState)
  
  }

  // method to delete the bill
  deleteBill = billIndex => {
     const allBills = this.state.allBills;
     allBills.splice(billIndex, 1);
     const newState = update(this.state, {
      allBills: {
        $set: allBills
      }
    });

    this.setState(newState)
  }

  
   render(){
     return(
       <div className='bg-color head'>
       <Addbills 
        addBillOpen={this.state.addBillOpen} 
        saveBill={this.saveBill} 
       />
       <Nav/>
       <Bills 
       allBills={this.state.allBills} 
       billStatus={this.billStatus}
       deleteBill={this.deleteBill}
        />
       <Menu 
       addBill={this.addBill}

       />
       </div> 
       
       
       
      
     )
     
   }
   
   
}

 

export default App;

 
