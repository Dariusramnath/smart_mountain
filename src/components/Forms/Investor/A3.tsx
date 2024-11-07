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
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default A3;
