import React, { useState } from "react";
import { CourseCardType } from "../interfaces";
import CourseCard from "./CourseCard";
import { BookmarkIcon } from "../utils/icons";
import FavoriteButton from "./FavoriteButton";
type CourseOptionsProps = {
  courseId: number;
  items: CourseCardType[];
};

const CourseOptions: React.FC<CourseOptionsProps> = ({ courseId, items }) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const alertMsg = `Enrolled in Course Id: ${courseId} at the Class Id: ${selectedCourse}`
    alert(alertMsg)
    // Further processing like an API call to enroll in the course
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCourse(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-[536px] px-8 py-6 bg-white rounded-2xl flex flex-col justify-center items-center gap-6'>
        <div className='text-black text-4xl font-semibold leading-10'>
          Course Dates
        </div>
        {items.map((item, index) => (
          <CourseCard course={item} key={index} onChange={handleRadioChange} />
        ))}
        <button type="submit" className='self-stretch px-4 py-2 bg-red-600 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-white text-2xl font-bold font-["Source Sans Pro"] leading-loose'>
          Enroll in Course
        </button>

      </form>
      <FavoriteButton courseId={courseId} />

    </div>
  );
};

export default CourseOptions;
