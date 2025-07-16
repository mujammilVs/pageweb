import React, { useState } from "react";
import sampleImg from "../assets/page-images/info-1.png"; // Replace with your image path

const tabs = [
  {
    title: "Right STRATEGY",
    heading: "Banking Transformation STRATEGY",
    description: `The questions we address for our clients in this process are:

Ascertaining the current position, status, and readiness of people, processes, and systems will drive future STRATEGY. Developing a tailor-made strategic plan, obtaining stakeholder buy-in and executive commitment is critical at this stage. Page Solutions works closely with stakeholders to drive this initiative. We deliver client-centric assessment and current state analysis which coupled with current industry trends enables us to deliver a strategy that builds on growth levers and innovation.`,
    img: sampleImg,
  },
  {
    title: "Efficient PROCESSES",
    heading: "Digital PROCESS orchestration",
    description: `Process orchestration, refers to the practice of unifying individual tasks into end-to-end processes, often by using an extensible automation tool. This allows IT teams to manage the entire process lifecycle in a holistic way, including development, testing, monitoring, and managing.

Process Consultants at Page Solutions help clients review their current operating model, processes, and procedures. We support clients to identify optimization levers, re-engineering opportunities, and leveraging digital technologies to deliver an efficient scalable operating model.`,
    img: sampleImg,
  },
  {
    title: "Scalable SOLUTIONS",
    heading: "SOLUTION definition",
    description: `A Solution is only as good as the defined problem. At Page Solutions, we look at problems carefully and ask ourselves and the client  “are we solving the right problem?’’ 

Our solution definition approach is built around six key pillars: Business Needs, Analysis, Definition, Management, Innovation, and Implementation. We work in close coordination with our clients to define solutions that are deliverable, measurable, and scalable.

`,
    img: sampleImg,
  },
  {
    title: "Transparent GOVERNANCE",
    heading: "Transparent Governance Models",
    description: `The questions we address for our clients in this process are:

Ascertaining the current position, status, and readiness of people, processes, and systems will drive future STRATEGY. Developing a tailor-made strategic plan, obtaining stakeholder buy-in and executive commitment is critical at this stage. Page Solutions works closely with stakeholders to drive this initiative. We deliver client-centric assessment and current state analysis which coupled with current industry trends enables us to deliver a strategy that builds on growth levers and innovation.`,
    img: sampleImg,
  },
];

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
