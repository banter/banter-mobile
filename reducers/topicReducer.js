let topics = [{yer: 'topic1'}];
export default function (state = topics, action) {
  switch (action.type) {
    case 'Increment':
      topics.push({yer: 'yer'});
      break;
    case 'Decrement':
      topics.pop();
      break;
  }
  return topics;
}
