import NavbarR from '../components/navbarR';
import Items from '../components/items'

async function fetchItems(){
    const res = await fetch("https://reqres.in/api/users");
    const data = await res.json();
    return data.data
}

async function Page() {
  const items = await fetchItems();
  return (
    <div className="bg-backgroundBlue h-screen w-screen flex flex-col mx-auto p-0">
      <NavbarR />
      <div className="container flex flex-1 mb-16 mx-auto mt-8 gap-11">
        <Items items={items}/>
      </div>
    </div>
  );
};

export default Page;
