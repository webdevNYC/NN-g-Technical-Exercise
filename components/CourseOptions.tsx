import React, { useState } from "react";
import { CourseCardType } from "../interfaces";
import CourseCard from "./CourseCard";
import FavoriteButton from "./FavoriteButton";
type CourseOptionsProps = {
  courseId: number;
  items: CourseCardType[];
};

const CourseOptions: React.FC<CourseOptionsProps> = ({ courseId, items }) => {
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const alertMsg = `Enrolled in Course Id: ${courseId} at the Class Id: ${selectedCourse}`;
    alert(alertMsg);
    // Further processing like an API call to enroll in the course
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div className="px-8 py-6 flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className='self-stretch bg-white rounded-2xl flex flex-col justify-center items-center gap-6'>
        <div className='text-4xl font-semibold leading-10'>
          Course Dates
        </div>
        {items.map((item, index) => (
          <CourseCard course={item} key={index} onChange={handleRadioChange} />
        ))}
        <button
          type='submit'
          className='w-[452px] lg:w-[452px] sm:w-[260px] py-2 text-slate-50 bg-primary-60 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-2xl font-bold  leading-loose focus:bg-primary-40 focus:border focus:border-primary-20 hover:bg-primary-40'>
          Enroll in Course
        </button>
      </form>
      <FavoriteButton courseId={courseId} />
    </div>
  );
};

export default CourseOptions;
