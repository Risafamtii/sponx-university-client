import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Test Landing page</h1>
      </header>
      <main className="p-4">
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-700">Learn more about our mission, vision, and values.</p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Programs</h2>
          <p className="text-gray-700">Explore the various programs we offer to help you achieve your goals.</p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-2">Admissions</h2>
          <p className="text-gray-700">Find out how to apply and join our community.</p>
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-700">Get in touch with us for any queries or support.</p>
        </section>
      </main>
      <footer className="bg-blue-600 text-white p-4 mt-6">
        <p className="text-center">&copy; 2023 SponX University. All rights reserved.</p>
      </footer>
    </div>
  )
}
