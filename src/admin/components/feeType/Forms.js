import React from 'react'
class Forms extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        
    }

    render(){
        const { handleChange, feeType,formErrors } = this.props;
        return (
            <div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input type="text" className="form-control" placeholder="Name" name="title" onChange={handleChange} value={feeType.title ? feeType.title : ''} />
                            {formErrors?.title ? ( <div className="error">{formErrors?.title}</div> ) : null}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Amount</label>

                            <input type="text" className="form-control" placeholder="amount" name="amount" onChange={handleChange} value={feeType.amount ? feeType.amount : ''} />
                            {formErrors?.amount ? ( <div className="error">{formErrors?.amount}</div> ) : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forms
