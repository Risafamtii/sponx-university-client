import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaArrowRight, FaHandshake, FaSearch, FaFileContract, FaChartLine, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Home() {
 
  
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <CTASection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      
    </div>
  );
  
}

const HeroSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const navigate = useNavigate();
  const handleClickLogin =() => {
    navigate('/login');
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-black"
      ></motion.div>
      
      <div className="container z-10 px-6 mx-auto">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
              visible: { 
                opacity: 1, 
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" }
              },
              hidden: { opacity: 0, x: -50 }
            }}
            className="mb-16 lg:w-1/2 lg:mb-0"
          >
            <motion.h1 
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl"
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2, duration: 0.8 }
                },
                hidden: { opacity: 0, y: 20 }
              }}
            >
              <span className="block">Connect Events with</span>
              <motion.span 
                className="text-blue-300"
                animate={{
                  color: ["#93c5fd", "#bfdbfe", "#93c5fd"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Perfect Sponsors
              </motion.span>
              <span className="block">Seamlessly</span>
            </motion.h1>
            
            <motion.p
              variants={{
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.4, duration: 0.8 }
                },
                hidden: { opacity: 0, y: 20 }
              }}
              className="max-w-lg mb-8 text-xl text-blue-100"
            >
              Upnect bridges event organizers with ideal sponsors to create impactful partnerships
            </motion.p>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.button
              onClick={handleClickLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.6, duration: 0.8 }
                  },
                  hidden: { opacity: 0, y: 20 }
                }}
                
                className="flex items-center px-8 py-4 font-semibold text-blue-900 bg-white rounded-full shadow-lg hover:bg-blue-100"
              >
                Find Sponsors <FaArrowRight className="ml-3" />
              </motion.button>
              
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute bg-blue-800 rounded-full w-80 h-80 md:w-96 md:h-96 -top-6 -left-6"
              ></motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 2
                }}
                className="absolute bg-blue-600 rounded-full w-80 h-80 md:w-96 md:h-96 -bottom-6 -right-6"
              ></motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative flex items-center justify-center overflow-hidden bg-white border-2 border-white shadow-2xl w-80 h-80 md:w-96 md:h-96 bg-opacity-10 backdrop-blur-sm rounded-3xl border-opacity-20"
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Event Sponsorship" 
                  className="object-cover w-full h-full"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3, ease: "easeOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSolutionSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-blue-50" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">We Solve Your Sponsorship Challenges</h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 ">
            Whether you're organizing events or looking to sponsor them, we've got you covered
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-12 md:grid-cols-2"
        >
          <motion.div 
            variants={item}
            className="p-8 border border-gray-200 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 mr-4 bg-blue-100 rounded-lg">
                <FaHandshake className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Event Organizers</h3>
            </div>
            <p className="mb-6 text-gray-600">
              Struggling to fund your event? We match you with sponsors who align with your audience.
            </p>
            <ul className="space-y-3">
              {[
                "Access to vetted sponsors in your niche",
                "Pitch templates and negotiation tools",
                "Secure payment processing"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="p-8 border border-gray-200 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 mr-4 bg-green-100 rounded-lg">
                <FaSearch className="text-2xl text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Sponsors</h3>
            </div>
            <p className="mb-6 text-gray-600">
              Want targeted brand exposure? We connect you with high-potential events in your niche.
            </p>
            <ul className="space-y-3">
              {[
                "Detailed audience analytics",
                "ROI tracking dashboard",
                "Flexible sponsorship tiers"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const HowItWorksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const steps = [
    {
      icon: <FaSearch className="text-3xl" />,
      title: "List or Browse",
      description: "Organizers post events / Sponsors set preferences"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Post about your Event",
      description: "Posting about the event might help the sponsors"
    },
    {
      icon: <FaFileContract className="text-3xl" />,
      title: "Seal the Deal",
      description: "Negotiate terms and finalize agreements securely"
    }
  ];

  return (
    <section className="py-20 bg-blue-900 " ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-blue-200 md:text-5xl">How Upnect Works</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-100">
            Simple steps to create successful sponsorships
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="p-8 text-center transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl"
            >
              <motion.div 
                className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-full"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {step.icon}
              </motion.div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 text-2xl font-bold text-blue-600">{index + 1}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const features = [
    {
      title: "Curated Matches",
      description: "We analyze 20+ factors to ensure perfect sponsor-event alignment",
      icon: "🔍"
    },
    {
      title: "Audience Insights",
      description: "Detailed demographics and engagement metrics for every event",
      icon: "📊"
    },
    {
      title: "Secure Payments",
      description: "Escrow system ensures sponsors get what they pay for",
      icon: "💰"
    },
    {
      title: "Pitch Toolkit",
      description: "Templates and guides to create winning sponsorship proposals",
      icon: "📝"
    },
    {
      title: "ROI Tracking",
      description: "Measure impressions, leads, and conversions from your sponsorships",
      icon: "📈"
    },
    {
      title: "Dedicated Support",
      description: "Our team helps negotiate and close deals successfully",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">Why Choose Upnect</h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Everything you need for successful sponsorships in one platform
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="p-6 border border-gray-200 bg-gray-50 rounded-xl"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const testimonials = [
    {
      quote: "Upnect helped us secure 3 sponsors in 2 weeks! The platform made it easy to find brands that aligned with our audience.",
      author: "Sarah K., Tech Conference Organizer",
      role: "Event Director"
    },
    {
      quote: "We doubled our leads by sponsoring vetted events through Upnect. The audience analytics helped us choose perfect matches.",
      author: "Michael T., Marketing Director",
      role: "Sponsor"
    },
    {
      quote: "500+ Successful Connections | $2M+ Sponsorship Value Generated",
      author: "Our Impact",
      role: "Community Stats"
    }
  ];

  return (
    <section className="py-20 text-white bg-blue-900" ref={ref}>
      <div className="container px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Trusted by Event Creators & Brands</h2>
          <p className="max-w-2xl mx-auto text-xl text-blue-200">
            Join hundreds who've transformed their sponsorship strategy
          </p>
        </motion.div>
        
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -10 }}
              className="p-8 bg-blue-800 bg-opacity-50 rounded-xl backdrop-blur-sm"
            >
              <div className="mb-6 text-2xl">"</div>
              <p className="mb-6 text-lg">{testimonial.quote}</p>
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-blue-200">{testimonial.role}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0.9 }
          }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl p-12 mx-auto bg-gray-300 shadow-xl rounded-2xl"
        >
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Ready to Transform Your Sponsorships?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600">
            Join now and get early-access benefits
          </p>
          
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 mx-auto font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 sm:mx-0"
            >
              Get Started as Organizer <FaArrowRight className="ml-3" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-4 mx-auto font-semibold text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 sm:mx-0"
            >
              Explore as Sponsor <FaArrowRight className="ml-3" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};