import React, { useState } from "react";

const SendParcel = () => {
  const [parcelName, setParcelName] = useState("");
  const [weight, setWeight] = useState("");
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <header className="bg-gray-900 text-white py-4">
        <div className="container mx-auto">
          <div id="branding">
            <h1 className="text-3xl">
              <a href="index.html">
                <span id="trackerText">Parcel<span className="text-yellow-500">Pal</span></span>
              </a>
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="dashboard.html">Dashboard</a>
              </li>
              <li>
                <a className="current" href="parcel.html">
                  Parcel
                </a>
              </li>
              <li>
                <a href="index.html">Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-yellow-300 py-16">
        <div className="container mx-auto">
          <div className="white-login bg-white p-8 rounded-lg">
            <h3 className="text-3xl text-center">Create New Parcel</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="parcel"
                  placeholder="Parcel Name"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={parcelName}
                  onChange={(e) => setParcelName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="weight"
                  placeholder="Weight(Kg)"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="location"
                  placeholder="Location"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="destination"
                  placeholder="Destination"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <button
                id="buttonSubmit"
                type="submit"
                className="bg-black text-yellow-500 p-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>
            <span id="trackerText">Parsel<span className="text-yellow-500">Pal</span></span>,
            Copyright &copy; 2023
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SendParcel;
