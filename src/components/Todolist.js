import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Todolist() {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.tasks);
  const text = useSelector((state) => state.filter);
  let listFilter = list.filter((element) => element.task.includes(text));

  return (
    <div>
      <div>
        <input
          type={"text"}
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </div>
      <table border={1}>
        <tbody>
          <tr>
            <td>STT</td>
            <td>Task</td>
            <td>Status</td>
            <td colSpan={2}>ACTION</td>
          </tr>
          {listFilter.map((listItem, index) => (
            <tr key={listItem.id}>
              <td>{index + 1}</td>
              <td>{listItem.task}</td>
              <td>{listItem.completed ? "ĐÃ LÀM" : "CHƯA LÀM"}</td>
              <td>SỬA</td>
              <td
                onClick={() => {
                  let check = window.confirm("cofirm delete");
                  if (check)
                    dispatch({ type: "DELETE-TASK", payload: listItem.id });
                }}
              >
                XOÁ
              </td>
            </tr>
          ))}
          {/* <tr>
            <td>1</td>
            <td>ĐI CÂU CÁ</td>
            <td>ĐÃ LÀM</td>
            <td>SỬA</td>
            <td>XOÁ</td>
          </tr> */}
        </tbody>
      </table>
      <input
        type={"text"}
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD-TASK", payload: newTask });
          setNewTask("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
