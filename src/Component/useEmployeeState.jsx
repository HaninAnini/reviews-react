import {useEffect, useState} from 'react';

const UseEmployeeState = () => {
  const [employees, setEmployees] = useState([])
  const [employee, setEmployee] = useState()
  const [index, setIndex] = useState(0)

  const onClickNext = () => {
    const cIndex = (index + 1) % employees.length
    setIndex(cIndex);
    setEmployee(employees[cIndex]);
  }

  const onClickPrev = () => {
    const cIndex = index <= 0 ? employees.length - 1 : index - 1;
    setIndex(cIndex)
    setEmployee(employees[cIndex]);
  }

  useEffect(() => {
    fetch("http://localhost/company")
      .then(response => response.json())
      .then(data => {
        setEmployees(data)
        setEmployee(data[0]);
      });


  }, []);


  const onClickSurprise = () => {
    const cIndex = Math.floor(Math.random() * employees.length);
    setIndex(cIndex);
    setEmployee(employees[cIndex]);
    console.log(cIndex);
  }

  return ({
    employee,
    onClickNext,
    onClickPrev,
    onClickSurprise,
  });
};

export default UseEmployeeState;