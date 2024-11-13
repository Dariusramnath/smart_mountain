import { useState } from "react";

// Define the type for the form data
interface FormData {
  category: string;
  subCategory: string;
  organizationName: string;
  typeOfInvestor: string;
  primaryContact: string;
  position: string;
  emailOrPhone: string;
  investmentFocus: string;
  typicalSize: string;
  stagePreference: string;
  specialRequirements: string;
  valueAddCapabilities: string;
  registrationDate: string;
  howDidYouHear: string;
  interestInJamaicaPilot: string;
  platformAccessRequirements: string;
  additionalComments: string;
}

const A5Form = () => {
  // Initialize the form state
  const [formData, setFormData] = useState<FormData>({
    category: "Investor",
    subCategory: "A5",
    organizationName: "",
    typeOfInvestor: "",
    primaryContact: "",
    position: "",
    emailOrPhone: "",
    investmentFocus: "",
    typicalSize: "",
    stagePreference: "",
    specialRequirements: "",
    valueAddCapabilities: "",
    registrationDate: "",
    howDidYouHear: "",
    interestInJamaicaPilot: "",
    platformAccessRequirements: "",
    additionalComments: "",
  });

  // Handle form input change
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle radio input change
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the POST request to the server
    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    let result;
    try {
      // Attempt to parse the response as JSON
      result = await response.json();
    } catch (error) {
      // Handle invalid JSON response
      alert("Invalid response from the server.");
      return;
    }

    // Check if the response is OK (status 200-299)
    if (response.ok) {
      alert("Form submitted successfully!");

      // Reset the form data
      setFormData({
        category: "Investor",
        subCategory: "A5",
        organizationName: "",
        typeOfInvestor: "",
        primaryContact: "",
        position: "",
        emailOrPhone: "",
        investmentFocus: "",
        typicalSize: "",
        stagePreference: "",
        specialRequirements: "",
        valueAddCapabilities: "",
        registrationDate: "",
        howDidYouHear: "",
        interestInJamaicaPilot: "",
        platformAccessRequirements: "",
        additionalComments: "",
      });
    } else {
      // Handle error response from the server
      alert("Error submitting form: " + result?.error || "Unknown error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-4 w-full mx-auto bg-white rounded shadow text-black"
    >
      {/* Organization Name */}
      <label className="block font-semibold mb-3">
        Organization Name:
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Type of Investor */}
      <label className="block font-semibold mb-3">
        Type of Investor:
        <input
          type="text"
          name="typeOfInvestor"
          value={formData.typeOfInvestor}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Primary Contact */}
      <label className="block font-semibold mb-3">
        Primary Contact:
        <input
          type="text"
          name="primaryContact"
          value={formData.primaryContact}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Position/Title */}
      <label className="block font-semibold mb-3">
        Position/Title:
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Email/Phone */}
      <label className="block font-semibold mb-3">
        Email/Phone:
        <input
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      <div>
        {/* Investment Focus */}
        <label className="block font-semibold mb-3">
          Investment Focus:
          <input
            type="text"
            name="investmentFocus"
            value={formData.investmentFocus}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        {/* Typical Size */}
        <label className="block font-semibold mb-3">
          Typical Size (USD):
          {["<$500K", "$500K-$2M", ">$2M"].map((size) => (
            <label className="block font-semibold mb-3" key={size}>
              <input
                type="radio"
                name="typicalSize"
                value={size}
                checked={formData.typicalSize === size}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {size}
            </label>
          ))}
        </label>

        {/* Stage Preference */}
        <label className="block font-semibold mb-3">
          Stage Preference:
          <input
            type="text"
            name="stagePreference"
            value={formData.stagePreference}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>
      </div>

      {/* Special Requirements */}
      <label className="block font-semibold mb-3">
        Special Requirements:
        <textarea
          name="specialRequirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Value-Add Capabilities */}
      <label className="block font-semibold mb-3">
        Value-Add Capabilities:
        <textarea
          name="valueAddCapabilities"
          value={formData.valueAddCapabilities}
          onChange={handleChange}
          required
          className="w-full p-2 mt-1 border rounded"
        />
      </label>

      {/* Common Fields for All Forms */}
      <div className="mt-4">
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
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        {/* Interest in Jamaica Pilot */}
        <div className="block mt-2">
          <label className="block font-semibold mb-3">
            Interest in Jamaica Pilot:
          </label>
          {["Yes", "No", "Maybe"].map((option) => (
            <label className="block font-semibold mb-3" key={option}>
              <input
                type="radio"
                name="interestInJamaicaPilot"
                value={option}
                checked={formData.interestInJamaicaPilot === option}
                onChange={handleRadioChange}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>

        <label className="block font-semibold mb-3">
          Platform Access Requirements:
          <textarea
            name="platformAccessRequirements"
            value={formData.platformAccessRequirements}
            onChange={handleChange}
            required
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
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease"
      >
        Submit
      </button>
    </form>
  );
};

export default A5Form;
