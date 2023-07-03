export default function ChatHistory() {
    const messages = ["Hello", "How can I help you?", "What is your name?"]; // static data
    
    return (
      <ul className="py-6">
        {messages.map((message, index) => (
          <li key={index} className="mb-4">
            <p className="text-sm text-gray-600">{message}</p>
          </li>
        ))}
      </ul>
    );
  }
  