import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
  companyName: string;
  industry: string;
  esgPriorities: string;
  unSdgRequirements: string;
  reportingRequirements: string;
  timelineForGoals: string;
}

const CorporateEsdDepartmentRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Potential Customer",
    subCategory: "B10",
    companyName: "",
    industry: "",
    esgPriorities: "",
    unSdgRequirements: "",
    reportingRequirements: "",
    timelineForGoals: "",
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
        category: "Potential Customer",
        subCategory: "B10",
        companyName: "",
        industry: "",
        esgPriorities: "",
        unSdgRequirements: "",
        reportingRequirements: "",
        timelineForGoals: "",
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
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow text-black"
    >
      <label className="block font-semibold mb-3">
        Company Name:
        <input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Industry:
        <input
          type="text"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <div className="block mt-2">
        <label className="block font-semibold mb-3">ESG Priorities:</label>
        {["Carbon Neutrality", "Biodiversity", "Social Impact"].map(
          (option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="esgPriorities"
                value={option}
                checked={formData.esgPriorities === option}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {option}
            </label>
          )
        )}
        <label className="block font-semibold mb-3">
          Other:
          <input
            type="text"
            name="esgPriorities"
            value={
              formData.esgPriorities === "Other" ? formData.esgPriorities : ""
            }
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
      </div>

      <label className="block font-semibold mb-3">
        UN SDG Requirements:
        <input
          type="text"
          name="unSdgRequirements"
          value={formData.unSdgRequirements}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Reporting Requirements:
        <input
          type="text"
          name="reportingRequirements"
          value={formData.reportingRequirements}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Timeline for Goals:
        <input
          type="text"
          name="timelineForGoals"
          value={formData.timelineForGoals}
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

export default CorporateEsdDepartmentRegistrationForm;
