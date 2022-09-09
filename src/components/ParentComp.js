import React, { useCallback, useState } from "react";
import ClasspureComponent from "../ClasspureComponent";
import ButtonComponent from "./ButtonComponent";
import DataCounter from "./DataCounter";
import Title from "./Title";

const ParentComp = () => {
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(10000);

  //it returns the memoised function
  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <ClasspureComponent />
      <DataCounter count={age} text="age" />
      <ButtonComponent handleClick={incrementAge}>
        Increment Age
      </ButtonComponent>
      <DataCounter count={salary} text="Salary" />
      <ButtonComponent handleClick={incrementSalary}>
        Increment Salary
      </ButtonComponent>
    </div>
  );
};

export default ParentComp;
