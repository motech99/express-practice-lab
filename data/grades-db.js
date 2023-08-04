const grades = [
    {class: 'Physical Education', grade:'B', pass: true },
    {class: 'History', grade: 'C', pass: true},
    {class: 'Music', grade: 'F', pass: false}
  ];

  module.exports = {
    getAll: function() {
        return grades;
    }
  }