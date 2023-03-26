import React from "react";

export const Maps = () => {
  // Map declaration
  const map = new Map([
    ["a", 1],
    ["b", 2],
  ]);

  // Adding values to map
  map.set("c", 3);

  // Check if an item is present in map
  console.log(map.has("a")); // true

  // Delete an item from map
  map.delete("b");

  // Check number of items in map
  console.log(map.size);

  // Delete all values from set
  map.clear();

  // Loop through the map
  for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
  }

  return <div>Maps</div>;
};
