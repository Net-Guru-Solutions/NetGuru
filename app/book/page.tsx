"use client";

import { InlineWidget } from "react-calendly";

const Book = () => {
  return (
    <>
      <div className="w-full lg:grid lg:min-h-[80%] lg:grid-cols-2 xl:min-h-[90%]">
        <div className="flex flex-col items-center justify-center py-12 px-6 lg:px-12">
          <div className="text-4xl pb-5 md:text-6xl text-center 
          bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Book a meeting
          </div>
          <div className="text-lg text-center md:text-xl text-gray-700 mb-8">
            Prepare for your free 30-minute consultation
          </div>
          <ul className="list-disc text-left text-gray-600 space-y-4">
            <li><strong>Business Goals:</strong> Think about your short-term and long-term business goals.</li>
            <li><strong>Current Challenges:</strong> Be ready to discuss any current challenges you are facing.</li>
            <li><strong>Website Details:</strong> Have your current website details and any relevant analytics.</li>
            <li><strong>Marketing Strategies:</strong> Bring information about your current marketing strategies.</li>
            <li><strong>Project Timeline:</strong> Consider your ideal timeline for project completion.</li>
          </ul>
        </div>


        <InlineWidget url="https://calendly.com/netgurusolutions/30min" styles={{ height: '100%' }} />

      </div>
    </>
  );
};

export default Book;
