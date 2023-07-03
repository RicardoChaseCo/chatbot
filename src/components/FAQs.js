export default function FAQs() {
    const questions = ["What is your name?", "How old are you?", "Where are you located?"]; // static data
    
    return (
      <ul className="py-6">
        {questions.map((question, index) => (
          <li key={index} className="mb-4">
            <button className="text-blue-500 hover:underline" onClick={() => handleQuestionClick(question)}>
              {question}
            </button>
          </li>
        ))}
      </ul>
    );
  }
  
function handleQuestionClick(question) {
    console.log(`User clicked on question: ${question}`);
    // Here you would send the question to the chatbot
}
  