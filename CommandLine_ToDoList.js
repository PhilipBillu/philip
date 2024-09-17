console.log("-----to-do-list---------");
var ch = prompt("\n1.add task\t2.delete task\t3.view task\t4.Exit\nEnter your choice[press No ] : ");
var addTask = new Array(25);
var del, cnt = 0;
var temp;
class todolist{
    one() {
        temp = prompt("Enter your task " + (cnt + 1) + " : ");
        addTask[cnt] = temp;
        cnt++;
    }
    two(){
        del = prompt("Which task do you like to delete[mention it serial No ] : ");
        for (var i = del-1; i < cnt; i++) {
            addTask[i] = addTask[i+1];
        }
    }
    three() {
        console.log("-----list of works-----");
        var work = 1;
        for (var j = 0; j < addTask.length; j++) {
            if (addTask[j] != null) {
                console.log(work + " " + addTask[j]);
                work++;
            }
        }
    }
}
while (ch < 4) {
    const obj = new todolist();
    switch (ch) {
        case '1':
            obj.one();
            break;
        case '2':
            obj.two();
            break;
        case '3':
            obj.three();
            break;
    }
    ch = prompt("\n1.add task\t2.delete task\t3.view task\t4.Exit\nEnter your choice[press No ] : ");
}