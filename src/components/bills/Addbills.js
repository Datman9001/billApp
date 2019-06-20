import React, { Component } from 'react'

export default class Addbills extends Component {
    constructor(props) {
        super(props) 
        this.state = {  
          status: 'unpaid' 
          }
    }

    billInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
           [name]: value
        })   
      }
    //   send the bill to globalState as and array
      submitBill = e => {
          e.preventDefault(); 
          this.props.saveBill(this.state)
          this.setState({
              bill_name: '',
              amount:0
          })     
      }
      
    render() {
        return (
        <section className={`${this.props.addBillOpen == true ? 'active' : ' '} add-bill row  valign-wrapper grey lighten-3`} >
        
   <form className='col s10 offset-s1 m8 offset-m2' 
   onSubmit={this.submitBill}>
            <div className="card-panel z-depth-4 center">
            <h3>Add Bill</h3>
            <div className="row">
            <div className="input-field col s8 offset-s2">
          <input id="bill_name" 
          type="text" 
          name='bill_name' 
          value={this.state.bill_name}
          onChange={this.billInput}
           />
          <label htmlFor="bill_name">Bill</label>
        </div>
                 
            </div>
            <div className="row">
            <div className="input-field col s8 offset-s2">
          <input id="amount" type="text" name='amount' className="validate"
           value={this.state.amount}  onChange={this.billInput}/>
          <label htmlFor="amount">Amount Due</label>
        </div>
                 
            </div>
             
               
            <button className="btn btn-bill" type="submit"
            name="action">Submit
            <i className="material-icons right">send</i>
             </button>

            </div>
           
          
             
            </form>
            
        </section>
        )
    }
}
