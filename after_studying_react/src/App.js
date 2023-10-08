import { useState } from "react";
import Window from "./components/Window.js";
import SelectBtnCntl from "./components/SelectBtnCntl.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(props) {
  const conts = [
    {
      year: "2023년",
      items: [
        {
          month: "12월",
          infoes: [
            {
              title: "title23-12-1",
              text: ["text23-12-1-1", "text23-12-1-2", "text23-12-1-3"],
            },
            {
              title: "title23-12-2",
              text: ["text23-12-2-1", "text23-12-2-2", "text23-12-2-3"],
            },
            {
              title: "title23-12-3",
              text: ["text23-12-3-1", "text23-12-3-2", "text23-12-3-3"],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              title: "title23-11-1",
              text: ["text23-11-1-1", "text23-11-1-2", "text23-11-1-3"],
            },
            {
              title: "title23-11-2",
              text: ["text23-11-2-1", "text23-11-2-2", "text23-11-2-3"],
            },
            {
              title: "title23-11-3",
              text: ["text23-11-3-1", "text23-11-3-2", "text23-11-3-3"],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              title: "title23-10-1",
              text: ["text23-10-1-1", "text23-10-1-2", "text23-10-1-3"],
            },
            {
              title: "title23-10-2",
              text: ["text23-10-2-1", "text23-10-2-2", "text23-10-2-3"],
            },
            {
              title: "title23-10-3",
              text: ["text23-10-3-1", "text23-10-3-2", "text23-10-3-3"],
            },
          ],
        },
      ],
    },

    {
      year: "2022년",
      items: [
        {
          month: "12월",
          infoes: [
            {
              title: "title22-12-1",
              text: ["text22-12-1-1", "text22-12-1-2", "text22-12-1-3"],
            },
            {
              title: "title22-12-2",
              text: ["text22-12-2-1", "text22-12-2-2", "text22-12-2-3"],
            },
            {
              title: "title22-12-3",
              text: ["text22-12-3-1", "text22-12-3-2", "text22-12-3-3"],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              title: "title22-11-1",
              text: ["text22-11-1-1", "text22-11-1-2", "text22-11-1-3"],
            },
            {
              title: "title22-11-2",
              text: ["text22-11-2-1", "text22-11-2-2", "text22-11-2-3"],
            },
            {
              title: "title22-11-3",
              text: ["text22-11-3-1", "text22-11-3-2", "text22-11-3-3"],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              title: "title22-10-1",
              text: ["text22-10-1-1", "text22-10-1-2", "text22-10-1-3"],
            },
            {
              title: "title22-10-2",
              text: ["text22-10-2-1", "text22-10-2-2", "text22-10-2-3"],
            },
            {
              title: "title22-10-3",
              text: ["text22-10-3-1", "text22-10-3-2", "text22-10-3-3"],
            },
          ],
        },
      ],
    },

    {
      year: "2021년",
      items: [
        {
          month: "12월",
          infoes: [
            {
              title: "title21-12-1",
              text: ["text21-12-1-1", "text21-12-1-2", "text21-12-1-3"],
            },
            {
              title: "title21-12-2",
              text: ["text21-12-2-1", "text21-12-2-2", "text21-12-2-3"],
            },
            {
              title: "title21-12-3",
              text: ["text21-12-3-1", "text21-12-3-2", "text21-12-3-3"],
            },
          ],
        },
        {
          month: "11월",
          infoes: [
            {
              title: "title21-11-1",
              text: ["text21-11-1-1", "text21-11-1-2", "text21-11-1-3"],
            },
            {
              title: "title21-11-2",
              text: ["text21-11-2-1", "text21-11-2-2", "text21-11-2-3"],
            },
            {
              title: "title21-11-3",
              text: ["text21-11-3-1", "text21-11-3-2", "text21-11-3-3"],
            },
          ],
        },
        {
          month: "10월",
          infoes: [
            {
              title: "title21-10-1",
              text: ["text21-10-1-1", "text21-10-1-2", "text21-10-1-3"],
            },
            {
              title: "title21-10-2",
              text: ["text21-10-2-1", "text21-10-2-2", "text21-10-2-3"],
            },
            {
              title: "title21-10-3",
              text: ["text21-10-3-1", "text21-10-3-2", "text21-10-3-3"],
            },
          ],
        },
      ],
    },
  ];

  const defaultCount = 1;
  const [selected, setSelect] = useState("all-year");
  const isSelectAllYear = selected === "all-year";

  return (
    <div className="window">
      <SelectBtnCntl conts={conts} onChange={setSelect} value={selected} />

      <Window
        conts={conts}
        selected={selected}
        isSelectAllYear={isSelectAllYear}
        defaultCount={defaultCount}
      />
    </div>
  );
}

export default App;
