'use client';

import { useRouter } from 'next/navigation';
import { formSchema } from './formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Input,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ex03/ui-components';

import z from 'zod';
import axios from 'axios';

const InventoryForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.reset();
    router.back();

    const res = await axios.post('http://localhost:3001/api/inventory', {
      quantity: values.quantity,
      name: values.name,
    });

    console.log('inventory added!', res);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Bunsen burner" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input placeholder="1" type={'number'} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-4 pt-3">
          <Button onClick={() => router.back()}>Go Back</Button>
          <Button type="submit">Add Inventory</Button>
        </div>
      </form>
    </Form>
  );
};

export default InventoryForm;
