import React, { useState } from "react";
import "./App.css";
import { hooksData } from "./HooksData";

function App() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="m-3">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        {hooksData.map((hook) => {
          return (
            <li class="nav-item" role="presentation">
              <button
                class={`nav-link ${hook.id === current ? "active" : ""}`}
                onClick={() => setCurrent(hook.id)}
              >
                {hook.name}
              </button>
            </li>
          );
        })}
      </ul>
      <div class="tab-content" id="myTabContent">
        {hooksData.map((hook) => {
          return (
            hook.id === current && (
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {hook.page}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

export default App;
