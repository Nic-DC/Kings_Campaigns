import { useState } from "react";
import NavBar from "./components/NavBar";
import CampaignTable from "./components/Table/CampaignTable";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };
  return (
    <>
      <NavBar onSearch={handleSearch} />
      <CampaignTable searchValue={searchValue} />
    </>
  );
}

export default App;
