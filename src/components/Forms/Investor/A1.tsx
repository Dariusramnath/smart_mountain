import React, { useState } from "react";

// Define the types for form data, including the new fields
interface FormData {
  category: string;
  subCategory: string;
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
  registrationDate: string;
  howDidYouHear: string;
  interestInJamaicaPilot: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const A1 = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Investor",
    subCategory: "A1",
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
    registrationDate: "",
    howDidYouHear: "",
    interestInJamaicaPilot: "",
    platformAccessRequirements: "",
    additionalComments: "",
  });

  // Explicitly type the event for handleChange
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle radio input change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Explicitly type the event for handleSubmit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        category: "Investor",
        subCategory: "VENTURE CAPITAL/PRIVATE EQUITY REGISTRATION",
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
        registrationDate: "",
        howDidYouHear: "",
        interestInJamaicaPilot: "",
        platformAccessRequirements: "",
        additionalComments: "",
      });
    } else {
      alert("Error submitting form");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow text-black"
    >
      <label className="block font-semibold mb-3">
        Fund Name:
        <input
          type="text"
          name="fundName"
          value={formData.fundName}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Primary Contact:
        <input
          type="text"
          name="primaryContact"
          value={formData.primaryContact}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>
      <label className="block font-semibold mb-3">
        Position:
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
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
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
          <option value="Climate Tech">Climate Tech</option>
          <option value="Environmental Markets">Environmental Markets</option>
          <option value="Financial Innovation">Financial Innovation</option>
          <option value="Other">Other</option>
        </select>
      </label>

      {/* Investment Range */}
      <label className="block font-semibold mb-3">
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
      <label className="block font-semibold mb-3">
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
      <label className="block font-semibold mb-3">
        ESG Requirements:
        <input
          type="text"
          name="esgRequirements"
          value={formData.esgRequirements}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* UN SDG Requirements */}
      <label className="block font-semibold mb-3">
        UN SDG Requirements:
        <input
          type="text"
          name="unSdgRequirements"
          value={formData.unSdgRequirements}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Due Diligence Timeline */}
      <label className="block font-semibold mb-3">
        Due Diligence Timeline:
        <input
          type="text"
          name="dueDiligenceTimeline"
          value={formData.dueDiligenceTimeline}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Geographic Focus */}
      <label className="block font-semibold mb-3">
        Geographic Focus:
        <input
          type="text"
          name="geographicFocus"
          value={formData.geographicFocus}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Common Fields for All Forms */}
      <div className="mt-4">
        <label className="block font-semibold mb-3">
          Registration Date:
          <input
            type="date"
            name="registrationDate"
            value={formData.registrationDate}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        <label className="block font-semibold mb-3">
          How did you hear about us?:
          <input
            type="text"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        {/* Interest in Jamaica Pilot */}
        <div className="block mt-2">
          <label className="block font-semibold mb-3">
            Interest in Jamaica Pilot:
          </label>
          {["Yes", "No", "Maybe"].map((option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="interestInJamaicaPilot"
                value={option}
                checked={formData.interestInJamaicaPilot === option}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        <label className="block font-semibold mb-3">
          Platform Access Requirements:
          <textarea
            name="platformAccessRequirements"
            value={formData.platformAccessRequirements}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        <label className="block font-semibold mb-3">
          Additional Comments:
          <textarea
            name="additionalComments"
            value={formData.additionalComments}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default A1;
