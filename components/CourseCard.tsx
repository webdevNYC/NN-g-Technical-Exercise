import React from "react";
import { CourseCardType } from "../interfaces";
import { formatClassSchedule, formatPricingDate } from "../utils/utils";

interface CourseCardProps {
  course: CourseCardType;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const CourseCard: React.FC<CourseCardProps> = ({ course, onChange }) => {

  return (
    <div className='px-6 py-8 bg-white rounded-lg border-2 border-stone-300 flex flex-col justify-start items-start gap-4'>
      <div className='h-6 justify-start items-center gap-2 inline-flex'>
        <div className='p-0.5 rounded-lg flex items-center gap-2.5'>

          <div className="flex items-center">
            <input
              type="radio"
              name="courseSelection"
              value={course.id}
              id={`course-${course.id}`}
              className="form-radio rounded text-sky-600"
              onChange={onChange} // Apply the onChange handler to the radio input
            />
          </div>
        </div>
        <div className='text-pink-950 text-xl font-bold'>Virtual Course</div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex-1'>
          <div className='w-80 pl-8 pr-2 flex-col justify-start items-start gap-4 inline-flex'>
            <div className='self-stretch h-36 flex-col justify-start items-start gap-1 flex'>
              <div className="self-stretch text-black text-3xl font-bold font-['Source Sans Pro'] leading-9">
                {formatClassSchedule(course.dates)}
              </div>
              <div>{course.location.timezone} time</div>
            </div>
            <div className='text-lg leading-normal'>
              <strong>${course.pricing.amount}</strong>{" "}
              {course.pricing.currency} Until{" "}
              {formatPricingDate(course.pricing.valid_until)}
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='mt-2'>
            {course.instructors.map((instructor, index) => (
              <div key={index} className='flex flex-col items-center mt-1'>
                <img
                  src={instructor.portrait_image}
                  alt={`${instructor.first_name} ${instructor.last_name}`}
                  className='w-20 h-20 rounded-full shadow-lg align-middle border-none'
                />
                <div className='text-center'>
                  Instructor: <br />
                  {instructor.first_name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
