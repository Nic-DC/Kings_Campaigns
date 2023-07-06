import React, { createContext, useState } from "react";
import Campaign from "../types";

interface CampaignContextProps {
  campaigns: Campaign[];
  addCampaigns: (newCampaigns: Campaign[]) => void;
}

export const CampaignContext = createContext<CampaignContextProps>({
  campaigns: [],
  addCampaigns: () => {},
});

export const campaignsRef = { current: [] as Campaign[] };

export const addCampaignsRef = { current: (newCampaigns: Campaign[]) => {} };
export const CampaignProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const addCampaigns = (newCampaigns: Campaign[]) => {
    setCampaigns((prevCampaigns) => {
      const updatedCampaigns = [...prevCampaigns, ...newCampaigns];
      campaignsRef.current = updatedCampaigns;
      return updatedCampaigns;
    });
  };

  addCampaignsRef.current = addCampaigns;

  return <CampaignContext.Provider value={{ campaigns, addCampaigns }}>{children}</CampaignContext.Provider>;
};
