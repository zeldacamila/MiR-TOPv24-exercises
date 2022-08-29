/*
1. Imprimir los cursos y los estudiantes de cada curso con el siguiente format:
- JavaScript I
  * Pedro Perez
- HTML y CSS I
  * Pedro Perez
  * Maria Gomez
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

const printCourses = (courses, students, enrollments) => {
    let cursos = [];
    courses.map((item) => {
      cursos.push(item._id);
    });
    console.log(cursos);
    cursos.forEach((elemento, index) => {
        let arrCurso = enrollments.filter((item) => item.course_id === elemento);
        console.log(courses[index].title);
        arrCurso.forEach((_curso) => {
            students.map((estudiante) => {
                if (_curso.student_id === estudiante._id) {
                    console.log(`* ${estudiante.name}`);
                }
            });
        });
    });
};

printCourses(courses, students, enrollments);