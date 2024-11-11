import { useState } from "react";

interface FormData {
  institutionType: string;
  otherInstitutionType?: string;
  primaryServices: string[];
  otherPrimaryService?: string;
  assetSize: string;
  environmentalFinanceExperience: string;
  desiredPlatformServices: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const B1FinancierRegistration = () => {
  const [formData, setFormData] = useState<FormData>({
    institutionType: "",
    primaryServices: [],
    assetSize: "",
    environmentalFinanceExperience: "",
    desiredPlatformServices: "",
    registrationDate: "",
    referralSource: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setFormData({
        institutionType: "",
        primaryServices: [],
        assetSize: "",
        environmentalFinanceExperience: "",
        desiredPlatformServices: "",
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
      <label className="block font-semibold mb-3">Institution Type:</label>
      <div>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="institutionType"
            value="Commercial Bank"
            onChange={handleChange}
            checked={formData.institutionType === "Commercial Bank"}
            className="mr-2"
          />
          Commercial Bank
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="institutionType"
            value="Development Bank"
            onChange={handleChange}
            checked={formData.institutionType === "Development Bank"}
            className="mr-2"
          />
          Development Bank
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="institutionType"
            value="Investment Fund"
            onChange={handleChange}
            checked={formData.institutionType === "Investment Fund"}
            className="mr-2"
          />
          Investment Fund
        </label>
        <label className="block font-semibold">
          <input
            type="radio"
            name="institutionType"
            value="Other"
            onChange={handleChange}
            checked={formData.institutionType === "Other"}
            className="mr-2"
          />
          Other:
        </label>
        {formData.institutionType === "Other" && (
          <input
            type="text"
            name="otherInstitutionType"
            value={formData.otherInstitutionType || ""}
            onChange={handleChange}
            placeholder="Please specify"
            className="mr-2 w-full p-2 mt-1 border rounded"
          />
        )}
      </div>

      <label className="block font-semibold mb-3 mt-3">Primary Services:</label>
      <div>
        <label className="block font-semibold mb-3">
          <input
            type="checkbox"
            name="primaryServices"
            value="Project Finance"
            checked={formData.primaryServices.includes("Project Finance")}
            onChange={handleChange}
            className="mr-2"
          />
          Project Finance
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="checkbox"
            name="primaryServices"
            value="Credit Trading"
            checked={formData.primaryServices.includes("Credit Trading")}
            onChange={handleChange}
            className="mr-2"
          />
          Credit Trading
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="checkbox"
            name="primaryServices"
            value="Asset Management"
            checked={formData.primaryServices.includes("Asset Management")}
            onChange={handleChange}
            className="mr-2"
          />
          Asset Management
        </label>
        <label className="block font-semibold">
          <input
            type="checkbox"
            name="primaryServices"
            value="Other"
            checked={formData.primaryServices.includes("Other")}
            onChange={handleChange}
            className="mr-2"
          />
          Other:
        </label>
        {formData.primaryServices.includes("Other") && (
          <input
            type="text"
            name="otherPrimaryService"
            value={formData.otherPrimaryService || ""}
            onChange={handleChange}
            placeholder="Please specify"
            className="w-full p-2 border rounded"
          />
        )}
      </div>

      <label className="block font-semibold mb-3 mt-3">
        Asset Size:
        <input
          type="text"
          name="assetSize"
          value={formData.assetSize}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Environmental Finance Experience:
        <input
          type="text"
          name="environmentalFinanceExperience"
          value={formData.environmentalFinanceExperience}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Desired Platform Services:
        <input
          type="text"
          name="desiredPlatformServices"
          value={formData.desiredPlatformServices}
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
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Platform Access Requirements:
        <input
          type="text"
          name="platformAccessRequirements"
          value={formData.platformAccessRequirements}
          onChange={handleChange}
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

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 active:bg-blue-400"
      >
        Submit
      </button>
    </form>
  );
};

export default B1FinancierRegistration;
