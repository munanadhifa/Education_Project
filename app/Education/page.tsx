/* eslint-disable react/no-unescaped-entities */
"use client";

import { useParams } from "react-router-dom";

export default function Education() {
  let { username } = useParams();
  return (
    <div className="min-h-screen  flex-col bg-white items-center p-80">
      <div className="z-10 w-full text-black max-w-5xl items-center font-mono text-center text-sm ">
        <p>Welcome to {username}'s education page.</p>
      </div>
    </div>
    // <main className="min-h-screen  flex-col bg-white items-center p-80">
    //   <div className="z-10 w-full text-black max-w-5xl items-center font-mono text-center text-sm ">
    //     <p>Welcome to blablabla's education page.</p>
    //   </div>
    // </main>
  );
}
