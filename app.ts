
import inquirer from "inquirer" 


let idNumber = 1000;

let studentList:any[] = []

let studentFees = 5000;

let condition = true;

while(condition){

let asnw = await inquirer.prompt([{
    name:'num0',
    type: 'list',
    message: 'What you want to do?',
    choices: ['Enroll Student','Check Student status']
}])

if(asnw.num0 == 'Check Student status'){
    let res = await inquirer.prompt({
        name: 'num4',
        type: 'input',
        message: 'Enter Name to find Student'
    })

    let findName = res.num4.trim()
    let found = studentList.find(studentList => studentList.name === findName)
    if(found == undefined){
        console.log('Student Not Found!');
        
    }else{

    console.log(found); 

    }

    break;   
}


if(asnw.num0 == 'Enroll Student'){
let ans = await inquirer.prompt([
{
    name: 'num1',
    type: 'input',
    message: 'Enter your name?'
},

])
let studentName:string = ans.num1.trim()
if(studentName === ''){
    console.log(`Enter Something`);
    
}
else {
let ans1 = await inquirer.prompt({
    
        name: 'num3',
        type: 'list',
        message: 'Which course do you want to enroll?',
        choices: ['Artificial intelligence', 'Web 3' , 'Metaverse','BlockChain']
})

class Student {
    name:string;
    StudentId:number;
    CourseFees:number;
    courseENroll:string[] = []

    constructor(name:string,StudentId:number,CourseFees:number){
        this.name = name;
        this.StudentId = StudentId;
        this.CourseFees = CourseFees;
        this.courseENroll.push(ans1.num3)
    }
}

let Zubair = new Student(studentName,idNumber++,studentFees)

studentList.push(Zubair)

console.log(studentList);
}

let answer = await inquirer.prompt({
    name: "num3",
    type: 'confirm',
    default: true,
    message: 'Do you want to continue?'
})
if(answer.num3 == false){
    condition = false;
}

}
}

