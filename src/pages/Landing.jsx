import React from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../assets/OnlineTest.gif'
// import heroImage from '../assets/main2.PNG?url'
// import heroImage from '../assets/hero.png'
import { Button } from '@mui/material'

const Landing = () => {
  return (
  //   <section className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center px-6">
  //   {/* Hero */}
  //   <div className="max-w-3xl">
  //     <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
  //       Master <span className="text-blue-500">Tech Skills</span> with CodeZen
  //     </h1>
  //     <p className="text-gray-600 text-lg md:text-xl mb-8">
  //       A quiz platform for developers and computer science students. Practice Java, Python, Web Dev, CN & more!
  //     </p>

  //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
  //       <Link to="/signup">
  //         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg">
  //           Get Started
  //         </button>
  //       </Link>
  //       <Link to="/topics">
  //         <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl text-lg">
  //           Explore Topics
  //         </button>
  //       </Link>
  //     </div>
  //   </div>

  //   {/* Illustration */}
  //   <img
  //     src="https://undraw.dev/assets/images/undraw_programming_re_kg9v.svg"
  //     alt="Coding Illustration"
  //     className="w-[300px] md:w-[400px] mt-12"
  //   />
  // </section>
  <div className="bg-[#f7fafc] text-slate-800">

  {/* Hero Section */}
  <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
    <div className="max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        "Sharpen Your codding skills with <span className="text-blue-500">CodeZen</span>"
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">
        A quiz platform built for developers & CS students to practice, grow, and master their skills.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/signup">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-lg cursor-pointer">
            Get Started
          </button>
        </Link>
        <Link to="/topics">
          <button className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-xl text-lg cursor-pointer">
            Explore Topics
          </button>
        </Link>
      </div>
    </div>

    <img
      src={heroImage}
      alt="Coding Illustration"
      className=" md:w-[400px] mt-12 h-[350px] rounded " 
    />
  </section>

  {/* Features Section */}
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Why CodeZen?</h2>
      <p className="text-gray-600 mb-12 text-lg">
        We make learning interactive, focused, and fun.
      </p>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out ">
          <h3 className="text-xl font-semibold mb-2">Topic-Wise Quizzes</h3>
          <p className="text-gray-600">
            Practice Java, Python, CN, OS, Web Dev, DSA & more — topic by topic.
          </p>
        </div>
        <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
          <p className="text-gray-600">
            Get instant results with correct answers & explanations.
          </p>
        </div>
        <div className="p-6 bg-blue-100 rounded-xl shadow-md hover:bg-blue-200 hover:shadow-lg transition duration-300 ease-in-out">
          <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
          <p className="text-gray-600">
            Compete with others and track your rank in real-time.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-blue-500 text-white py-16 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Ready to become a pro?
    </h2>
    <p className="text-lg mb-8">
      Join CodeZen and take your coding skills to the next level.
    </p>
    <Link to="/signup">
      <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded hover:bg-gray-100 cursor-pointer">
        Sign Up Now
      </button>
    {/* <Button size="large">Large</Button> */}
    </Link>
  </section>
</div>
  )
}

export default Landing
