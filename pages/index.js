
import {SliderImages} from '../src/web-app/components'
import { useSelector, useDispatch } from 'react-redux';
import { decrement,increment } from '../src/redux/reducers/counterSlice';
export default function Index() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
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
