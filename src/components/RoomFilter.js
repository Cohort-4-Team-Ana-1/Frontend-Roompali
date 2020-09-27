import React, { useState } from "react";

export const RoomFilter = () => {
  const [input, setInput] = useState("");
  let rooms = [
    { name: "Cuarto de prueba 1", city: "Ciudad de prueba 1" },
    { name: "Cuarto de prueba 2", city: "Ciudad de prueba 2" },
    { name: "Cuarto de prueba 3", city: "Ciudad de prueba 3" },
    { name: "Cuarto de prueba 4", city: "Ciudad de prueba 4" },
    { name: "Cuarto de prueba 5", city: "Ciudad de prueba 5" },
    { name: "Cuarto de prueba 6", city: "Ciudad de prueba 6" },
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  if (input.length > 0) {
    rooms = rooms.filter((i) => {
      return i.name.toLowerCase().match(input);
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Busca un cuarto en RoomPali"
        onChange={handleChange}
        value={input}
      />
      {rooms.map((room, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                {room.name} - {room.city}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default RoomFilter;
