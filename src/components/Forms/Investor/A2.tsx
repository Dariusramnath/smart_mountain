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
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Family Office Name:
        <input
          type="text"
          name="familyOfficeName"
          value={formData.familyOfficeName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Contact Person:
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
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

      {/* Investment Approach */}
      <label>
        Investment Approach:
        <select
          name="investmentApproach"
          value={formData.investmentApproach}
          onChange={handleChange}
          required
        >
          <option value="">Select Approach</option>
          <option value="Direct Investment">Direct Investment</option>
          <option value="Fund Investment">Fund Investment</option>
          <option value="Blended Approach">Blended Approach</option>
        </select>
      </label>

      {/* Investment Focus */}
      <label>
        Investment Focus:
        <select
          name="investmentFocus"
          value={formData.investmentFocus}
          onChange={handleChange}
          required
        >
          <option value="">Select Focus</option>
          <option value="Environmental Impact">Environmental Impact</option>
          <option value="Financial Returns">Financial Returns</option>
          <option value="Regional Development">Regional Development</option>
          <option value="Other">Other</option>
        </select>
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
          <option value="<200K">{"<200K"}</option>
          <option value="$200K-$1M">$200K-$1M</option>
          <option value=">$1M">{"> $1M"}</option>
        </select>
      </label>

      {/* Investment Timeline */}
      <label>
        Investment Timeline:
        <input
          type="text"
          name="investmentTimeline"
          value={formData.investmentTimeline}
          onChange={handleChange}
          required
        />
      </label>

      {/* Impact Requirements */}
      <label>
        Impact Requirements:
        <input
          type="text"
          name="impactRequirements"
          value={formData.impactRequirements}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default A2;
