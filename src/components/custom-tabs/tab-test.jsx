import Tabs from "./tabs";

function RandomComponent() {
  return <h1>Some Random Component</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab1",
      content: "This is the content for Tab1",
    },
    {
      label: "Tab2",
      content: "This is the content for Tab2",
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];

  return (
    <div>
      <Tabs tabsContent={tabs} />
    </div>
  );
}
