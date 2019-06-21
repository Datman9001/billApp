import React, { Component } from 'react'

export default class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
        <footer id='floatingMenu'>
            <div className="links">
                <div className="icon"><i className='material-icons medium'>credit_card</i></div>
                <div className="text">bills</div>
            </div>
            <div className="links">
                <div className="icon"><i className='material-icons medium'>attach_money</i></div>
                <div className="text">save</div>
            </div>
            <div className="links">
                <div className="icon"><i className='material-icons medium'>schedule</i></div>
                <div className="text">schedule</div>
            </div>
            
            <div className="links">
            
            <a className="btn-flat "><i className="large material-icons" onClick={this.props.addBill}>add</i></a>
            </div>
            
              

        </footer>
            
        )
    }
}
