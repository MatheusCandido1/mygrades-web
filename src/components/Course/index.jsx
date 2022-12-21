import { useEffect, useCallback, useState } from 'react';

import { api } from '../../lib/axios';

export default function Course() {
  const [courses, setCourses] = useState([]);

  const getCourses = useCallback(async () => {
    try {
      const response = await api.get('/courses');
      console.log()
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {courses && courses.length > 0 && courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  )
}
