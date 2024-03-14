import React from "react";
import { CourseCardType } from "../interfaces";
import CourseCard from "./CourseCard";
type CourseOptionsProps = {
  items: CourseCardType[];
};

const CourseOptions: React.FC<CourseOptionsProps> = ({ items }) => {
  console.log(items)

  return (
    <form className='w-[536px] px-8 py-6 bg-white rounded-2xl flex flex-col justify-center items-center gap-6'>
      <div className='text-black text-4xl font-semibold leading-10'>
        Course Dates
      </div>
      {items.map((item, index) => (
        <CourseCard course={item} key={index} />
      ))}
      <button type="submit" className='self-stretch px-4 py-2 bg-red-600 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-bold font-["Source Sans Pro"] leading-loose'>
        Enroll in Course
      </button>
    </form>
  );
};

export default CourseOptions;
