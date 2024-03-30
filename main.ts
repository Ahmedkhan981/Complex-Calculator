import chalk from "chalk";
import inquirer from "inquirer";




    let basicMode = await inquirer.prompt([
    {
        name: "Mode",
        type: "list",
        message: "Please select mode",
        choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Exponents",
        "Percentage",
        "SquareRoot",
        "CubeRoot",
        "Even or Odd",
        "Trigonometric function",
        ],
        default: "Addition",
    },
    ]);

    if (basicMode.Mode === "Addition" ||basicMode.Mode === "Subtraction" ||basicMode.Mode ===  "Multiplication" ||basicMode.Mode ===  "Division" ||basicMode.Mode ===  "Exponents") {
    let numOne = await inquirer.prompt([
        {
        name: "value1",
        type: "number",
        message: "Please enter value1: ",
        },
        {
        name: "value2",
        type: "number",
        message: "Please enter value2: ",
        },
    ]);
    if(basicMode.Mode === "Addition"){
        let result = numOne.value1 + numOne.value2;
        console.log(chalk.cyanBright(`Result: ${result}`))
    }else if (basicMode.Mode === "Subtraction") {
        let result = numOne.value1 - numOne.value2;
        console.log(chalk.cyanBright(`Result: ${result}`))
    }else if (basicMode.Mode === "Multiplication" ) {
        let result = numOne.value1 * numOne.value2;
        console.log(chalk.cyanBright(`Result: ${result}`))
    }else if (basicMode.Mode === "Division") {
        let result = numOne.value1 / numOne.value2;
        console.log(chalk.cyanBright(`Result: ${result}`))
    }else{
        let result = numOne.value1 ** numOne.value2;
        console.log(chalk.cyanBright(`Result: ${result}`))
    }
    }else if (basicMode.Mode === "Percentage") {
        let numTwo = await inquirer.prompt([
            {
            name: "value1",
            type: "number",
            message: "Please enter your obtained mark : ",
            },
            {
            name: "value2",
            type: "number",
            message: "Please enter total mark : ",
            },
        ])
        let result = (numTwo.value1/numTwo.value2)*100
        console.log(chalk.cyanBright(`Result: ${result}`))
    }else if (basicMode.Mode === "SquareRoot" || basicMode.Mode ==="CubeRoot" ) {
        let numThree = await inquirer.prompt([{
                name:"value1",
                type:"number",
                message:"Enter the value "
        }])
        if (basicMode.Mode === "SquareRoot") {
            let result = Math.sqrt(numThree.value1)
            console.log(chalk.cyanBright(`Result: ${result}`))
        }else{
            let result = Math.cbrt(numThree.value1)
            console.log(chalk.cyanBright(`Result: ${result}`))
        }
    }else if (basicMode.Mode === "Even or Odd") {
        let numFour = await inquirer.prompt([{
            name:"value1",
            type:"number",
            message:"Enter the value to find Even or Odd"
        }])
        if (numFour.value1%2===0){
            console.log(chalk.cyanBright(`Result: ${numFour.value1} is even number`))
        }else{console.log(chalk.cyanBright(`Result: ${numFour.value1} is odd number`))}
    }else{
        let Operators = await inquirer.prompt([{
            name: "value1",
            type: "list",
            message: "Please select the value",
            choices:["sin(θ)","cos(θ)","tan(θ)","sin-1","cos-1","tan-1","cosec(θ)","sec(θ)","cot(θ)"],
            default:"sin(θ)"
        }])
        if (Operators.value1 === "sin(θ)") {
            let angles = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
            let result1 = Math.sin(angles.value)
            console.log(chalk.cyanBright(`Result: ${result1.toFixed(2)} in rad`));
            let result = Math.sin(angles.value*Math.PI/180)
            console.log(chalk.cyanBright(`Result: ${result.toFixed(2)} in deg`));
        }else if (Operators.value1 === "cos(θ)") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
                const resultInRadians = Math.cos(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians.toFixed(2)} in radians`));
                const resultInDegrees = Math.cos(angle.value * Math.PI / 180);
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else if (Operators.value1 === "tan(θ)") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
                const resultInRadians = Math.tan(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians} in radians`));
                const resultInDegrees = Math.tan(angle.value * Math.PI / 180);
                console.log(chalk.cyanBright(`Result: ${resultInDegrees} in degrees`));
        }else if (Operators.value1 === "sin-1") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle -1 to 1: ",
                }])
                const resultInRadians = Math.asin(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians} in radians`));
                const resultInDegrees = resultInRadians*180/Math.PI;
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else if (Operators.value1 === "cos-1") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle -1 to 1: ",
                }])
                const resultInRadians = Math.acos(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians} in radians`));
                const resultInDegrees = resultInRadians*180/Math.PI;
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else if (Operators.value1 === "tan-1") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle -1 to 1: ",
                }])
                const resultInRadians = Math.atan(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians} in radians`));
                const resultInDegrees = resultInRadians*180/Math.PI;
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else if (Operators.value1 === "sec(θ)") {
            let angles = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
            let result1 = Math.sin(angles.value)
            console.log(chalk.cyanBright(`Result: ${result1.toFixed(2)} in rad`));
            let result = Math.sin(angles.value*Math.PI/180)
            console.log(chalk.cyanBright(`Result: ${result.toFixed(2)} in deg`));
        }else if (Operators.value1 === "cosec(θ)") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
                const resultInRadians = 1/(Math.sin(angle.value));
                console.log(chalk.cyanBright(`Result: ${resultInRadians.toFixed(2)} in radians`));
                const resultInDegrees = 1/(Math.sin(angle.value * Math.PI / 180));
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else if (Operators.value1 === "sec(θ)") {
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
                const resultInRadians = 1/(Math.cos(angle.value));
                console.log(chalk.cyanBright(`Result: ${resultInRadians.toFixed(2)} in radians`));
                const resultInDegrees = 1/((Math.cos(angle.value)*Math.PI/180));
                console.log(chalk.cyanBright(`Result: ${resultInDegrees.toFixed(2)} in degrees`));
        }else{
            let angle = await inquirer.prompt([
                {
                name: "value",
                type: "number",
                message: "Please enter angle: ",
                }])
                const resultInRadians = Math.tan(angle.value);
                console.log(chalk.cyanBright(`Result: ${resultInRadians} in radians`));
                const resultInDegrees = Math.tan(angle.value * Math.PI / 180);
                console.log(chalk.cyanBright(`Result: ${resultInDegrees} in degrees`));
        }
    }
