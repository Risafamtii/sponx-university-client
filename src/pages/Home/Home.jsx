import React from "react";
import bgBox from "/home/bg-box.svg";
import roundImg from "/home/round-img.svg";
import wso2 from "/home/WSO2.svg";
import p99x1 from "/home/99x1.svg";
import virtusa from "/home/virtusa.svg";
import pagero from "/home/pagero.svg";
import coreimg from "/home/core-mission-img.svg";
import event1 from "/home/events/event1.svg";
import event2 from "/home/events/event2.svg";
import event3 from "/home/events/event3.svg";
import event4 from "/home/events/event4.svg";
import { Button, Card } from "flowbite-react";
import { FaArrowCircleRight } from "react-icons/fa";

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

            <button className="bg-white flex text-black w-max my-10 rounded-full hover:bg-blue-900 hover:text-white px-3 py-2">
              <FaArrowCircleRight className="h-6 mr-3" />
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

      <div className="bg-blue-950 bg-cover bg-center min-h-screen flex flex-col justify-center">
        <div className="flex flex-row items-center justify-center">
          <div className="flex pr-10">
            <img src={coreimg} className="max-h-[500px] max-w-[500px]" alt="" />
          </div>
          <div className="flex flex-col pl-10 flew-col">
            <h1 className="text-5xl font-serif pb-3 text-white font-semibold">
              The Core Mission Work
            </h1>

            <h1 className="text-5xl font-serif pb-3 text-white font-semibold">
              Behind All Our
            </h1>
            <h1 className="text-5xl font-serif pb-3 text-white font-semibold">
              Work
            </h1>
            <p className="text-white font-sans pt-5 max-w-[500px]">
              Our mission is to connect brands with the right events and
              audiences, creating meaningful experiences that drive real
              results.
            </p>

            <div className="flex gap-12 pt-5 mt-8">
              <div className="flex flex-col items-center">
                <h1 className="text-5xl font-serif pb-3 text-white font-semibold">
                  25 +
                </h1>
                <p className="text-md font-serif pb-3 text-white ">
                  Companies Helped
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-5xl font-serif pb-3 text-white font-semibold">
                  36k +
                </h1>
                <p className="text-md font-serif pb-3 text-white ">
                  Revenue Generated
                </p>
              </div>
            </div>
            <button className="bg-white text-black w-max my-10 flex rounded-full hover:bg-blue-900 hover:text-white px-3 py-2">
              <FaArrowCircleRight className="h-6 mr-3" />
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center px-10 py-10">
        <h1 className="text-4xl font-bold pb-10">Upcoming Events</h1>
        <div className="flex flex-row gap-28">
          <div className="flex flex-col gap-20">
            <div className="w-[400px] h-[300px] transition-all">
              <img src={event1} alt="" />
              <h1 className="text-xl pt-2 font-semibold">IEEE Xtream </h1>
              <p className="text-sm text-gray-600">
                University of Colombo - UCSC
              </p>
            </div>
            <div className="w-[400px] h-[300px] transition-all">
              <img src={event2} alt="" />
              <h1 className="text-xl pt-2 font-semibold">Back To Moon</h1>
              <p className="text-sm text-gray-600">
                University of Peradeniya - FoE
              </p>
            </div>
            <button className="bg-black text-white w-max flex rounded-full items-end hover:bg-blue-900 hover:text-white px-3 py-2">
              <FaArrowCircleRight className="h-6 mr-3" />
              Explore More
            </button>
          </div>
          <div className="flex flex-col pt-28 pb-10 gap-20">
            <div className="w-[400px] h-[300px]transition-all">
              <img src={event3} alt="" />
              <h1 className="text-xl pt-2 font-semibold">Green Global</h1>
              <p className="text-sm text-gray-600">
                University of Peradeniya - FoA
              </p>
            </div>
            <div className="w-[400px] h-[300px] transition-all">
              <img src={event4} alt="" />

              <h1 className="text-xl pt-2 font-semibold">Round The Gravity</h1>
              <p className="text-sm text-gray-600">
                University of Colombo - FoS
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
