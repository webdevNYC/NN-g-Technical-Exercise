import React, { useState, useEffect } from 'react';
import { BookmarkIcon } from '../utils/icons';

interface FavoriteButtonProps {
    courseId: number;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ courseId }) => {
    const [savedCourses, setSavedCourses] = useState<number[]>([]);

    useEffect(() => {
        // Initially check saved courses
        fetchSavedCourses();
    }, []);

    const fetchSavedCourses = async () => {
        try {
            //const response = await fetch(`/api/profile/saved/courses`);
            const data = []; //await response.json();
            setSavedCourses(data);
        } catch (error) {
            console.error("Failed to fetch saved courses:", error);
        }
    };

    const handleToggleSave = async () => {
        //const method = savedCourses.includes(courseId) ? 'DELETE' : 'POST';
        try {
            //const response = await fetch(`/api/profile/saved/courses/${courseId}`, { method });
            //Force to toggle for the prototype
            let updatedSavedCourses;
            if (savedCourses.length > 0) {
                updatedSavedCourses = []//await response.json();
            } else {
                updatedSavedCourses = [101]
            }
            setSavedCourses(updatedSavedCourses);
        } catch (error) {
            console.error("Failed to toggle save:", error);
        }
    };

    const isSaved = savedCourses.includes(courseId);

    return (
        <div className=' w-[536px] px-8 py-6 rounded-md justify-center items-center gap-2 inline-flex text-sky-600 '>
            <div className='w-7 h-7 relative'> <BookmarkIcon /></div>
            <button onClick={handleToggleSave} className="text-lg font-semibold leading-normal">
                {isSaved ? 'Remove from Favorites' : 'Save Course'}
            </button>
        </div>
    );
};

export default FavoriteButton;
