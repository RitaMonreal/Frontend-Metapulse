import Navbar from '../components/navbar';
import { Inventory } from './inventory';
import { ItemInfo } from './iteminfo';

const Page = () => {
  return (
    <div className="bg-purple-950 h-screen w-screen flex flex-col mx-auto p-0">
      <Navbar />
      <div className="container flex flex-1 mt-10 mx-auto ">
        <Inventory />
        <ItemInfo />
      </div>
    </div>
  );
};

export default Page;
