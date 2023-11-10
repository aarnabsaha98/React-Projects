// import logo from './logo.svg';
import "./App.css";
import ListOfTasks from "./component/ListOfTasks";
import SearchBar from "./component/SearchBar";
import CreateInput from "./component/CreateInput";
import { useState } from "react";

function App() {

  const [isOpenCreateTaskInput, setCreateTaskInput] = useState(false);
  const [tasksList, setTaskList] = useState(["Do Exercise", "Drink water", "Read more"]);

  const createTasks = (taskName) => {
    console.log("Creating : " + taskName);
    setTaskList([...tasksList, taskName]);
  };

  const searchTasks = (searchText) => {
    console.log("Searching", searchText);
    const filteredTasks = tasksList.filter((task) =>
      task.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filteredTasks);
  };
  const deleteTaskFromList = (index) => {
    console.log(index);
    const updatedTaskList = tasksList.filter((_, i) => i !== index);
    setTaskList(updatedTaskList);
    console.log('updatedTaskList :' + updatedTaskList)
    console.log(tasksList);
  }

  return (
    <div className="card border">
      <div className="card-body">
        <h2 className="card-title">TO DO List</h2>
        {/* <h6 className="card-subtitle mb-2 text-muted">Choose</h6> */}

        {isOpenCreateTaskInput ? (
          <div>
            {" "}
            <CreateInput
              onCreateTasks={createTasks}
              setCreateTaskInput={setCreateTaskInput}
            />{" "}
          </div>
        ) : null}

        {/* Task s  Search Bar */}
        <div className="searchbarContent">
          <SearchBar
            onSearchTasks={searchTasks}
            setCreateTaskInput={setCreateTaskInput}
          />
        </div>

        {/* List of Task s */}
        <div>
          <ListOfTasks
            llistOFTasks={tasksList}
            removeTask={deleteTaskFromList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
