import { useState, useRef, useEffect } from "react";
import { A1, A2, A3, A4, A5 } from "./Forms/Investor";

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
