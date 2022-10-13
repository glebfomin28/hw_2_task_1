import React from "react";

export const ProjectList = (props) => {


    return (
        <div className="project_list">
            {
                props.projects.map((el, index) =>  <img key={index}
                    src={el.img}
                    className="project_item"
                    alt="img_project"
                />)
            }
        </div>

    );
}

