import json
import os
import sys

def load_json(filename):
    if os.path.exists(filename):
        with open(filename, "r", encoding="utf-8") as file:
            try:
                return json.load(file)
            except json.JSONDecodeError:
                print("Error: JSON file is corrupted. Initializing a new one.")
                return []
    return []

def save_json(filename, data):
    os.makedirs(os.path.dirname(filename), exist_ok=True)  # Ensure directory exists
    with open(filename, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)

def get_user_input(prompt):
    try:
        return input(prompt).strip()
    except KeyboardInterrupt:
        print("\nProcess interrupted by user.")
        exit()

def main():
    platform_map = {
        "leetcode": "../data/leetcode.json",
        "codeforces": "../data/codeforces.json",
        "codechef": "../data/codechef.json"
    }
    
    platform = get_user_input("Enter coding platform (LeetCode/Codeforces/CodeChef): ").lower()
    if platform not in platform_map:
        print("Invalid platform. Exiting.")
        return
    
    filename = platform_map[platform]
    data = load_json(filename)
    
    question = get_user_input("Enter question name: ")
    question_link = get_user_input("Enter question link: ")  # New link input
    language = get_user_input("Enter programming language (C++/Python/Java): ").lower()
    
    if language not in ["c++", "python", "java"]:
        print("Invalid language. Exiting.")
        return
    
    print("Paste your code below. Type 'closereader' on a new line to save:")
    code_lines = []
    while True:
        try:
            line = input()
            if line.strip().lower() == "closereader":
                break
            code_lines.append(line)
        except EOFError:
            break
    
    code = "\n".join(code_lines).strip()
    
    if not code:
        print("Error: No code entered. Exiting.")
        return
    
    # Create a new entry
    new_entry = {
        "id": len(data) + 1,
        "question": question,
        "questionLink": question_link,  # Added link field
        "solutionCpp": "" if language != "c++" else code,
        "solutionJava": "" if language != "java" else code,
        "solutionPython": "" if language != "python" else code,
    }
    
    # Check if question already exists
    for entry in data:
        if entry["question"].lower() == question.lower():
            entry[f"solution{language.capitalize()}"] = code
            entry["questionLink"] = question_link  # Update link if already exists
            break
    else:
        data.append(new_entry)
    
    save_json(filename, data)
    print(f"Solution added successfully to {filename}!")

if __name__ == "__main__":
    main()
