import React from "react";

function Navigation({ onSearch, searchTerm, handleSortByName, handleSortByDepartment }) { // The two props coming down from the Navigation Component
    return (
        <div className="md:flex justify-between my-6">
            <div className="md:mb-0 mb-4">
                <button onClick={handleSortByName} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 mr-4 hover:bg-yellow-500 hover:text-white">Name</button>
                <button onClick={handleSortByDepartment} className="bg-white focus:bg-yellow-500 focus:text-white focus:outline-none shadow font-bold text-gray-800 rounded px-8 py-1 hover:bg-yellow-500 hover:text-white">Dept</button>
            </div>
            <form>
                <input
                    value={searchTerm} 
                    onChange={onSearch} 
                    className="shadow pl-5 rounded w-full py-1"
                    type="text"
                    placeholder="search employee"/>
            </form>
        </div>
    )
}

export default Navigation;