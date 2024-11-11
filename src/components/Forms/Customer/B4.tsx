import { useState } from "react";

interface FormData {
  organizationType: string;
  servicesOffered: string;
  otherServicesOffered?: string;
  technicalCapabilities: string;
  projectExperience: string;
  geographicCoverage: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const ConservationServiceProviderForm = () => {
  const [formData, setFormData] = useState<FormData>({
    organizationType: "",
    servicesOffered: "",
    technicalCapabilities: "",
    projectExperience: "",
    geographicCoverage: "",
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
        organizationType: "",
        servicesOffered: "",
        technicalCapabilities: "",
        projectExperience: "",
        geographicCoverage: "",
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

      <div className="flex flex-col">
        <label className="block font-semibold mb-3">Services Offered:</label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="servicesOffered"
            value="Restoration"
            checked={formData.servicesOffered === "Restoration"}
            onChange={handleChange}
          />
          <span>Restoration</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="servicesOffered"
            value="Monitoring"
            checked={formData.servicesOffered === "Monitoring"}
            onChange={handleChange}
          />
          <span>Monitoring</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="servicesOffered"
            value="Assessment"
            checked={formData.servicesOffered === "Assessment"}
            onChange={handleChange}
          />
          <span>Assessment</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="servicesOffered"
            value="Other"
            checked={formData.servicesOffered === "Other"}
            onChange={handleChange}
          />
          <span>Other:</span>
          {formData.servicesOffered === "Other" && (
            <input
              type="text"
              name="otherServicesOffered"
              value={formData.otherServicesOffered || ""}
              onChange={handleChange}
              placeholder="Please specify"
              className="w-full p-2 mt-1 border rounded"
            />
          )}
        </label>
      </div>

      <label className="block font-semibold mb-3">
        Technical Capabilities:
        <textarea
          name="technicalCapabilities"
          value={formData.technicalCapabilities}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Project Experience:
        <textarea
          name="projectExperience"
          value={formData.projectExperience}
          onChange={handleChange}
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Geographic Coverage:
        <textarea
          name="geographicCoverage"
          value={formData.geographicCoverage}
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

export default ConservationServiceProviderForm;
