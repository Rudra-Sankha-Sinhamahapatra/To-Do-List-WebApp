import express from "express";
import ejs from "ejs";
import bodyparser from "body-parser";

const app=express();
const port=3000;


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

let todos = [];
var currentDate=new Date();
// console.log(currentDate);

var year=currentDate.getFullYear();
var month=currentDate.getMonth();
var day=currentDate.getDate();

// console.log(year);
// console.log(month);
// console.log(day);
var monthNames=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];
var monthinword=monthNames[month];
// console.log(monthinword);

var todayDate=year+','+day+monthinword;


app.get("/",(req,res)=>{
    
res.render("index.ejs",{
    currentdate:todayDate,
    todos:todos,
});
});
app.post("/addTodo", (req, res) => {
    const todoItem = req.body.todoItem;
    if (todoItem) {
      todos.push({ text: todoItem, completed: false });
    }
    res.redirect("/")  });
app.listen(port,()=>{
console.log(`Server is Running in Port ${port}`);
});

