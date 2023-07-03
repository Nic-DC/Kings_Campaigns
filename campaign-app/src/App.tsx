import { useState } from "react";
import FilterBar from "./components/FilterBar";
import Campaign from "./types";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { addCampaigns } from "./redux/campaignsSlice";
import CampaignsList from "./components/CampaignsList";
import NavBar from "./components/NavBar";

function App() {
  const campaigns = useSelector((state: RootState) => state.campaigns);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  const dispatch = useDispatch();

  const addNewCampaigns = (newCampaigns: Campaign[]) => {
    dispatch(addCampaigns(newCampaigns));
  };

  const handleSearch = (searchText: string) => {
    setSearchTerm(searchText);
  };

  return (
    <>
      <NavBar handleSearch={handleSearch} />
      <FilterBar setFilterText={setSearchTerm} setDateRange={setDateRange} />
      <CampaignsList campaigns={campaigns} />
    </>
  );
}

export default App;
