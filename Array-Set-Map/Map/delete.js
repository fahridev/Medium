const map1 = new Map();
map1.set('bar', 'foo');

map1.delete('bar');
// Expected result: true
// True indicates successful removal

map1.has('bar'); // Expected result: false