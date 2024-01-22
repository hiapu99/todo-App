const express=require("express");
const { getToDos, saveToDo, deleteToDo, updateToDo } = require("../controller/todos.ctrl");
const router=express.Router();

router.get("/get",getToDos);
router.post("/save",saveToDo);
router.put("/update/:id", updateToDo);
router.delete("/delete/:id", deleteToDo);

module.exports=router