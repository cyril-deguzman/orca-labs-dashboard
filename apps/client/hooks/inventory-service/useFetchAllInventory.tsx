import Inventory from '../../interfaces/inventory.interface';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchAllInventory = () => {
  const [inventory, setInventory] = useState<Inventory[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await axios('http://localhost:3001/api/inventory');
        setInventory(result.data);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { inventory, isLoading, isError };
};

export default useFetchAllInventory;
