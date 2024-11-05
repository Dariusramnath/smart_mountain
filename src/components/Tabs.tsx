import { useState } from "react";

interface TabContentProps {
  activeTab: "investor" | "potentialCustomer" | "observer";
}

const TabContent: React.FC<TabContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case "investor":
      return (
        <div>
          <h2>A. INVESTOR</h2>
          <h3>A1. VENTURE CAPITAL/PRIVATE EQUITY REGISTRATION</h3>
          {/* Insert all relevant information here */}
        </div>
      );
    case "potentialCustomer":
      return (
        <div>
          <h2>B. POTENTIAL CUSTOMER</h2>
          <h3>B1. FINANCIER REGISTRATION</h3>
          {/* Insert all relevant information here */}
        </div>
      );
    case "observer":
      return (
        <div>
          <h2>C. OBSERVER</h2>
          <h3>C1. ACADEMIC/RESEARCH OBSERVER</h3>
          {/* Insert all relevant information here */}
        </div>
      );
    default:
      return null;
  }
};

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "investor" | "potentialCustomer" | "observer"
  >("investor");

  return (
    <div className="tabs">
      <div className="flex border-b border-gray-500">
        <button
          onClick={() => setActiveTab("investor")}
          className={`flex-1 h-20 border-x border-gray-500 hover:bg-gray-400 ${
            activeTab === "investor" ? "bg-gray-400 text-white" : " text-white"
          }`}
        >
          Investor
        </button>
        <button
          onClick={() => setActiveTab("potentialCustomer")}
          className={`flex-1 h-20 border-r border-gray-500 hover:bg-gray-400 ${
            activeTab === "potentialCustomer"
              ? "bg-gray-400 text-white"
              : " text-white"
          }`}
        >
          Potential Customer
        </button>
        <button
          onClick={() => setActiveTab("observer")}
          className={`flex-1 h-20 border-r border-gray-500 hover:bg-gray-400 ${
            activeTab === "observer" ? "bg-gray-400 text-white" : "text-white"
          }`}
        >
          Observer
        </button>
      </div>

      <div className="mt-4">
        <TabContent
          activeTab={activeTab as "investor" | "potentialCustomer" | "observer"}
        />
      </div>
    </div>
  );
};

export default Tabs;
