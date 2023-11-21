import InventoryForm from './inventory-form';

export default async function Index() {
  return (
    <section>
      <p className="text-sm">
        Dashboard {'>'} Manage Inventory {'>'} Add Inventory
      </p>
      <div className="flex flex-row w-[92.5%]">
        <h1 className="flex-1 font-medium text-2xl">Add Inventory</h1>
      </div>
      <div className="pt-8 min-w-[300px] w-[40%]">
        <InventoryForm />
      </div>
    </section>
  );
}
