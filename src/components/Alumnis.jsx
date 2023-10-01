import React from "react";
import Alumni from "./Alumni";

const Alumnis = () => {
  const DummyAlumniData = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
    {
      name: "John Doe",
      email: "john.doe@example.com",
      course: "Computer Science",
      batch: "2020",
    },
  ];
  return (
    <>
      <h3 className="text-3xl font-bold text-center my-5">Daftar Alumnni</h3>
      <div className="grid grid-cols-5 place-content-center place-items-center gap-4 p-4">
        {DummyAlumniData.map((item, index) => (
          <Alumni
            name={item.name}
            batch={item.batch}
            course={item.course}
            email={item.email}
          />
        ))}
      </div>
    </>
  );
};

export default Alumnis;
