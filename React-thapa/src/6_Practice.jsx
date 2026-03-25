export const Practice = () => {
  const student = [];
  return (
    <>

      {/* 0 && "No students found"  // result: 0 */}  
      <p>{student.length && "No students found"}</p>  
           
      {/* 1st  true && "No students found" --> No students found */}
      <p>{student.length === 0 && "No students found"}</p> 
    
      {/*2 nd !0 = true -> true && "No student found" --> No student found */}
      <p>{!student.length && "No student found"}</p>

      {/*3 rd student.length = 0 -> Boolean(0) = false -> !false = true -> No student found */}
      <p>{!Boolean(student.length) && "No student found"}</p>
      <p>Number of student: {student.length}</p>
    
    </>
  );
};