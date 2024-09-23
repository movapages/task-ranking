'use strict';
// const taskList = [
//   { id: 1, val: 1, hrs: 1 },
//   { id: 3, val: 3, hrs: 4 },
//   { id: 2, val: 2, hrs: 3 },
// ];

const taskList = [
  { id: 1, val: 1, hrs: 1 },
  { id: 2, val: 3, hrs: 2 },
  { id: 3, val: 4, hrs: 3 },
];

// const maxSpan = 7;
const maxSpan = 5;

const result = taskRank(taskList, maxSpan);
console.log(`Chosen tasks [${result.tasks}] have total value of ${result.vals}, and require ${result.hrs} hrs.`);

function taskRank(taskList, maxSpan) {
  return taskList.sort(
    (a, b) =>  b.val / b.hrs - a.val / a.hrs
  ).reduce((acc, task) => { console.log('TASK: ', task);
    if (acc.hrs + task.hrs <= maxSpan) {
      acc.tasks.push(task.id);
      acc.vals += task.val;
      acc.hrs += task.hrs;
    }
    return acc;
  }, { tasks: [], vals: 0, hrs: 0 });
}
