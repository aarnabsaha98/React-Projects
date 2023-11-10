import { useState } from "react";
const SearchBar = ({ onSearchTasks, setCreateTaskInput }) => {


    const [searchText, setSearchText] = useState(' ');


    const handleSearchedEvent = (event) => {
        console.log('Searched event');
        if (event.key === 'Enter') {
            console.log('input :: ' + searchText);
            onSearchTasks(searchText);
        }
    }

    return <>
        <div className="input-group input-group-sm mb-3">
            <input
                type="text"
                placeholder="Enter your Search Text"
                className="form-control"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={(event) => {
                    console.log('hey :: ' + event.target.value);
                    setSearchText(event.target.value);
                }}
                onKeyDown={handleSearchedEvent}
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-plus clickable-icon"
                viewBox="0 0 16 26"
                onClick={() => {
                    setCreateTaskInput(true);
                }}
            >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
        </div>
    </>;

}

export default SearchBar;
