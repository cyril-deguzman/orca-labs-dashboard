import UserForm from './user-form';

export default async function Index() {
  return (
    <section>
      <p className="text-sm">
        Dashboard {'>'} Manage Users {'>'} Add User
      </p>
      <div className="flex flex-row w-[92.5%]">
        <h1 className="flex-1 font-medium text-2xl">Add User</h1>
      </div>
      <div className="pt-8 min-w-[300px] w-[40%]">
        <UserForm />
      </div>
    </section>
  );
}
