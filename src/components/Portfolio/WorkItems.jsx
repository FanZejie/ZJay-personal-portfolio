import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="link__box">
      <div  className="work__button" onClick={() => alert('Demo coming soon')}>
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>

      <div  className="work__button" onClick={() => alert('github coming soon')}>
        github
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </div>
      </div>
      
      
    </div>
  );
};

export default WorkItems;
