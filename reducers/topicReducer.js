let topics = 1;
export default function (state = topics, action) {
  switch (action.type) {
    case 'Increment':
      topics++;
      break;
    case 'Decrement':
      topics--;
      break;
  }
  return topics;
}
