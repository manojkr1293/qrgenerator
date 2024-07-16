
"use client"
import React, { useRef, useState } from "react";
import QRCode from "qrcode.react";
import ReactToPrint from "react-to-print";

export default function Home() {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const qrRef = useRef();

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.split(" ").length <= 300) {
      setText(inputText);
    } else {
      alert("Text exceeds the 300 word limit.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl w-full p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="mt-1 block w-full border border-gray-700 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200"
        ></input>

        <textarea
          rows="10"
          cols="50"
          placeholder="Discription"
          value={text}
          onChange={handleChange}
          className="mt-5 block w-full border border-gray-700 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200"
        />
        <br />
        {text && (
          <>
            <div ref={qrRef}>
              <div className="mt-4 flex justify-center items-center">
                <QRCode value={text} size={350} />
              </div>
              <h1 className="text-2xl text-center mt-5">{title}</h1>
            </div>
            <div className="mt-4 flex justify-center items-center">
              <ReactToPrint
                trigger={() => (
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
                    Print QR Code
                  </button>
                )}
                className="mt-20"
                content={() => qrRef.current}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
