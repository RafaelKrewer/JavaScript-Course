let hour = 13;
let period;

if (hour >= 6 && hour < 12) {
  period = 'morning';
} else if (hour >= 12 && hour < 17) {
  period = 'afternoon';
} else if (hour >= 17 && hour < 24) {
  period = 'night';
} else {
  period = 'invalid';
}

switch (period) {
  case 'morning':
    console.log('Good morning!');
    break;
  case 'afternoon':
    console.log('Good afternoon!');
    break;
  case 'night':
    console.log('Good night!');
    break;
  default:
    console.log('Invalid hour');
}