import React from "react";
import bgBox from "/home/bg-box.svg";
import roundImg from "/home/round-img.svg";
import wso2 from "/home/WSO2.svg";
import p99x1 from "/home/99x1.svg";
import virtusa from "/home/virtusa.svg";
import pagero from "/home/pagero.svg";
import { Button, Card } from "flowbite-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div
        className="bg-gray-500 bg-cover bg-center min-h-screen flex flex-col justify-center"
        style={{ backgroundImage: `url(${bgBox})` }}
      >
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col pr-10">
            <h1 className="text-5xl font-serif text-white font-semibold">
              Boost Your Brand With
            </h1>
            <h1 className="text-5xl font-serif text-blue-900 font-semibold">
              Tailored Sponsorship
            </h1>
            <h1 className="text-5xl font-serif text-white font-semibold">
              That Drive Impact
            </h1>
            <button className="bg-white text-black w-max my-10 rounded-xl hover:bg-blue-900 hover:text-white px-3 py-2">
              Contact Us
            </button>
          </div>
          <div className="flex pl-10">
            <div className="border-[4px] rounded-full p-9 border-gray-500 ">
              <div className="border-[4px] rounded-full p-9 border-gray-600">
                <img src={roundImg} className="h-80 w-80" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start pl-64">
          <h1 className="text-white pb-3">Trusted By Leading Brands</h1>
          <div className="flex flex-row gap-4 w-auto">
            <img src={wso2} alt="" />
            <img src={p99x1} alt="" />
            <img src={virtusa} alt="" />
            <img src={pagero} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-10 py-10">
        <h1 className="text-lg pb-3 font-bold text-blue-900">Our Services</h1>
        <h1 className="text-4xl font-semibold">High-Impact Services</h1>
        <h1 className="text-4xl font-semibold pb-10">from us</h1>
        <div className="flex flex-col gap-12">
          <div className="flex gap-12">
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">Event Sponsorship Matching</h1>
              <p className="text-sm font-sans">
                Connect sponsors with relevant events and conferences based on
                their business goals and target audience.
              </p>
            </Card>
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">
                Digital Advertising and Branding Opportunities
              </h1>
              <p className="text-sm font-sans">
                Unlock the power of visual storytelling with our expert graphic
                design services tailored to elevate your brand and captivate.
              </p>
            </Card>
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">Analytics and Reporting</h1>
              <p className="text-sm font-sans">
                Provide detailed metrics and reports to sponsors, showing them
                the reach and impact of their sponsorship, including
                impressions, clicks, and engagement levels.
              </p>
            </Card>
          </div>
          <div className="flex gap-12">
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">Networking and Relationship Building</h1>
              <p className="text-sm font-sans">
                Facilitate connections between sponsors, event organizers, and
                other businesses to foster long-term partnerships.
              </p>
            </Card>
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">Branded Content Creation</h1>
              <p className="text-sm font-sans">
                Assist sponsors in creating branded content (such as promotional
                videos or articles) to increase engagement at the event.
              </p>
            </Card>
            <Card className="w-[300px] h-[250px] rounded-2xl hover:bg-blue-900 hover:text-white transition-all">
              <h1 className="text-xl">
                Social Media and Influencer Collaborations
              </h1>
              <p className="text-sm font-sans">
                Partner with influencers or social media personalities relevant
                to the sponsor’s niche to promote their brand during events.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-blue-600 text-white p-4 mt-6">
        <p className="text-center">
          &copy; 2023 SponX University. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
