import { useState } from "react";

interface FormData {
  communityName: string;
  location: string;
  stakeholderType: string;
  currentMangroveUse: string;
  communitySize: string;
  economicActivities: string;
  otherStakeholderType?: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const CommunityStakeholderRegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    communityName: "",
    location: "",
    stakeholderType: "",
    currentMangroveUse: "",
    communitySize: "",
    economicActivities: "",
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
        communityName: "",
        location: "",
        stakeholderType: "",
        currentMangroveUse: "",
        communitySize: "",
        economicActivities: "",
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
        Community Name:
        <input
          type="text"
          name="communityName"
          value={formData.communityName}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

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

      <div className="block mt-2">
        <label className="block font-semibold mb-3">Stakeholder Type:</label>
        {["Local Association", "Indigenous Group", "Fisher Folk", "Other"].map(
          (option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="stakeholderType"
                value={option}
                checked={formData.stakeholderType === option}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {option}
            </label>
          )
        )}
        {formData.stakeholderType === "Other" && (
          <input
            type="text"
            name="otherStakeholderType"
            value={formData.otherStakeholderType || ""}
            onChange={handleChange}
            placeholder="Please specify"
            className="w-full p-2 mt-1 border rounded"
          />
        )}
      </div>

      <label className="block font-semibold mb-3">
        Current Mangrove Use:
        <textarea
          name="currentMangroveUse"
          value={formData.currentMangroveUse}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Community Size:
        <input
          type="text"
          name="communitySize"
          value={formData.communitySize}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Economic Activities:
        <textarea
          name="economicActivities"
          value={formData.economicActivities}
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

export default CommunityStakeholderRegistrationForm;
