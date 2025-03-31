"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./scrollarea.module.css"; // Import CSS module
import { FaJava, FaPython } from "react-icons/fa"; // Java, Python icons
import { SiCplusplus } from "react-icons/si"; // C++ icon

// Define the type for JSON data
interface Question {
  id: number;
  question: string;
  solutionCpp: string;
  solutionJava: string;
  solutionPython: string;
  questionLink: string;
}

interface ScrollAreaProps {
  data: Question[]; // Data is passed as a prop
}

// Language mappings for icons and names
const languages = [
  { key: "cpp", name: "C++", type: "Compiled", icon: SiCplusplus },
  { key: "java", name: "Java", type: "JVM-Based", icon: FaJava },
  { key: "python", name: "Python", type: "Interpreted", icon: FaPython },
];

const ScrollArea: React.FC<ScrollAreaProps> = ({ data }) => {
  const { theme } = useTheme(); // Get theme (light/dark)
  const [mounted, setMounted] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<"cpp" | "java" | "python">("cpp");

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={styles.container} />; // Avoid hydration mismatch

  return (
    <div className={`${styles.container} ${theme}`}>
      {/* Scrollable Sidebar */}
      <div className={styles.scrollArea}>
        <h1>Questions</h1>
        <ul>
          {data.map((item) => (
            <li
              key={item.id}
              className={`${styles.item} ${selectedQuestion?.id === item.id ? styles.active : ""}`}
              onClick={() => setSelectedQuestion(item)}
            >
              {item.question}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Display Area */}
      <div className={styles.mainContent}>
        {selectedQuestion ? (
          <>
            <h2>{selectedQuestion.question}</h2>
            <a href={selectedQuestion.questionLink} target="_blank" rel="noopener noreferrer" className={styles.link}>View Problem</a>
            
            {/* Language Switcher with Icons */}
            <div className={styles.languageSwitcher}>
              {languages.map(({ key, name, type, icon: Icon }) => (
                <button
                  key={key}
                  className={`${styles.langButton} ${selectedLanguage === key ? styles.activeButton : ""}`}
                  onClick={() => setSelectedLanguage(key as "cpp" | "java" | "python")}
                >
                  <span className={styles.tooltip}>{name} - {type}</span> {/* Tooltip with language info */}
                  <Icon size={24} className={styles.icon} />
                </button>
              ))}
            </div>
            
            {/* Display the selected language solution */}
            <pre className={styles.codeBlock}>
              {selectedQuestion[`solution${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}` as keyof Question]}
            </pre>
          </>
        ) : (
          <p>Select a question to view the solution.</p>
        )}
      </div>
    </div>
  );
};

export default ScrollArea;
