// Generator.js
import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiAiGenerate } from "react-icons/ri";


function Generator() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mx-5 my-3 items-center">
        <button className="border-2 border-solid border-blue-500 text-blue-500 text-lg font-bold rounded-md px-3 py-2 hover:text-white hover:bg-blue-500">
        <RiAiGenerate />

        </button>
        <h2 className="text-2xl font-bold">Linkedin Cover Letter Generator</h2>
        <button className="border mr-[1px] p-2 border-solid border-gray-600 rounded-[100%] hover:bg-gray-200 hover:border-2 hover:mr-0 transition duration-300 ease-in-out"><AiTwotoneSetting />
</button>
      </div>
      <div className="flex m-5">
        <textarea
            rows={12}
            className="w-full"
            placeholder="Generated cover letter"
        />
      </div>
    </div>
  );
}

export default Generator;
