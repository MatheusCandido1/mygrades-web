import { useState, useEffect, useCallback } from 'react';
import { api } from '../../lib/axios';
import GradeItem from '../GradeItem';

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
    <div
      className="flex flex-col gap-4 mt-2 overflow-auto"
    >
      {grades.map((grade) => (
        <GradeItem key={grade.id} grade={grade} />
      ))}
    </div>
  )
}
