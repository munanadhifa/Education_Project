/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    setUsername(event.target.value);
  };

  return (
    <main className="min-h-screen  flex-col bg-white items-center p-80">
      <div className="z-10 w-full text-black max-w-5xl items-center font-mono text-center text-sm ">
        <p>Hi there! welcome to your education showcase</p>

        <p className="pt-10">
          Type your name and click "Enter" below the begin!
        </p>

        <div>
          <div className="mt-5 ml-[30%]">
            <input
              type="text"
              name="username"
              id="name"
              onChange={handleSubmit}
              className="block text-center bg-white p-5 w-[50%] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="your name"
            />
          </div>
          <Link to={`/education/${username}`}>
            <button
              type="submit"
              className="w-[100px] rounded bg-white px-2 py-1 mt-5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Enter
            </button>
          </Link>

          {/* <p>{handleSubmit}</p> */}
        </div>
      </div>
    </main>
  );
}

export default Homepage;
