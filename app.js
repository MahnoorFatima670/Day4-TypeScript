//problem 1 find duplicate numbers in array
function findDuplicates(myarray) {
    var duplicateNumArray = [];
    for (var a = 0; a < myarray.length; a++) {
        for (var b = a + 1; b < myarray.length; b++) {
            if (myarray[a] == myarray[b]) {
                if (duplicateNumArray.indexOf(myarray[a]) === -1) {
                    duplicateNumArray.push(myarray[a]);
                }
            }
        }
    }
    return duplicateNumArray;
}
console.log(findDuplicates([]));
function printTopStudents(students) {
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var s = students_1[_i];
        if (s.marks > 80) {
            console.log("Name of student is:".concat(s.name, " and marks are:").concat(s.marks));
        }
    }
}
var students = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 }
];
printTopStudents(students);
