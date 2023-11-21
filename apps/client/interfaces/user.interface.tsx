export default interface User {
  id: number;
  name: string;
  email: string;
  activeStatus: boolean;
  role: 'APPRENTICE' | 'SCIENTIST' | 'ADMIN';
}
