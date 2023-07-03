import React, { useContext } from "react";
import ThemeContext from "./contexts/ThemeContext";
import "./App.css";
import ChatHistory from "./components/ChatHistory";
import FAQs from "./components/FAQs";
import ChatInput from "./components/ChatInput";

function App() {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div className="App h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <header className="flex justify-between items-center px-6 py-4 bg-white dark:bg-gray-800 height-1-8">
        <div className="flex items-center">
          {/* Logo would go here */}
          <div className="text-3xl font-semibold">Chatbot App</div>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleDarkMode}
            className="ml-4 py-2 px-4 bg-blue-500 text-white rounded"
          >
            Toggle Dark Mode
          </button>
        </div>
      </header>
      <main className="flex h-full overflow-auto height-7-8">
        <section
          className={`w-1/6 p-6 overflow-auto ${
            darkMode ? "bg-gray-900" : "bg-gray-200"
          }`}
        >
          <ChatHistory />
        </section>

        <section
          className={`w-2/3 p-6 overflow-auto ${
            darkMode ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <ChatInput />
        </section>

        <section
          className={`w-1/6 p-6 overflow-auto ${
            darkMode ? "bg-gray-700" : "bg-gray-400"
          }`}
        >
          <FAQs />
        </section>
      </main>
    </div>
  );
}

export default App;
