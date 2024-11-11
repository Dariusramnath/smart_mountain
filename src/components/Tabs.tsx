import { useState, useRef, useEffect } from "react";
import { A1, A2, A3, A4, A5 } from "./Forms/Investor";
import { B1, B2, B3, B4, B5, B6, B7, B8, B9, B10, B11, B12, B13 } from "./Forms/Customer";

interface TabContentProps {
  activeTab: "investor" | "potentialCustomer" | "observer";
  subOption: string;
}

const TabContent: React.FC<TabContentProps> = ({ activeTab, subOption }) => {
  if (activeTab === "investor") {
    switch (subOption) {
      case "option1":
        return (
          <div>
            <A1 />
          </div>
        );
      case "option2":
        return (
          <div>
            <A2 />
          </div>
        );
      case "option3":
        return (
          <div>
            <A3 />
          </div>
        );
      case "option4":
        return (
          <div>
            <A4 />
          </div>
        );
      case "option5":
        return (
          <div>
            <A5 />
          </div>
        );
      default:
        return null;
    }
  } 
  if (activeTab === "potentialCustomer") {
    switch (subOption) {
        case "option1":
          return (
            <div>
              <B1 />
            </div>
          );
        case "option2":
          return (
            <div>
              <B2 />
            </div>
          );
        case "option3":
          return (
            <div>
              <B3 />
            </div>
          );
        case "option4":
          return (
            <div>
              <B4 />
            </div>
          );
        case "option5":
          return (
            <div>
              <B5 />
            </div>
          );
        case "option6":
          return (
            <div>
              <B6 />
            </div>
          );
        case "option7":
          return (
            <div>
              <B7 />
            </div>
          );
        case "option8":
          return (
            <div>
              <B8 />
            </div>
          );
        case "option9":
          return (
            <div>
              <B9 />
            </div>
          );
        case "option10":
          return (
            <div>
              <B10 />
            </div>
          );
        case "option11":
          return (
            <div>
              <B11 />
            </div>
          );
        case "option12":
          return (
            <div>
              <B12 />
            </div>
          );
        case "option13":
          return (
            <div>
              <B13 />
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
    "option1" | "option2" | "option3" | "option4" | "option5" | ""
  >("");

  // Create refs for sub-options dropdown and the tab content
  const subOptionRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleMainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTab = e.target.value as
      | "investor"
      | "potentialCustomer"
      | "observer";
    setActiveTab(newTab);
    setSubOption(""); // Reset sub-option when main category changes
  };

  const handleSubOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSubOption = e.target.value as
      | "option1"
      | "option2"
      | "option3"
      | "option4"
      | "option5";
    setSubOption(newSubOption);

    // Scroll to the content after selecting the sub-option
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Scroll to the sub-options dropdown after activeTab changes
  useEffect(() => {
    if (activeTab && subOptionRef.current) {
      subOptionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeTab]); // This effect runs when activeTab changes

  // Ensure the page is scrolled to the content when subOption changes
  useEffect(() => {
    if (subOption && contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [subOption]); // This effect runs when subOption changes

  return (
    <div className="pt-4">
      {/* Main Category Dropdown */}
      <label className="font-bold">
        Join Here:
        <select value={activeTab} onChange={handleMainChange} className="ml-2">
          <option value="">Choose...</option>
          <option value="investor">Investor</option>
          <option value="potentialCustomer">Potential Customer</option>
          <option value="observer">Observer</option>
        </select>
      </label>

      {/* Show sub-options dropdown only after a main category is selected */}
      {activeTab && (
        <div ref={subOptionRef} className="mt-4">
          <label className="block font-bold">
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
                  <option value="option2">
                    A2. FAMILY OFFICE REGISTRATION
                  </option>
                  <option value="option3">
                    A3. IMPACT INVESTMENT FUND REGISTRATION
                  </option>
                  <option value="option4">
                    A4. CORPORATE INVESTMENT ARM REGISTRATION
                  </option>
                  <option value="option5">
                    A5. OTHER INVESTOR REGISTRATION
                  </option>
                </>
              )}
              {activeTab === "potentialCustomer" && (
                <>
                  <option value="option1">B1. FINANCIER REGISTRATION</option>
                  <option value="option2">B2. ENVIRONMENTAL CREDITS PURCHASER REGISTRATION</option>
                  <option value="option3">B3. GOVERNMENT AGENCY REGISTRATION</option>
                  <option value="option4">B4. CONSERVATION SERVICE PROVIDER REGISTRATION</option>
                  <option value="option5">B5. COMMUNITY STAKEHOLDER REGISTRATION</option>
                  <option value="option6">B6. LANDOWNER REGISTRATION</option>
                  <option value="option7">B7. DATA/ANALYTICS USER REGISTRATION</option>
                  <option value="option8">B8. INSURANCE COMPANY REGISTRATION</option>
                  <option value="option9">B9. DEVELOPMENT ORGANIZATION REGISTRATION</option>
                  <option value="option10">B10. CORPORATE ESG DEPARTMENT REGISTRATION</option>
                  <option value="option11">B11. FINANCIAL MARKET INFRASTRUCTURE PROVIDER REGISTRATION</option>
                  <option value="option12">B12. TOURISM INDUSTRY REGISTRATION</option>
                  <option value="option13">B13. OTHER STAKEHOLDER REGISTRATION</option>
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
        </div>
      )}

      {/* Display the selected tab content */}
      <div ref={contentRef} className="mt-4">
        {activeTab && (
          <TabContent
            activeTab={
              activeTab as "investor" | "potentialCustomer" | "observer"
            }
            subOption={
              subOption as
                | "option1"
                | "option2"
                | "option3"
                | "option4"
                | "option5"
            }
          />
        )}
      </div>
    </div>
  );
};

export default DropdownTabs;
