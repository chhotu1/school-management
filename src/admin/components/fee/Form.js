import React from 'react'
class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        
    }

    render(){
        const { handleChange, fee,formErrors } = this.props;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Name" name="title" onChange={handleChange} value={fee.title ? fee.title : ''} />
                            {formErrors?.title ? ( <div className="error">{formErrors?.title}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Amount</label>

                            <input type="text" className="form-control" placeholder="amount" name="amount" onChange={handleChange} value={fee.amount ? fee.amount : ''} />
                            {formErrors?.amount ? ( <div className="error">{formErrors?.amount}</div> ) : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
