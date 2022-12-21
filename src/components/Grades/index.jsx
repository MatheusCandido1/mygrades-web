import { useState, useEffect, useCallback } from 'react';
import { api } from '../../lib/axios';

export default function Grades() {
  const [grades, setGrades] = useState([]);

  const getGrades = useCallback(async () => {
    try {
      const response = await api.get('/grades');
      setGrades(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getGrades();
  }, []);

  return (
    <div>
      {grades.map((grade) => (
        <div key={grade.id}>
          {grade.course.name}
        </div>
      ))}
    </div>
  )
}
