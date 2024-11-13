import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
  ownerType: string;
  location: string;
  size: string;
  mangroveArea: string;
  currentLandUse: string;
  developmentPlans: string;
}

const LandownerRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Potential Customer",
    subCategory: "B6",
    ownerType: "",
    location: "",
    size: "",
    mangroveArea: "",
    currentLandUse: "",
    developmentPlans: "",
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
        subCategory: "B6",
        ownerType: "",
        location: "",
        size: "",
        mangroveArea: "",
        currentLandUse: "",
        developmentPlans: "",
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
      <div className="block mt-2">
        <label className="block font-semibold mb-3">Owner Type:</label>
        {["Private", "Corporate", "Community", "Government"].map((option) => (
          <label className="block font-semibold mb-3" key={option}>
            <input
              type="radio"
              name="ownerType"
              value={option}
              checked={formData.ownerType === option}
              onChange={handleRadioChange}
              className="mr-2"
            />
            {option}
          </label>
        ))}
      </div>

      <label className="block font-semibold mb-3">
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Size:
        <input
          type="text"
          name="size"
          value={formData.size}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Mangrove Area:
        <input
          type="text"
          name="mangroveArea"
          value={formData.mangroveArea}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Current Land Use:
        <textarea
          name="currentLandUse"
          value={formData.currentLandUse}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Development Plans:
        <textarea
          name="developmentPlans"
          value={formData.developmentPlans}
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

export default LandownerRegistrationForm;
