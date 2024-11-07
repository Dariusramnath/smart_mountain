import { useState } from "react";
import InvestorForm from "./Forms/Investor/A1";

interface TabContentProps {
    activeTab: "investor" | "potentialCustomer" | "observer";
    subOption: "option1" | "option2" | "option3" | "option4" | "option5";
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, subOption }) => {
    if (activeTab === "investor") {
      switch (subOption) {
        case "option1":
          return (
            <div>
              {/* <h3>A1. VENTURE CAPITAL/PRIVATE EQUITY REGISTRATION</h3> */}
              <InvestorForm />
            </div>
          );
        case "option2":
          return (
            <div>
              <h3>A2. FAMILY OFFICE REGISTRATION</h3>
              {/* Insert relevant form or content for Family Office Registration */}
            </div>
          );
        case "option3":
          return (
            <div>
              <h3>A3. IMPACT INVESTMENT FUND REGISTRATION</h3>
              {/* Insert relevant form or content for Impact Investment Fund Registration */}
            </div>
          );
        case "option4":
          return (
            <div>
              <h3>A4. CORPORATE INVESTMENT ARM REGISTRATION</h3>
              {/* Insert relevant form or content for Corporate Investment Arm Registration */}
            </div>
          );
        case "option5":
          return (
            <div>
              <h3>A5. OTHER INVESTOR REGISTRATION</h3>
              {/* Insert relevant form or content for Other Investor Registration */}
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  };

const DropdownTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "investor" | "potentialCustomer" | "observer" | ""
  >("");
  const [subOption, setSubOption] = useState<
    "option1" | "option2" | "option3" | "option4"| "option5"| ""
  >("");

  const handleMainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveTab(
      e.target.value as "investor" | "potentialCustomer" | "observer"
    );
    setSubOption(""); // Reset sub-option when main category changes
  };

  const handleSubOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSubOption(e.target.value as "option1" | "option2" | "option3" | "option4"| "option5");
  };

  return (
    <div className="p-2">
      {/* Main Category Dropdown */}
      <label>
        Select Category:
        <select value={activeTab} onChange={handleMainChange} className="ml-2">
          <option value="">Choose...</option>
          <option value="investor">Investor</option>
          <option value="potentialCustomer">Potential Customer</option>
          <option value="observer">Observer</option>
        </select>
      </label>

      {/* Show sub-options dropdown only after a main category is selected */}
      {activeTab && (
        <label className="mt-4 block">
          Select Sub-option:
          <select
            value={subOption}
            onChange={handleSubOptionChange}
            className="ml-2"
          >
            <option value="">Choose...</option>
            {activeTab === "investor" && (
              <>
                <option value="option1">
                  A1. VENTURE CAPITAL/PRIVATE EQUITY REGISTRATION
                </option>
                <option value="option2">A2. FAMILY OFFICE REGISTRATION</option>
                <option value="option3">
                  A3. IMPACT INVESTMENT FUND REGISTRATION
                </option>
                <option value="option4">
                  A4. CORPORATE INVESTMENT ARM REGISTRATION
                </option>
                <option value="option5">A5. OTHER INVESTOR REGISTRATION</option>
              </>
            )}
            {activeTab === "potentialCustomer" && (
              <>
                <option value="option1">Customer Option 1</option>
                <option value="option2">Customer Option 2</option>
              </>
            )}
            {activeTab === "observer" && (
              <>
                <option value="option1">Observer Option 1</option>
                <option value="option2">Observer Option 2</option>
              </>
            )}
          </select>
        </label>
      )}

      {/* Display the selected tab content */}
      <div className="mt-4">
        {activeTab && <TabContent activeTab={activeTab as "investor" | "potentialCustomer" | "observer"} subOption={subOption as "option1" | "option2" | "option3" | "option4" | "option5"} />}
      </div>
    </div>
  );
};

export default DropdownTabs;
