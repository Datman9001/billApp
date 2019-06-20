import React, { Component } from 'react'

export default class Allbills extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    showAllBill = () => {
        const bills = this.props.allBills;
        if(bills.length > 0){
            return bills.map((bill, index) => {
                return  <section className={`billApp-list ${bill.status == 'paid'?'bill-paid': ''}` }key = {index}>
                <div className='billApp-info'>  
                    <div className="company"><span>company: </span> {bill.bill_name}</div>
                    <div  className="number">$: {bill.amount}</div>  
                
                </div>
                 <div className='billApp-btn'>
                 <button className="btn green paid" onClick={this.props.billStatus.bind(null,index)}><i className="material-icons bill-icons check">check</i></button>
                <button className="btn red" onClick={this.props.deleteBill.bind(null, index)}><i className="material-icons bill-icons delete">delete</i></button>

                 </div>
                
                
                </section>
          
    
            })
        } else{
            return <h5>You have no current bills</h5>
        }
       
    }
    
    render() {
        return (
            <div >
           
            <div className='bill-section'></div>
            <ul className='bill-list'>
            {this.showAllBill()}
            </ul>
             
            
         </div>
        )
    }
}


