const createClassRoom = (numberOFStudents) => {
  const studentSeat = (seat) => {
    return () => seat;

  };
  const students = [];
    for (let i = 0; i < numberOFStudents; ++i) {
     students.push(studentSeat(i + 1));
    }
    return students;
}
const classroom = createClassRoom(10);
