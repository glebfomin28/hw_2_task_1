import React from "react";

export const Toolbar = (props) => {

    const onSelectFilter = (el) => {
        props.onSelectFilter(el.target.textContent)
    }

    return (
        <div className="filter_buttons_box">
            {
                props.filters.map((tag) =>
                    <div key={tag}
                        onClick={onSelectFilter}
                         className={tag === props.selected? "button_black": "button_white"}
                    >
                        {tag}
                    </div>
                )

            }
        </div>
    );
}

