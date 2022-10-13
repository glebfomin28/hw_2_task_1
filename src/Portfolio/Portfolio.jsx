import React, {useState} from "react";
import {Toolbar} from "./Toolbar/Toolbar";
import {projectItems} from "../projectItems";
import {ProjectList} from "./ProjectList/ProjectList";

export const Portfolio = () => {

    const [activeFilter,setActiveFilter] = useState("All");
    const [printProject,setPrintProject,] = useState(projectItems);

    const selectFilter = (tag) => {
        setActiveFilter(tag)

        if (tag === "All") {
            setPrintProject(projectItems)
        } else {
            setPrintProject(projectItems.filter(item => item.category === tag))
        }
    }


    return (
        <div>
            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={activeFilter}
                onSelectFilter={selectFilter}
            />
            <ProjectList projects={printProject}/>
        </div>
    );
}
