import React, { useState } from "react";
import { tabs } from "../data/content";



const ServiceTabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="bg-white px-6 py-12">
      {/* Tabs */}
      <div className="flex justify-start border-b">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`relative px-6 py-3 font-medium transition-all duration-300 ${
              activeTab === idx
                ? "bg-blue-700 text-white"
                : "bg-gray-100 text-blue-700"
            }`}
          >
            {tab.title}
            {activeTab === idx && (
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-blue-700" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left - Text */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {current.heading}
          </h2>
          <p className="text-gray-700 whitespace-pre-line">
            {current.description}
          </p>
        </div>

        {/* Right - Image */}
        <div>
          <img
            src={current.img}
            alt="Tab visual"
            className=" h-auto rounded shadow-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceTabSection;
