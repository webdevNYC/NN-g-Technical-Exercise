import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';

const ProfilePage: React.FC = () => {
    const [savedCourses, setSavedCourses] = useState<number[]>([]);

    useEffect(() => {
        fetch(`/api/profile/saved/courses`)
            .then(response => response.json())
            .then(data => setSavedCourses(data))
            .catch(error => console.error("Failed to fetch saved courses:", error));
    }, []);

    return (
        <Layout title="NN/g Senior Frontend Developer - Technical Exercise">
            <h1 className='text-2xl'>NN/g Senior Frontend Developer - Profile Page</h1>
            <ul>
                {savedCourses.map(courseId => (
                    <li key={courseId}>Course ID: {courseId}</li> // Adjust to display course details as needed
                ))}
            </ul>
        </Layout>
    );
};

export default ProfilePage;
