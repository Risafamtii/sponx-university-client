import React from "react";

function SelectedAd() {
  // CourseCard Component
  const CourseCard = () => {
    return (
      <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-1 flex justify-center items-center">
        
        <div>
            <div className="rounded-sm shadow-sm p-2 mb-4 ">
                <h1 className="text-3xl font-medium text-center mb-16">UI/UX Design Course</h1>
                <p className="text-gray-600 mb-4">
                    Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum
                </p>
            </div>
          
        </div>

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src="/Container.png" 
            alt="UI/UX Course"
            className="rounded-lg"
          />
        </div>
      </div>
    );
  };

  const LessonSection = ({ sectionNumber, title, lessons }) => {
    return (
      <div className="p-4 bg-white rounded-md shadow-sm">
        <h2 className="text-4xl font-bold text-right">{sectionNumber}</h2>
        <h3 className="text-xl font-semibold mt-2 mb-8">{title}</h3>
      <div>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="group flex justify-between items-center mb-4 border-b pb-2 transition-all hover:outline hover:outline-2 hover:outline-softYellow rounded-lg px-2 py-2"
          >
            <div>
              <p className="font-medium">{lesson.title}</p>
              <p className="text-sm text-gray-400">{lesson.lessonNumber}</p>
            </div>
            <span className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full group-hover:bg-softYellow">
              {lesson.time}
            </span>
          </div>
        ))}
      </div>

      </div>
    );
  };
  

  // Section Data
  const sections = [
    {
      sectionNumber: "01",
      title: "Event Info",
      lessons: [
        {
          title: "Understanding UI/UX Design Principles",
          lessonNumber: "Lesson 01",
          time: "45 Minutes",
        },
        {
          title: "Importance of User-Centered Design",
          lessonNumber: "Lesson 02",
          time: "1 Hour",
        },
        {
          title: "The Role of UI/UX Design in Product Development",
          lessonNumber: "Lesson 03",
          time: "45 Minutes",
        },
      ],
    },
    {
      sectionNumber: "02",
      title: "User Research and Analysis",
      lessons: [
        {
          title: "Conducting User Research and Interviews",
          lessonNumber: "Lesson 01",
          time: "1 Hour",
        },
        {
          title: "Analyzing User Needs and Behavior",
          lessonNumber: "Lesson 02",
          time: "1 Hour",
        },
        {
          title: "Creating User Personas and Scenarios",
          lessonNumber: "Lesson 03",
          time: "45 Minutes",
        },
      ],
    },
    {
      sectionNumber: "03",
      title: "Wireframing and Prototyping",
      lessons: [
        {
          title: "Introduction to Wireframing Tools and Techniques",
          lessonNumber: "Lesson 01",
          time: "1 Hour",
        },
        {
          title: "Creating Low-Fidelity Wireframes",
          lessonNumber: "Lesson 02",
          time: "1 Hour",
        },
        {
          title: "Prototyping and Interactive Mockups",
          lessonNumber: "Lesson 03",
          time: "1 Hour",
        },
      ],
    },
    {
      sectionNumber: "04",
      title: "Visual Design and Branding",
      lessons: [
        {
          title: "Color Theory and Typography in UI Design",
          lessonNumber: "Lesson 01",
          time: "1 Hour",
        },
        {
          title: "Visual Hierarchy and Layout Design",
          lessonNumber: "Lesson 02",
          time: "1 Hour",
        },
        {
          title: "Creating a Strong Brand Identity",
          lessonNumber: "Lesson 03",
          time: "45 Minutes",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      {/* Course Card */}
      <CourseCard />

      {/* Lesson Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {sections.map((section, index) => (
          <LessonSection
            key={index}
            sectionNumber={section.sectionNumber}
            title={section.title}
            lessons={section.lessons}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectedAd;
