import React from "react";
import { connectus } from "../data/content";

const LocateUs = () => {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-wrap justify-around gap-y-10">
        {connectus.map((each) => (
          <div
            key={each.id}
            className="border rounded-lg shadow-md bg-white w-full max-w-xs p-6 text-center relative"
          >
            {/* Diamond icon box */}
            <div className="w-12 h-12 bg-cyan-700 rotate-45 mx-auto absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <img
                src={each.logo}
                className="-rotate-45 text-white"
                width={30}
              />
            </div>

            <div className="mt-8">
              <h1 className="text-lg font-semibold mb-2">{each.from}</h1>
              <p className="text-sm text-gray-600 whitespace-pre-line">
                {each.address}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocateUs;
