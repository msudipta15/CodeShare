import { useState } from "react";
import "./App.css";
import { Editor } from "@monaco-editor/react";

function App() {
  const [theme, settheme] = useState("vs");
  const [language, setlanguage] = useState("javascript");
  const [code, setcode] = useState("");

  return (
    <div className="w-full font-[Outfit] min-h-screen h-full pb-10 bg-blue-600 text-[#121826] bg-[url('src/assets/Hero-Background-notecode.svg')] bg-cover bg-center">
      <div className="text-center p-6">
        <div className="mb-4 pr-4">
          <img
            src="src/assets/NoteCodeLogo.svg"
            width={150}
            className="mx-auto"
          />
        </div>
        <div className="px-6">
          <p className="text-3xl mb-2 ">Create & Share</p>
          <p className="text-4xl ">Your Code Easily</p>
        </div>
      </div>
      <div className="flex justify-center w-full h-[730px]   ">
        <div
          className={` w-full mx-6 sm:w-4xl rounded-xl p-8 ${
            theme === "vs" ? "bg-white" : "bg-[#1e1e1e]"
          } `}
        >
          <div className="h-[620px]">
            <Editor
              language={language}
              theme={theme}
              options={{ fontSize: 16 }}
              onChange={(code) => setcode(code || "")}
            />
          </div>
          <div className="w-full flex justify-between font-light mt-4 ">
            <div className="flex gap-3">
              <div className="relative  flex items-baseline-last">
                <div className="relative inline-block ">
                  <select
                    name="selectedLanguage"
                    className="px-4 pr-6 py-0.5 rounded-2xl bg-[#CED6E1] appearance-none"
                    onChange={(e) => setlanguage(e.target.value)}
                  >
                    <option value="javascript">Javascript</option>
                    <option value="html">HTML</option>
                    <option value="python">Python</option>
                    <option value="css">CSS</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <img src="src/assets/down arrow.svg" alt="" />
                  </span>
                </div>
              </div>
              <div className="relative  flex items-baseline-last">
                <div className="relative inline-block">
                  <select
                    name="selectedFruit"
                    className="px-4 pr-6 py-0.5 rounded-2xl bg-[#CED6E1] appearance-none"
                    onChange={(e) => settheme(e.target.value)}
                  >
                    <option value="vs">Light</option>
                    <option value="vs-dark">Dark</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <img src="src/assets/down arrow.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button className=" bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-4xl flex gap-2 cursor-pointer">
                <img src="src/assets/Share.svg" />

                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
