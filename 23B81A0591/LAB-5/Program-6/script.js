function checkPrerequisites(studentId, courseId, callback) {
  setTimeout(() => {
    console.log("Prerequisites checked");
    const meetsPrerequisites = true;
    if (meetsPrerequisites) {
      callback(null, studentId, courseId);
    } else {
      callback("Student does not meet prerequisites");
    }
  }, 1000);
}

function checkCourseAvailability(courseId, callback) {
  setTimeout(() => {
    console.log("Course availability checked");
    const seatsAvailable = true;
    if (seatsAvailable) {
      callback(null, courseId);
    } else {
      callback("No seats available in the course");
    }
  }, 1000);
}

function reserveSeat(studentId, courseId, callback) {
  setTimeout(() => {
    console.log("Seat reserved");
    callback(null, studentId, courseId);
  }, 1000);
}

function addToRoster(studentId, courseId, callback) {
  setTimeout(() => {
    console.log("Student added to course roster");
    callback(null, studentId, courseId);
  }, 1000);
}

function sendConfirmationEmail(studentId, courseId, callback) {
  setTimeout(() => {
    console.log("Confirmation email sent to student");
    callback(null, `Enrollment completed for student ${studentId} in course ${courseId}`);
  }, 1000);
}

function enrollStudent(studentId, courseId) {
  checkPrerequisites(studentId, courseId, (err, studentId, courseId) => {
    if (err) return console.log(err);

    checkCourseAvailability(courseId, (err, courseId) => {
      if (err) return console.log(err);

      reserveSeat(studentId, courseId, (err, studentId, courseId) => {
        if (err) return console.log(err);

        addToRoster(studentId, courseId, (err, studentId, courseId) => {
          if (err) return console.log(err);

          sendConfirmationEmail(studentId, courseId, (err, result) => {
            if (err) return console.log(err);
            console.log(result);
          });
        });
      });
    });
  });
}

enrollStudent("student123", "course456");