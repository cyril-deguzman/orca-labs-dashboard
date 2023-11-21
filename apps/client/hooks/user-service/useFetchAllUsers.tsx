import User from '../../interfaces/user.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchAllUsers = () => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios('http://localhost:3000/api/user');
        setUsers(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { users, isLoading, isError };
};

export default useFetchAllUsers;
