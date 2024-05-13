import { Tab, TabList, Tabs } from "@chakra-ui/react";

const GenericTabs = () => {
  const style = {
    color: "black",
    bg: "white",
    borderRadius: "10px",
    transition: "all 250ms",
  };

  return (
    <div>
      <Tabs
        bg={"rgba(105, 134, 237, 0.6)"}
        mt={"14px"}
        borderRadius={"10px"}
        variant="unstyled"
        p={1}
        size={"md"}
      >
        <TabList>
          <Tab _selected={style}>Today</Tab>
          <Tab _selected={style}>Yesterday</Tab>
          <Tab _selected={style}>Week</Tab>
          <Tab _selected={style}>Moth</Tab>
        </TabList>
      </Tabs>
    </div>
  );
};

export default GenericTabs;
