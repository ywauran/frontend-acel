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
      <h3 className="my-5 text-3xl font-bold text-center">Daftar Alumnni</h3>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-content-center place-items-center">
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
