import { useState } from "react";
import NavBar from "./components/NavBar";
import CampaignTable from "./components/Table/CampaignTable";
import { CampaignProvider } from "./context/CampaignContext";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleResetFilters = () => {
    setSearchValue(""); // clears the search input
    setStartDate(null);
    setEndDate(null);
  };
  return (
    <>
      <CampaignProvider>
        <NavBar onSearch={handleSearch} searchValue={searchValue} />
        <CampaignTable
          searchValue={searchValue}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onSearchValueChange={handleSearch}
          onClearFilters={handleResetFilters}
        />
      </CampaignProvider>
    </>
  );
};

export default App;
