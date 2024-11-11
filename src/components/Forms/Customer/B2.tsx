import { useState } from "react";

interface FormData {
  category: string;
  subCategory: string;
  organizationType: string;
  purchaseMotivation: string[];
  otherPurchaseMotivation?: string;
  annualVolumeNeed: string;
  priceRange: string;
  creditTypePreference: string[];
  otherCreditTypePreference?: string;
  verificationRequirements: string;
  registrationDate: string;
  referralSource: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const PurchaseMotivationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "Potential Customer",
    subCategory: "B2",
    organizationType: "",
    purchaseMotivation: [],
    annualVolumeNeed: "",
    priceRange: "",
    creditTypePreference: [],
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
        subCategory: "B2",
        organizationType: "",
        purchaseMotivation: [],
        annualVolumeNeed: "",
        priceRange: "",
        creditTypePreference: [],
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
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow"
    >
      <label className="block font-semibold mb-3">
        Organization Type:
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">Purchase Motivation:</label>
      <div>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="purchaseMotivation"
            value="Compliance"
            checked={formData.purchaseMotivation.includes("Compliance")}
            onChange={handleChange}
            className="mr-2"
          />
          Compliance
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="purchaseMotivation"
            value="Voluntary"
            checked={formData.purchaseMotivation.includes("Voluntary")}
            onChange={handleChange}
            className="mr-2"
          />
          Voluntary
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="purchaseMotivation"
            value="Investment"
            checked={formData.purchaseMotivation.includes("Investment")}
            onChange={handleChange}
            className="mr-2"
          />
          Investment
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="purchaseMotivation"
            value="Other"
            checked={formData.purchaseMotivation.includes("Other")}
            onChange={handleChange}
            className="mr-2"
          />
          Other:
        </label>
        {formData.purchaseMotivation.includes("Other") && (
          <input
            type="text"
            name="otherPurchaseMotivation"
            value={formData.otherPurchaseMotivation || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Please specify"
          />
        )}
      </div>

      <label className="block font-semibold mb-3">
        Annual Volume Need:
        <input
          type="text"
          name="annualVolumeNeed"
          value={formData.annualVolumeNeed}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Price Range (USD):
        <input
          type="text"
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </label>

      <label className="block font-semibold mb-3">
        Credit Type Preference:
      </label>
      <div>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="creditTypePreference"
            value="Carbon"
            checked={formData.creditTypePreference.includes("Carbon")}
            onChange={handleChange}
            className="mr-2"
          />
          Carbon
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="creditTypePreference"
            value="Biodiversity"
            checked={formData.creditTypePreference.includes("Biodiversity")}
            onChange={handleChange}
            className="mr-2"
          />
          Biodiversity
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="creditTypePreference"
            value="Blue Carbon"
            checked={formData.creditTypePreference.includes("Blue Carbon")}
            onChange={handleChange}
            className="mr-2"
          />
          Blue Carbon
        </label>
        <label className="block font-semibold mb-3">
          <input
            type="radio"
            name="creditTypePreference"
            value="Other"
            checked={formData.creditTypePreference.includes("Other")}
            onChange={handleChange}
            className="mr-2"
          />
          Other:
        </label>
        {formData.creditTypePreference.includes("Other") && (
          <input
            type="text"
            name="otherCreditTypePreference"
            value={formData.otherCreditTypePreference || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Please specify"
          />
        )}
      </div>

      <label className="block font-semibold mb-3">
        Verification Requirements:
        <textarea
          name="verificationRequirements"
          value={formData.verificationRequirements}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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

      <button type="submit">Submit</button>
    </form>
  );
};

export default PurchaseMotivationForm;
