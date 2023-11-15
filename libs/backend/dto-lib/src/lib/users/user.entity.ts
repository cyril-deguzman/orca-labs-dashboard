import { User as UserModel } from '@prisma/client';

export class User implements UserModel {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  email: string;
  name: string | null;
  activeStatus: boolean;
  role: 'APPRENTICE' | 'SCIENTIST' | 'ADMIN';
}
