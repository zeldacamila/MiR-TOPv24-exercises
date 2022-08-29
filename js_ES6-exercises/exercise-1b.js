/*
2. Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:
- Pedro Perez
  * JavaScript I
  * HTML y CSS I
- Maria Gomez
  * HTML y CSS I
*/
const courses = [
    { _id: 1, title: "JavaScript I" },
    { _id: 2, title: "HTML y CSS I" },
]
const students = [
    { _id: 1, name: "Pedro Perez" },
    { _id: 2, name: "Maria Gomez" },
]
const enrollments = [
    { course_id: 1, student_id: 1 },
    { course_id: 2, student_id: 1 },
    { course_id: 2, student_id: 2 }
]

let printStudent = (courses, students, enrollments) => {
    students.map((students) => {
      let s_id = students._id;
      let s_name = students.name;
      console.log(s_name);
      courses.map((courses) => {
        let c_id = courses._id;
        let c_name = courses.title;
        enrollments.map((enrollments) => {
          let course_id = enrollments.course_id;
          let student_id = enrollments.student_id;
          if (course_id === c_id && s_id === student_id) {
            console.log(c_name);
          }
        });
      });
    });
};

console.log(printStudent(courses, students, enrollments));