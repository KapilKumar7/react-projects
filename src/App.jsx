import React from "react";

export default function App() {
  return (
    <div>
      <nav class="flex justify-around bg-[#24242B] text-[#EEEFF4] border-spacing-1 m-5 py-3">
        <div>
          <p className="text-1xl black-800">LOGOBAKERY</p>
        </div>
        <div>
          <ul class="flex align-center">
            <li class="px-5">Services</li>
            <li class="px-5">Project</li>
            <li class="px-5">About</li>
          </ul>
        </div>
        <div>
          <button class="bg-[#0089A9] text-[#8DE7FC] px-5 py-0.5 rounded-full">
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
}
