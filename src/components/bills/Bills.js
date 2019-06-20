import React, { Component } from 'react';
import Allbills from './Allbills';


export default class Bills extends Component {
constructor(props) {
super(props)

this.state = {

 }
}

billTotal = () => {
    const bills = this.props.allBills;
    let total = 0;

    for(var i = 0; i < bills.length; i++){
        total += parseInt(bills[i].amount);
    }

    if(bills.length > 0){
        return total;
    } else{
        return 0;
    }     
}

render() {
return (

<div className="container">
    <div className="row center">
        <div className="col s12">
            <section className='billApp-container'>
                <div className="total white-text">Total Amount: </div>
                <div className="number main-number white-text">$: {this.billTotal()}</div>
            </section>
        </div>


        <div className="col s12 ">
            <div className="card center z-depth-5">
                <div className="card-content">
                    <span className="card-title">Expenses</span> 
                    <Allbills 
                    allBills={this.props.allBills}
                    billStatus={this.props.billStatus} 
                    deleteBill={this.props.deleteBill}
                    />
                </div>
             </div>
         </div>
     </div>
</div>

    )
  }
}