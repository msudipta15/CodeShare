import "./App.css";

function App() {
  return (
    <div className="w-full font-[Outfit] h-screen bg-blue-600 bg-[url('src/assets/Hero-Background-notecode.svg')] bg-cover bg-center">
      <div className="text-center">
        <div className="mb-8">
          <img
            src="src/assets/NoteCodeLogo.svg"
            width={150}
            className="mx-auto"
          />
        </div>
        <div className="px-6">
          <p className="text-3xl mb-4 ">Create & Share</p>
          <p className="text-4xl ">Your Code Easily</p>
        </div>
      </div>
    </div>
  );
}

export default App;
