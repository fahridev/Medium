const mySet = new Set();
mySet.add("foo");

mySet.delete("bar") // false; no "bar" element found to be deleted.
mySet.delete("foo") // true; successfully removed.