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
        Position/Title:
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
        Email/Phone:
        <input
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"

        />
      </label>

      {/* Impact Focus */}
      <label>
        Impact Focus:
        <select
          name="impactFocus"
          value={formData.impactFocus}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Impact Focus</option>
          <option value="Environmental">Environmental</option>
          <option value="Social">Social</option>
          <option value="Governance">Governance</option>
          <option value="Blended">Blended</option>
        </select>
      </label>

      {/* Financial Return Target */}
      <label>
        Financial Return Target:
        <input
          type="text"
          name="financialReturnTarget"
          value={formData.financialReturnTarget}
          onChange={handleChange}
          required
          className="my-1 ml-3 bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"

        />
      </label>

      {/* Impact Metrics Required */}
      <label>
        Impact Metrics Required:
        <input
          type="text"
          name="impactMetricsRequired"
          value={formData.impactMetricsRequired}
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

      {/* Investment Range */}
      <label>
        Investment Range (USD):
        <select
          name="investmentRange"
          value={formData.investmentRange}
          onChange={handleChange}
          required
          className="ml-3 inline-flex my-1 justify-center gap-x-1.5 rounded-md bg-white px-1 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          <option value="">Select Range</option>
          <option value="<500K">{"<500K"}</option>
          <option value="$500K-$2M">$500K-$2M</option>
          <option value=">$2M">{"> $2M"}</option>
        </select>
      </label>

      {/* Due Diligence Requirements */}
      <label>
        Due Diligence Requirements:
        <input
          type="text"
          name="dueDiligenceRequirements"
          value={formData.dueDiligenceRequirements}
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

export default A3;
