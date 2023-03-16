const set1 = new Set();

set1.add(42);
set1.size; // Expected output: 1

set1.add('forty two');
set1.size; // Expected output: 2

set1.add('forty two');
set1.size; // Expected output: 3