#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// Print wellcome Message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<=======================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<=============>>> ${chalk.bold.hex(`#9999ff`)(`Wellcome to Todo-List Application`)}<<<=============>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<========================================>>>\n`));
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do:",
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
// Function to add new task to the List
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task :"
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added Successfully in Todo-List`);
};
// Function to view all todo-List Tasks
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
//Function to Delete a task from the List
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deleteTask} This task has been Deleted Successfully from your Todo-List\n`);
};
// Function to update task
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to update :",
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter the new task :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated Successfully [for updated list Check Option: "View Todo-List]`);
};
main();
