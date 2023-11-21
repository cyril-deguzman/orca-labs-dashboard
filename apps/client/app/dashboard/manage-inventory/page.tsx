'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@ex03/ui-components';
import ScienceIcon from '@mui/icons-material/Science';
import useFetchAllInventory from '../../../hooks/inventory-service/useFetchAllInventory';

const Dashboard = () => {
  const { inventory, isLoading, isError } = useFetchAllInventory();
  const router = useRouter();

  return (
    <section>
      <p className="text-sm">Dashboard {'>'} Manage Inventory</p>
      <div className="flex flex-row w-[92.5%]">
        <h1 className="flex-1 font-medium text-2xl">Manage Inventory</h1>
        <Button
          onClick={() =>
            router.push('/dashboard/manage-inventory/create-inventory')
          }
          className="bg-[#023B58] dark:text-inherit hover:dark:text-white hover:dark:bg-[#002436]"
        >
          <span className="mr-1">
            <ScienceIcon />
          </span>
          Add Inventory
        </Button>
      </div>
      {isError ? (
        'Error occurred contact admin'
      ) : isLoading ? (
        'Loading'
      ) : (
        <div className="mt-8">
          <Table className="w-[85%] mr-auto ml-auto">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Quantity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory?.map((inv) => {
                return (
                  <TableRow key={inv.id}>
                    <TableCell className="font-medium">{inv.id}</TableCell>
                    <TableCell>{inv.name}</TableCell>
                    <TableCell>{inv.quantity}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  );
};

export default Dashboard;
