import { useState } from "react";

interface FormData {
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
  organizationType: string;
  services: string;
  technicalCapabilities: string;
  marketCoverage: string;
  integrationRequirements: string;
}

const FinancialMarketInfrastructureProviderForm = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationType: "",
    services: "",
    technicalCapabilities: "",
    marketCoverage: "",
    integrationRequirements: "",
    registrationDate: "",
    referralSource: "",
    platformAccessRequirements: "",
    additionalComments: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      "/api/submitForm",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        organizationType: "",
        services: "",
        technicalCapabilities: "",
        marketCoverage: "",
        integrationRequirements: "",
        registrationDate: "",
        referralSource: "",
        platformAccessRequirements: "",
        additionalComments: "",
      });
    } else {
      alert("Error submitting form.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow"
    >
      <label className="block font-semibold mb-3">
        Organization Type:
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <div className="block mt-2">
        <label className="block font-semibold mb-3">Services:</label>
        {["Trading Platform", "Settlement", "Verification"].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              name="services"
              value={option}
              checked={formData.services === option}
              onChange={handleRadioChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
        <label className="block font-semibold mb-3">
          Other:
          <input
            type="text"
            name="services"
            value={formData.services === "Other" ? formData.services : ""}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
      </div>

      <label className="block font-semibold mb-3">
        Technical Capabilities:
        <input
          type="text"
          name="technicalCapabilities"
          value={formData.technicalCapabilities}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Market Coverage:
        <input
          type="text"
          name="marketCoverage"
          value={formData.marketCoverage}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Integration Requirements:
        <input
          type="text"
          name="integrationRequirements"
          value={formData.integrationRequirements}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

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
          name="referralSource"
          value={formData.referralSource}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Platform Access Requirements:
        <input
          type="text"
          name="platformAccessRequirements"
          value={formData.platformAccessRequirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default FinancialMarketInfrastructureProviderForm;
