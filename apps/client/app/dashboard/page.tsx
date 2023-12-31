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
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import useFetchAllUsers from '../../hooks/user-service/useFetchAllUsers';

const Dashboard = () => {
  const { users, isLoading, isError } = useFetchAllUsers();
  const router = useRouter();

  return (
    <section>
      <p className="text-sm">Dashboard {'>'} Manage Users</p>
      <div className="flex flex-row w-[92.5%]">
        <h1 className="flex-1 font-medium text-2xl">Manage Users</h1>
        <Button
          onClick={() => router.push('/dashboard/create-user')}
          className="bg-[#023B58] dark:text-inherit hover:dark:text-white hover:dark:bg-[#002436]"
        >
          <span className="mr-1">
            <PersonAddIcon />
          </span>
          Add user
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
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.activeStatus ? (
                        <div>online</div>
                      ) : (
                        <div>offline</div>
                      )}
                    </TableCell>
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
