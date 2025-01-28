import React from "react";

function SelectedAd() {
  // CourseCard Component
  const CourseCard = () => {
    return (
      <div className="flex items-center justify-center grid-cols-1 gap-1 p-4 lg:grid-cols-2">
        
        <div>
            <div className="p-2 mb-4 rounded-sm shadow-sm ">
                <h1 className="mb-16 text-3xl font-medium text-center">UI/UX Design Course</h1>
                <p className="mb-4 text-gray-600">
                    Welcome to our UI/UX Design course! This comprehensive program will equip you with the knowledge and skills to create exceptional user interfaces (UI) and enhance user experiences (UX). Dive into the world of design thinking, wireframing, prototyping, and usability testing. Below is an overview of the curriculum
                </p>
            </div>
          
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
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
        <h3 className="mt-2 mb-8 text-xl font-semibold">{title}</h3>
      <div>
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-2 py-2 pb-2 mb-4 transition-all border-b rounded-lg group hover:outline hover:outline-2 hover:outline-softYellow"
          >
            <div>
              <p className="font-medium">{lesson.title}</p>
              <p className="text-sm text-gray-400">{lesson.lessonNumber}</p>
            </div>
            <span className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full group-hover:bg-softYellow">
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
    <div className="container p-6 mx-auto bg-gray-50">
      {/* Course Card */}
      <CourseCard />

      {/* Lesson Sections */}
      <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
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
