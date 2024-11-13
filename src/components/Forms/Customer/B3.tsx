import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  organizationType: string;
  purchaseMotivation: string;
  otherPurchaseMotivation?: string;
  annualVolumeNeed: string;
  priceRange: string;
  creditTypePreference: string;
  otherCreditTypePreference?: string;
  verificationRequirements: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const EnvironmentalCreditsPurchaserForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Potential Customer",
    subCategory: "B3",
    organizationType: "",
    purchaseMotivation: "",
    annualVolumeNeed: "",
    priceRange: "",
    creditTypePreference: "",
    verificationRequirements: "",
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
        category: "Potential Customer",
        subCategory: "B3",
        organizationType: "",
        purchaseMotivation: "",
        annualVolumeNeed: "",
        priceRange: "",
        creditTypePreference: "",
        verificationRequirements: "",
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
      <div className="flex flex-col">
        <label htmlFor="organizationType" className="font-semibold block mb-3">
          Organization Type:
          <input
            type="text"
            name="organizationType"
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold block mt-3">Purchase Motivation:</label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="purchaseMotivation"
            value="Compliance"
            checked={formData.purchaseMotivation === "Compliance"}
            onChange={handleChange}
          />
          <span>Compliance</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="purchaseMotivation"
            value="Voluntary"
            checked={formData.purchaseMotivation === "Voluntary"}
            onChange={handleChange}
          />
          <span>Voluntary</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="purchaseMotivation"
            value="Investment"
            checked={formData.purchaseMotivation === "Investment"}
            onChange={handleChange}
          />
          <span>Investment</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="purchaseMotivation"
            value="Other"
            checked={formData.purchaseMotivation === "Other"}
            onChange={handleChange}
          />
          <span>Other:</span>
          {formData.purchaseMotivation === "Other" && (
            <input
              type="text"
              name="otherPurchaseMotivation"
              value={formData.otherPurchaseMotivation || ""}
              onChange={handleChange}
              placeholder="Please specify"
              className="w-full p-2 border rounded"
            />
          )}
        </label>
      </div>

      <div className="flex flex-col">
        <label htmlFor="annualVolumeNeed" className="font-semibold block mb-3">
          Annual Volume Need:
          <input
            type="text"
            name="annualVolumeNeed"
            value={formData.annualVolumeNeed}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>

      <div className="flex flex-col">
        <label htmlFor="priceRange" className="font-semibold block mb-3">
          Price Range (USD):
          <input
            type="text"
            name="priceRange"
            value={formData.priceRange}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold block mt-3">
          Credit Type Preference:
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="creditTypePreference"
            value="Carbon"
            checked={formData.creditTypePreference === "Carbon"}
            onChange={handleChange}
          />
          <span>Carbon</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="creditTypePreference"
            value="Biodiversity"
            checked={formData.creditTypePreference === "Biodiversity"}
            onChange={handleChange}
          />
          <span>Biodiversity</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="creditTypePreference"
            value="Blue Carbon"
            checked={formData.creditTypePreference === "Blue Carbon"}
            onChange={handleChange}
          />
          <span>Blue Carbon</span>
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            className="mr-2"
            name="creditTypePreference"
            value="Other"
            checked={formData.creditTypePreference === "Other"}
            onChange={handleChange}
          />
          <span>Other:</span>
          {formData.creditTypePreference === "Other" && (
            <input
              type="text"
              name="otherCreditTypePreference"
              value={formData.otherCreditTypePreference || ""}
              onChange={handleChange}
              placeholder="Please specify"
              className="w-full p-2 border rounded"
            />
          )}
        </label>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="verificationRequirements"
          className="font-semibold block mb-3"
        >
          Verification Requirements:
          <textarea
            name="verificationRequirements"
            value={formData.verificationRequirements}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </label>
      </div>

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

export default EnvironmentalCreditsPurchaserForm;
