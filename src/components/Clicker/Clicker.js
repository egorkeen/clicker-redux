import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  addAction, 
  reduceAction, 
  resetAction 
} from '../../utils/store/store';

function Clicker () {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <section className="clicker">
      <h2 className="clicker__title">На данный момент у вас {count} кликов</h2>
      <div className="clicker__button-container">
        <button onClick={() => dispatch(addAction)} className="clicker__button">+</button>
        <button onClick={() => dispatch(reduceAction)} className="clicker__button">-</button>
        <button onClick={() => dispatch(resetAction)} className="clicker__button">Сбросить</button>
      </div>
    </section>
  );
};

export default Clicker;