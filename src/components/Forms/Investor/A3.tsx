import React, { useState } from "react";

interface A3FormData {
  fundName: string;
  primaryContact: string;
  position: string;
  emailOrPhone: string;
  impactFocus: string;
  financialReturnTarget: string;
  impactMetricsRequired: string;
  geographicFocus: string;
  investmentRange: string;
  dueDiligenceRequirements: string;
  registrationDate: string;
  howDidYouHear: string;
  interestInJamaicaPilot: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const A3 = () => {
  const [formData, setFormData] = useState<A3FormData>({
    fundName: "",
    primaryContact: "",
    position: "",
    emailOrPhone: "",
    impactFocus: "",
    financialReturnTarget: "",
    impactMetricsRequired: "",
    geographicFocus: "",
    investmentRange: "",
    dueDiligenceRequirements: "",
    registrationDate: "",
    howDidYouHear: "",
    interestInJamaicaPilot: "",
    platformAccessRequirements: "",
    additionalComments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow"
    >
      <div className="mb-4">
        <label className="block font-semibold">
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
      </div>

      <div className="mb-4">
        <label className="block font-semibold">
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
      </div>

      <div className="mb-4">
        <label className="block font-semibold">
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
      </div>

      <div className="mb-4">
        <label className="block font-semibold">
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
      </div>

      <label className="block font-semibold mb-3">
        Impact Focus:
        <select
          name="impactFocus"
          value={formData.impactFocus}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="">Select Impact Focus</option>
          <option value="Environmental">Environmental</option>
          <option value="Social">Social</option>
          <option value="Governance">Governance</option>
          <option value="Blended">Blended</option>
        </select>
      </label>

      {/* Financial Return Target */}
      <label className="block font-semibold mb-3">
        Financial Return Target:
        <input
          type="text"
          name="financialReturnTarget"
          value={formData.financialReturnTarget}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Impact Metrics Required */}
      <label className="block font-semibold mb-3">
        Impact Metrics Required:
        <input
          type="text"
          name="impactMetricsRequired"
          value={formData.impactMetricsRequired}
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

      {/* Investment Range */}
      <div className="mb-4">
      <label className="font-semibold block mb-3">
        Investment Range (USD):
        <select
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400"
        >
          <option value="">Select Range</option>
          <option value="<500K">{"<500K"}</option>
          <option value="$500K-$2M">$500K-$2M</option>
          <option value=">$2M">{"> $2M"}</option>
        </select>
      </label>
      </div>

      {/* Due Diligence Requirements */}
      <div></div>
      <label className="block font-semibold">
        Due Diligence Requirements:
        <input
          type="text"
          name="dueDiligenceRequirements"
          value={formData.dueDiligenceRequirements}
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

export default A3;
