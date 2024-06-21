import Tabs from "./tabs";

function RandomComponent() {
  return <h1>Some Random Component</h1>;
}

export default function TabTest() {
  return (
    <div>
      <Tabs tabsContent={tabs} />
    </div>
  );
}
