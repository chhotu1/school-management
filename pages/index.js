
import {SliderImages} from '../src/web-app/components'
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { decrement,increment } from '../src/redux/reducers/counterSlice';
import { setAuthDefaults } from '../src/redux/actions/AuthActions';
import { useEffect } from 'react';
const Index=(props)=> {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
useEffect(()=>{
props.setAuthDefaults();
},[])
  return (
    <>
    <SliderImages/>

    {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
    </>
 
  );
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
	};
  };
  
  const mapDispatchToProps = (dispatch) => {
	return {
		setAuthDefaults: () => dispatch(setAuthDefaults()),
	};
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Index);
