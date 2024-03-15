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
    // CourseOptions.js
    // Adjust the main container and form elements for better mobile responsiveness
    <div className='md:px-4 md:py-4 py-2 flex flex-col justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md mx-auto bg-white rounded-2xl flex flex-col justify-center items-center gap-4'>
        <div className='text-2xl md:text-4xl font-semibold text-center'>
          Course Dates
        </div>
        {items.map((item, index) => (
          <CourseCard
            course={item}
            key={index}
            onChange={handleRadioChange}
            isSelected={selectedCourse === item.id.toString()}
          />
        ))}
        <button
          type='submit'
          className='w-full px-4 py-2 text-center text-lg sm:text-xl md:text-2xl font-bold text-white bg-primary-60 rounded-md hover:bg-primary-40'>
          Enroll in Course
        </button>
      </form>
      <FavoriteButton courseId={courseId} />
    </div>
  );
};

export default CourseOptions;
