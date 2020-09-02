let bruh = [];
export default function (state = bruh, action) {
  switch (action.type) {
    case 'Increment':
      bruh = bruh.concat({yer: 'yer'});
      break;
    case 'Decrement':
      bruh = bruh.slice(0, bruh.length - 1);
      break;
  }
  return bruh;
}
