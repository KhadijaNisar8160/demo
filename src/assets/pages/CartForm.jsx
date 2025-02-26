import { useState } from "react";

const CartForm = () => {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="w-full max-w-lg mx-auto p-5">
      <h1 className="font-bold mb-5 text-lg sm:text-xl">Shipping Address</h1>

      <form className="space-y-4">
        {/* Country Dropdown */}
        <select className="border outline-none w-full p-3 rounded">
          <option value="1">Select Country</option>
          <option value="2">United States</option>
        </select>

        {/* First & Last Name Fields */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border p-3 outline-none w-full placeholder:text-black rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border p-3 outline-none w-full placeholder:text-black rounded"
          />
        </div>

        {/* Shipping Address */}
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          className="border p-3 outline-none w-full placeholder:text-black rounded"
        />

        {/* City & State */}
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="w-full border outline-none p-3 placeholder:text-black rounded"
          />

          <select
            name="state"
            className="border outline-none w-full p-3 placeholder:text-black rounded"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        {/* Zip Code */}
        <input
          type="text"
          name="zip"
          placeholder="Zip Code"
          className="border p-3 outline-none w-full sm:w-1/2 placeholder:text-black rounded"
        />
      </form>
    </div>
  );
};

export default CartForm;
