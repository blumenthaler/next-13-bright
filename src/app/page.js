import React from 'react';
import { FIRST_SNIPPET, SECOND_SNIPPET, THIRD_SNIPPET } from "../../SNIPPETS";
import Snippet from "../../components/Snippet";
import { Code } from "bright";

function Home() {

  return (
    <main>
      <h1>Introduction to Python</h1>
      <h2>Variables and Basic Data Types</h2>
      <p>
        Python is a high-level, interpreted
        programming language. In Python, you don't
        need to specify the data type of a
        variable when you declare it. Python
        automatically determines the data type
        based on the value you assign.
      </p>

      <Snippet>
            <Code
              className="code-snippet"
              theme="dracula"
              lang="py"
            >
              {FIRST_SNIPPET}
            </Code>
        {FIRST_SNIPPET}
        </Snippet>

      <h2>
        Control Flow: Conditionals and Loops
      </h2>
      <p>
        Python has standard control flow
        structures like if statements, for and
        while loops.
      </p>

      <Snippet>
      <Code
              className="code-snippet"
              theme="dracula"
              lang="py"
            >{SECOND_SNIPPET}
    
    </Code></Snippet>

      <h2>Functions and Basic Data Structures</h2>

      <p>
        In Python, you can define your own
        functions using the def keyword. Python
        also has built-in data structures like
        lists and dictionaries.
      </p>

      <Snippet> <Code
              className="code-snippet"
              theme="dracula"
              lang="py"
            >{THIRD_SNIPPET}</Code></Snippet>
    </main>
  );
}

export default Home;
