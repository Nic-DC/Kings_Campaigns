import React from "react";
import Campaign from "../types";

interface CampaignsListProps {
  campaigns: Campaign[];
}

const CampaignsList: React.FC<CampaignsListProps> = ({ campaigns }) => {
  return (
    <div>
      {campaigns.map((campaign) => (
        <div key={campaign.id}>{campaign.name}</div>
      ))}
    </div>
  );
};

export default CampaignsList;
