const rest1 = {
  name: 'Capri',
  numguests: 0,
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

rest1.numguests = rest2.numguests || 10;
rest2.numguests = rest1.numguests || 10;

rest1.numguests ||= 10;
rest2.numguests ||= 10;

rest1.numguests ??= 10;
rest2.numguests ??= 10;

rest2.owner = rest2.owner && 'Anonymous';
rest1.owner = rest1.owner && 'Anonymous';

rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);
