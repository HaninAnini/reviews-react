import React from 'react';
import useEmployeeState from "./useEmployeeState";
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Employee = () => {
  const {employee, onClickNext, onClickPrev, onClickSurprise} = useEmployeeState();

  return (
    <div className={"card"}>

      <section className={"employee"}>
        <div className={"img-container"}>
          <img className={"employee-img"} src={employee?.img} alt={employee?.name}/>
          <span className={"quote-icon"}><FaQuoteRight/></span>
        </div>

        <h3 className={"employee-name"}>{employee?.name}</h3>
        <h4 className={"employee-job"}>{employee?.job}</h4>
        <p className={"employee-info"}>{employee?.info}</p>
      </section>

      <div className={"nav-buttons"}>
        <button className={"prev-button"} type={"button"} onClick={onClickPrev}><FaChevronLeft/></button>
        <button className={"next-button"} type={"button"} onClick={onClickNext}><FaChevronRight/></button>
      </div>

      <button className={"surprise-button"} type={"button"} onClick={onClickSurprise}>Surprise Me</button>

    </div>
  );
};

export default Employee;