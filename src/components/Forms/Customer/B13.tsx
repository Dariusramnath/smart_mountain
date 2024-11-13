import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
  organizationType: string;
  primaryInterest: string;
  potentialRole: string;
  valueProposition: string;
  platformRequirements: string;
}

const OtherStakeholderRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Potential Customer",
    subCategory: "B13",
    organizationType: "",
    primaryInterest: "",
    potentialRole: "",
    valueProposition: "",
    platformRequirements: "",
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
        subCategory: "B13",
        organizationType: "",
        primaryInterest: "",
        potentialRole: "",
        valueProposition: "",
        platformRequirements: "",
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
        Organization Type:
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Primary Interest:
        <input
          type="text"
          name="primaryInterest"
          value={formData.primaryInterest}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Potential Role:
        <input
          type="text"
          name="potentialRole"
          value={formData.potentialRole}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Value Proposition:
        <input
          type="text"
          name="valueProposition"
          value={formData.valueProposition}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Platform Requirements:
        <textarea
          name="platformRequirements"
          value={formData.platformRequirements}
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

export default OtherStakeholderRegistrationForm;
