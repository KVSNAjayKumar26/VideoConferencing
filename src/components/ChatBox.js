import React, { useState } from 'react'
import { motion } from 'framer-motion'
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if(input.trim()) {
            setMessages([...messages, { id: Date.now(), text: input }]);
            setInput("");
        }
    };

  return (
    <motion.div
    className='p-4 bg-gray-800 text-white rounded-md w-full max-w-md'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    >
        <div className='h-64 overflow-y-auto space-y-2'>
            {messages.map((msg) => (
                <div key={msg.id} className='bg-gray-700 p-2 rounded-md'>
                    {msg.text}
                    </div>
            ))}
            </div>
            <div className='flex items-center mt-4 space-x-2'>
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Type a message...'
                className='flex-1 p-2 bg-gray-600 rounded-md text-white focus:outline-none' 
                />
                <button
                onClick={sendMessage}
                className='px-4 py-2 bg-green-500 rounded-md hover:bg-green-700'
                >
                    Send
                </button>
                </div> 
    </motion.div>
  )
}

export default ChatBox