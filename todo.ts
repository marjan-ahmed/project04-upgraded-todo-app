import inquirer from "inquirer";
import chalk from "chalk";

let todos: string[] = [];

async function createtodo(todos: string[]) {

    do{
        console.log("\t");
        console.log(chalk.blueBright("---------------------------|| Welcome to todo app (by Marjan Ahmed) ||--------------------------"));
        console.log(chalk.green("----------&&&&----------&&---------&&&&----------&&-----------&&&&-----------&&----------&&&----"))

        let ans = await inquirer.prompt({
        type: "list",
        name: "operation",
        message: "\n What you want to do?",
        choices: ["Add", "View", "Delete", "Update"]
    });

    console.log("\n",ans);

    if (ans.operation === "Add") {
        let addtodo = await inquirer.prompt({
            type: "input",
            message: "\n Add item:",
            name: "additem"
        })
        todos.push(addtodo.additem)
    }
    if (ans.operation === "View") {
        console.log("\n",todos);
    }
    if (ans.operation === "Delete") {
        let deletetodo = await inquirer.prompt({
            type: "list",
            name: "deleteitem",
            message: "\n Select item to delete",
            choices: todos.map(item => item)
        })
        let newtodos = todos.filter(val => val != deletetodo.deleteitem)
        todos = [...newtodos]
        console.log("\n",todos);
    };

    if(ans.operation === "Update"){

        if(todos.length < 1){
            console.log(" \n You don't have any todo to update.");
        }
        else if(todos.length > 1)
             {
            let updatetodo = await inquirer.prompt({
                type: "list",
                name: "updateitem",
                message: "\n Select item to update",
                choices: todos.map(item => item)
            })
            let addtodo = await inquirer.prompt({
                type: "input",
                message: "\n Add item to update",
                name: "additem"
            })
            let newtodos = todos.filter(val => val != updatetodo.updateitem)
            todos = [...newtodos, addtodo.additem]
            console.log("\n",todos);
        }
    }
}while(true)
};
      createtodo(todos)
    