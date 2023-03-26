import React from "react";

export const Set = () => {
  // Set declaration
  const set = new Set([1, 2, 3]);

  // Adding values to set
  set.add(4);
  set.add(3); // 3 is already present in set, so it will not be added to the set

  // Check if an item is present in set
  console.log(set.has(2)); // true

  // Delete an item from set
  set.delete(1);

  // Check number of items in set
  console.log(set.size);

  // Delete all values from set
  set.clear();

  // Loop through the set
  for (const item of set) {
    console.log(item);
  }

  return <div>Set</div>;
};
