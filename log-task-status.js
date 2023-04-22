const fs = require('fs');

const taskStatus = {
  "not started": [],
  "in progress": [],
  "completed": []
};

const columns = [notStartedColumn, inProgressColumn, completedColumn];
for (let i = 0; i < columns.length; i++) {
  const column = columns[i];
  const tasks = column.querySelectorAll(".task");
  for (let j = 0; j < tasks.length; j++) {
    const task = tasks[j];
    const taskName = task.innerText.trim();
    const status = column.id.replace("-column", "");
    taskStatus[status].push(taskName);
  }
}

fs.writeFile('task-status.json', JSON.stringify(taskStatus), function(err) {
  if (err) {
    console.error(err);
  } else {
    console.log('Task status saved to task-status.json');
  }
});
