import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

export default function howLongAgo({ day, month, year }) {
  const dateObject = new Date(
    `${year}/${month}/${day}`,
  );
  const dateString = dateObject.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return dayjs(dateString).fromNow();
}
