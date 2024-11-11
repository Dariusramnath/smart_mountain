import React, { useState } from "react";

interface A2FormData {
  familyOfficeName: string;
  contactPerson: string;
  position: string;
  emailOrPhone: string;
  investmentApproach: string;
  investmentFocus: string;
  investmentRange: string;
  investmentTimeline: string;
  impactRequirements: string;
}

const A2 = () => {
  const [formData, setFormData] = useState<A2FormData>({
    familyOfficeName: "",
    contactPerson: "",
    position: "",
    emailOrPhone: "",
    investmentApproach: "",
    investmentFocus: "",
    investmentRange: "",
    investmentTimeline: "",
    impactRequirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow">
      <label className="block font-semibold mb-3">
        Family Office Name:
        <input
          type="text"
          name="familyOfficeName"
          value={formData.familyOfficeName}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Contact Person:
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Position/Title:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Email/Phone:
        <input
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Investment Approach */}
      <label className="block font-semibold mb-3">
        Investment Approach:
        <select
          name="investmentApproach"
          value={formData.investmentApproach}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Approach</option>
          <option value="Direct Investment">Direct Investment</option>
          <option value="Fund Investment">Fund Investment</option>
          <option value="Blended Approach">Blended Approach</option>
        </select>
      </label>

      {/* Investment Focus */}
      <label className="block font-semibold mb-3">
        Investment Focus:
        <select
          name="investmentFocus"
          value={formData.investmentFocus}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Focus</option>
          <option value="Environmental Impact">Environmental Impact</option>
          <option value="Financial Returns">Financial Returns</option>
          <option value="Regional Development">Regional Development</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Investment Range */}
      <label className="block font-semibold mb-3">
        Investment Range (USD):
        <select
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Range</option>
          <option value="<200K">{"<200K"}</option>
          <option value="$200K-$1M">$200K-$1M</option>
          <option value=">$1M">{"> $1M"}</option>
        </select>
      </label>

      {/* Investment Timeline */}
      <label className="block font-semibold mb-3">
        Investment Timeline:
        <input
          type="text"
          name="investmentTimeline"
          value={formData.investmentTimeline}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Impact Requirements */}
      <label className="block font-semibold mb-3">
        Impact Requirements:
        <input
          type="text"
          name="impactRequirements"
          value={formData.impactRequirements}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
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

export default A2;
