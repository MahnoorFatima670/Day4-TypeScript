//problem 1 find duplicate numbers in array
function findDuplicates(myarray:number[]):number[]
{
    let duplicateNumArray:number[]=[];
    for(let a=0;a<myarray.length;a++)
    {

        for(let b=a+1;b<myarray.length;b++)
            {
        if(myarray[a]==myarray[b])
        {
            if (duplicateNumArray.indexOf(myarray[a]) === -1) {
                duplicateNumArray.push(myarray[a]);
            }        
}
     }
 }

 return duplicateNumArray;     
}
console.log(findDuplicates([1,2,2,3,3,5,6,7,8,9,9,10]));

//problem 2
interface Student
{
    name:string;
    age:number;
    marks:number;
}
function printTopStudents(students: Student[]):void 
{
     for(const s of students)
     {
        if(s.marks>80)
        {
    console.log(`Name of student is:${s.name} and marks are:${s.marks}`);
        }
     }
}
const students:Student[] = [
    { name: "Ali", age: 20, marks: 75 },
    { name: "Sara", age: 22, marks: 85 },
    { name: "John", age: 21, marks: 90 }
];
printTopStudents(students);



