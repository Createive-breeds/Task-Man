"use client";

import { themeData } from "@/lib/constants";
import React, { useState } from "react";

// Demo survey questions array
const surveyQuestions = [
  {
    id: 1,
    question: "How Often Do You Go For Shopping In This Era?",
    options: [
      "Often",
      "Very Often",
      "Once a week",
      "Once in 2 weeks",
      "Once a month",
      "Yearly",
    ],
  },
  {
    id: 2,
    question: "What's your preferred shopping method?",
    options: [
      "In-store",
      "Online websites",
      "Mobile apps",
      "Social media shops",
      "Telephone orders",
      "Catalog orders",
    ],
  },
  {
    id: 3,
    question: "What type of products do you shop for most frequently?",
    options: [
      "Groceries",
      "Clothing",
      "Electronics",
      "Home goods",
      "Beauty products",
      "Sports equipment",
    ],
  },
];

export default function SurveyClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(
    new Array(surveyQuestions.length).fill("")
  );
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      setShowError(true);
      return;
    }
    setShowError(false);
    if (currentQuestion < surveyQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowError(false);
    }
  };

  const handleOptionSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = event.target.value;
    setAnswers(newAnswers);
    setShowError(false);
  };

  return (
    <div style={{ margin: "0 auto", padding: "20px" }}>
      <h2
        style={{
          fontSize: "1.5rem",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        {surveyQuestions[currentQuestion].question}
      </h2>

      {showError && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          Please select an option before proceeding
        </div>
      )}

      <form>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
          {surveyQuestions[currentQuestion].options.map((option) => (
            <div
              key={option}
              className=" border shadow-sm rounded-lg py-3 px-2"
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  value={option}
                  checked={answers[currentQuestion] === option}
                  onChange={handleOptionSelect}
                  style={{ marginRight: "10px" }}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      </form>

      <div className=" flex justify-between items-center my-5 mx-auto max-w-[300px]">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          style={{
            height: "37px",
            width: "130px",
            backgroundColor:
              currentQuestion === 0 ? "#ccc" : themeData.colors.primary,
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
          }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentQuestion === surveyQuestions.length - 1}
          style={{
            height: "37px",
            width: "130px",
            backgroundColor:
              currentQuestion === surveyQuestions.length - 1
                ? "#ccc"
                : themeData.colors.primary,
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor:
              currentQuestion === surveyQuestions.length - 1
                ? "not-allowed"
                : "pointer",
          }}
        >
          Next
        </button>
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "0.9rem",
          color: "#666",
        }}
      >
        Question {currentQuestion + 1} of {surveyQuestions.length}
      </div>
    </div>
  );
}
