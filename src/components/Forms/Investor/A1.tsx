import React, { useState } from "react";

// Define the types for form data, including the new fields
interface FormData {
  fundName: string;
  primaryContact: string;
  position: string;
  email: string;
  investmentFocus: string;
  investmentRange: string;
  investmentStage: string;
  esgRequirements: string;
  unSdgRequirements: string;
  dueDiligenceTimeline: string;
  geographicFocus: string;
}

const A1 = () => {
  const [formData, setFormData] = useState<FormData>({
    fundName: "",
    primaryContact: "",
    position: "",
    email: "",
    investmentFocus: "",
    investmentRange: "",
    investmentStage: "",
    esgRequirements: "",
    unSdgRequirements: "",
    dueDiligenceTimeline: "",
    geographicFocus: "",
  });

  // Explicitly type the event for handleChange
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Explicitly type the event for handleSubmit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Fund Name:
        <input
          type="text"
          name="fundName"
          value={formData.fundName}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>
      <label>
        Primary Contact:
        <input
          type="text"
          name="primaryContact"
          value={formData.primaryContact}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>

      {/* Investment Focus */}
      <label>
        Investment Focus:
        <select
          name="investmentFocus"
          value={formData.investmentFocus}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Focus</option>
          <option value="Climate Tech">Climate Tech</option>
          <option value="Environmental Markets">Environmental Markets</option>
          <option value="Financial Innovation">Financial Innovation</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Investment Range */}
      <label>
        Typical Investment Range (USD):
        <select
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Range</option>
          <option value="<500K">500K</option>
          <option value="$500K-$2M">$500K-$2M</option>
          <option value="$2M-$5M">$2M-$5M</option>
          <option value=">$5M">$5M</option>
        </select>
      </label>

      {/* Investment Stage */}
      <label>
        Investment Stage Preference:
        <select
          name="investmentStage"
          value={formData.investmentStage}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Stage</option>
          <option value="Pre-seed">Pre-seed</option>
          <option value="Seed">Seed</option>
          <option value="Series A">Series A</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* ESG Requirements */}
      <label>
        ESG Requirements:
        <input
          type="text"
          name="esgRequirements"
          value={formData.esgRequirements}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>

      {/* UN SDG Requirements */}
      <label>
        UN SDG Requirements:
        <input
          type="text"
          name="unSdgRequirements"
          value={formData.unSdgRequirements}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>

      {/* Due Diligence Timeline */}
      <label>
        Due Diligence Timeline:
        <input
          type="text"
          name="dueDiligenceTimeline"
          value={formData.dueDiligenceTimeline}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>

      {/* Geographic Focus */}
      <label>
        Geographic Focus:
        <input
          type="text"
          name="geographicFocus"
          value={formData.geographicFocus}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        />
      </label>

      <div className="w-full flex justify-center">
        <button
          type="submit"
          className="mb-10 mt-6 border border-slate-300 bg-white hover:bg-[#59b6bd] active:bg-[#8cd3db] w-min px-3 py-1 rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default A1;
