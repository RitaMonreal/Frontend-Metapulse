import Navbar from '../components/navbar';
import { Inventory } from './inventory';
import { ItemInfo } from './iteminfo';

const Page = () => {
  return (
    <div className="bg-backgroundBlue h-screen w-screen flex flex-col mx-auto p-0">
      <Navbar />
      <div className="container flex flex-1 mb-16 mx-auto mt-8 gap-11">
        <Inventory />
        <ItemInfo />
      </div>
    </div>
  );
};

export default Page;
