import React from "react";
import Card from "./Card";
import "../styles/Column.scss";

function Column({ groups ,cardDelete }) {
  console.log(groups);
  return groups.map((group) => {
    return (
      <section className="column" key={group.groupId}>
        <h2 className="column-header">{group.groupName}</h2>
        <Card cards={group.cards} cardDelete={cardDelete} groupId={group.groupId} />
      </section>
    );
  });
}

export default Column;