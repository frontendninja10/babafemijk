import { useState } from "react";
import {
  Sandpack,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackPreview,
} from "@codesandbox/sandpack-react";

import { aquaBlue } from "@codesandbox/sandpack-themes";

export default function Editable() {
  const files = {
    "App.js": ` import "./style.css";
    export default function BankApp() {
let balance = 1000000;

  const depositAmounts = [100, 200, 500, 1000];

  const withdrawAmounts = [100, 200, 500, 1000];

  const updateBalance = (amount, isDeposit) => {
    if (isDeposit) {
      balance += amount;
    } else {
      if (balance >= amount) {
        balance -= amount;
      } else {
        alert("Insufficient funds for this withdrawal.");
      }
    }
    console.log(\`Current Balance: $\${balance.toLocaleString()}\`);
  };

  return (
    <div className="container">
        <h3>Welcome back</h3>
      <p>Balance: \${balance.toLocaleString()}</p>
      <section>
        <section>
          <h4>Save</h4>
          <div className="button-section">
            {depositAmounts.map((amount) => (
              <button
                className="button"
                key={amount}
                onClick={() => updateBalance(amount, true)}
              >
                \${amount}
              </button>
            ))}
          </div>
        </section>
        <section>
          <h4>Withdraw</h4>
          <div className="button-section">
            {withdrawAmounts.map((amount) => (
              <button
                className="button"
                key={amount}
                onClick={() => updateBalance(amount, false)}
              >
                \${amount}
              </button>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}


    `,
    "style.css": `
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
    body {
        font-family: 'Open Sans', sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 0;
        
        height: 100vh;
    }

    .container {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1 {
        margin-bottom: 10px;
    }

    p {
        margin-bottom: 20px;
        font-size: 18px;
    }

    .button-section {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }

    .button {
        background-color: #334155;
        color: white;
        border: none;
        padding: 10px 20px;
        margin: 0 5px;
        cursor: pointer;
        font-size: 16px;
    }

    .button:hover {
        background-color: #333;
    }
`,
  };
  return (
    <Sandpack
      template="react"
      files={files}
      options={{
        showLineNumbers: true,
        showConsole: true,
        showConsoleButton: true,
        showTabs: true,
        editorHeight: 500,
        rtl: true,
      }}
      theme={aquaBlue}
    />
  );
}
