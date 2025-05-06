import React from 'react';
import { Footer } from "flowbite-react";
import { 
  BsFacebook, 
  BsLinkedin, 
  BsTwitter, 
  BsInstagram, 
  BsYoutube 
} from "react-icons/bs";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import logo from "/logo.svg";

export default function FooterComp() {
  return (
    <Footer container className="border-t border-gray-200 bg-gray-50">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Footer.Brand
              href="/"
              src={logo}
              alt="UPNECT Logo"
              className="w-32"
            />
            <p className="text-sm text-gray-600">
              Connecting events with the perfect sponsors to create meaningful partnerships.
            </p>
            <div className="flex space-x-4">
              <Footer.Icon 
                href="#" 
                icon={BsFacebook} 
                className="text-gray-600 transition-colors hover:text-blue-600" 
              />
              <Footer.Icon 
                href="#" 
                icon={BsLinkedin} 
                className="text-gray-600 transition-colors hover:text-blue-700" 
              />
              <Footer.Icon 
                href="#" 
                icon={BsTwitter} 
                className="text-gray-600 transition-colors hover:text-blue-400" 
              />
              <Footer.Icon 
                href="#" 
                icon={BsInstagram} 
                className="text-gray-600 transition-colors hover:text-pink-600" 
              />
              <Footer.Icon 
                href="#" 
                icon={BsYoutube} 
                className="text-gray-600 transition-colors hover:text-red-600" 
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <Footer.Title title="Quick Links" className="mb-4 text-sm font-semibold text-gray-800 uppercase" />
            <Footer.LinkGroup col className="space-y-2">
              <Footer.Link 
                href="/about" 
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                About Us
              </Footer.Link>
              <Footer.Link 
                href="/events" 
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Events
              </Footer.Link>
              <Footer.Link 
                href="/sponsors" 
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                For Sponsors
              </Footer.Link>
              <Footer.Link 
                href="/organizers" 
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                For Organizers
              </Footer.Link>
            </Footer.LinkGroup>
          </div>

         
          {/* Contact Info */}
          <div>
            <Footer.Title title="Contact Us" className="mb-4 text-sm font-semibold text-gray-800 uppercase" />
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start">
                <HiLocationMarker className="flex-shrink-0 mt-1 mr-2 text-gray-500" />
                <span className="text-sm">
                  9.1/1 Rampart St,<br />
                  Fort,Galle
                </span>
              </div>
              <div className="flex items-center">
                <HiMail className="mr-2 text-gray-500" />
                <a 
                  href="mailto:info@upnect.com" 
                  className="text-sm transition-colors hover:text-blue-600"
                >
                  upnectspon@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <HiPhone className="mr-2 text-gray-500" />
                <a 
                  href="tel:+11234567890" 
                  className="text-sm transition-colors hover:text-blue-600"
                >+11 (011) 224-7897
                </a>
              </div>
            </div>
          </div>
        </div>

        <Footer.Divider className="my-8 border-gray-300" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <Footer.Copyright 
            href="/" 
            by="UPNECT" 
            year={new Date().getFullYear()} 
            className="text-gray-600"
          />
          <div className="flex mt-4 space-x-6 md:mt-0">
            <Footer.Link 
              href="/privacy" 
              className="text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link 
              href="/terms" 
              className="text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              Terms of Service
            </Footer.Link>
            <Footer.Link 
              href="/cookies" 
              className="text-sm text-gray-600 transition-colors hover:text-blue-600"
            >
              Cookie Policy
            </Footer.Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}