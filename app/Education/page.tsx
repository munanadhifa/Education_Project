/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";

import { useParams } from "react-router-dom";

export default function Education() {
  let { username } = useParams();

  const [universityData, setUniversityData] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [user, setUser] = useState([]);
  const [educationData, setEducationData] = useState({
    university: "",
    major: "",
    start_date: "",
    end_date: "",
    desc: "",
  });

  const handleInput = (e: any) => {
    let allData = educationData;
    allData[e.target.name] = e.target.value;
    setEducationData(allData);
  };

  const handleSubmit = () => {
    let newData = [...user, educationData];
    console.log(user);
    console.log(educationData);
    console.log(newData);
    setUser(newData);
    setEducationData({
      university: "",
      major: "",
      start_date: "",
      end_date: "",
      desc: "",
    });
    setShowModal(false);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        "http://universities.hipolabs.com/search?name"
      );
      const results = [];
      data.forEach((value) => {
        results.push({
          key: value.name,
          value: value.id,
        });
      });
      setUniversityData([
        { key: "Select a University", value: "" },
        ...results,
      ]);
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen  flex-col bg-white items-center p-32 pl-[14%] font-mono">
      <div className="z-10 w-full text-black max-w-5xl items-center font-mono text-center text-sm ">
        <p>Welcome to {username}'s education page.</p>
      </div>
      <>
        <button
          className="ml-[37%] bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ml-[35%] mt-[30px]"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Add new education
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[30%] my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="relative p-6 flex-auto">
                    <p className="text-black text-xl font-bold">
                      Add Education
                    </p>
                    <div className="pt-[10px]">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        University Name
                      </label>
                      <div className="mt-1">
                        <select
                          id="university"
                          name="university"
                          onChange={handleInput}
                          className="mt-2 p-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue="Canada"
                        >
                          {universityData.map((option) => {
                            return (
                              <option key={option.value} value={option.value}>
                                {option.key}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div className="pt-[10px]">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Major
                      </label>
                      <div className="mt-1">
                        <input
                          type="major"
                          name="major"
                          id="major"
                          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Major Name"
                          onChange={handleInput}
                        />
                      </div>
                    </div>
                    <div className="pt-[10px]">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Start Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="start_date"
                          id="start_date"
                          onChange={handleInput}
                          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Start year and month"
                          aria-describedby="email-description"
                        />
                      </div>
                    </div>
                    <div className="pt-[10px]">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        End Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="end_date"
                          id="end_date"
                          onChange={handleInput}
                          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="End year and month"
                          aria-describedby="email-description"
                        />
                      </div>
                    </div>
                    <div className="pt-[10px]">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Education Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          rows={4}
                          name="desc"
                          id="desc"
                          onChange={handleInput}
                          className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div className="flex pt-[5%] text-center ">
        {user.length === 0 ? (
          <div className="mt-3 w-[100%] bg-gray-400 text-white h-[30vh]">
            <p className="mt-[100px]">Data Not Added</p>
          </div>
        ) : (
          <div className="flex">
            <div className="rounded w-[100%] mt-[10px] border-b border-gray-200 bg-gray-400 px-4 py-5 sm:px-6 ">
              <h3 className="font-bold ">University</h3>
              {user.map((univ: any) => {
                return <h3 className="text-left mt-2">{univ.university}</h3>;
              })}
            </div>

            <div>
              {user.map((experience: any) => {
                return (
                  <div className="rounded w-[600px] mt-[10px] border-b border-gray-200 bg-gray-400 px-4 py-5 sm:px-6 ml-[20%]">
                    <h3 className="text-left text-xl font-bold ">
                      {experience.major} @ {experience.university}
                    </h3>
                    <p className="text-left">
                      {experience.start_date} - {experience.end_date}
                    </p>
                    <p className="text-left">{experience.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
