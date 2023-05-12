import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim() === "") return;
    const newMessage = { text, sender: "user" };
    setMessages([...messages, newMessage]);
    setText("");
    // send message to server or chatbot
    // wait for response
    const responseMessage = { text: "Hello!", sender: "bot" };
    setMessages([...messages, responseMessage]);
  };

  return (
    <View className={`flex-1 bg-gray-100`}>
      <View className={`flex-1`}>
        {messages.map((message, index) => {
          console.log("message:", message);
          return (
            <View
              key={index}
              className={`flex flex-row items-center justify-${
                message.sender === "user" ? "end" : "start"
              } mt-3 mb-1`}
            >
              <View
                className={`rounded-lg bg-white py-2 px-3 max-w-2/3 ${
                  message.sender === "user" ? "mr-3" : "ml-3"
                }`}
              >
                <Text
                  className={`${
                    message.sender === "user" ? "text-right" : ""
                  } text-sm font-medium text-gray-900`}
                >
                  {message.text}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View
        className={`flex flex-row items-center bg-white border-t border-gray-200 py-2 px-3`}
      >
        <TextInput
          className={`flex-1 mr-2 py-2 px-3 bg-gray-100 rounded-full`}
          value={text}
          onChangeText={setText}
          placeholder="Type your message here..."
        />
        <TouchableOpacity
          className={`flex items-center justify-center bg-blue-500 rounded-full w-8 h-8`}
          onPress={handleSend}
        >
          <Text className={`text-white text-base`}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;
