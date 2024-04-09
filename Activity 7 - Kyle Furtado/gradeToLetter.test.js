const gradeToLetter =require("./gradeToLetter")

describe("calculateGrade", () => {
  test("should return 'A' for a score of 95", () => {
    expect(gradeToLetter(95)).toBe("A");
  });
  test("should return 'A' for a score of 90", () => {
    expect(gradeToLetter(90)).toBe("A");
  });

  test("should return 'B' for a score of 80", () => {
    expect(gradeToLetter(80)).toBe("B");
  });
  test("should return 'B' for a score of 80", () => {
    expect(gradeToLetter(85)).toBe("B");
  });

  test("should return 'C' for a score of 75", () => {
    expect(gradeToLetter(75)).toBe("C");
  });
  test("should return 'C' for a score of 70", () => {
    expect(gradeToLetter(70)).toBe("C");
  });

  test("should return 'D' for a score of 65", () => {
    expect(gradeToLetter(65)).toBe("D");
  });
  test("should return 'D' for a score of 60", () => {
    expect(gradeToLetter(60)).toBe("D");
  });

  test("should return 'Invalid input. Please provide a number.' for a non-number input", () => {
    expect(gradeToLetter('10')).toBe("Invalid input. Please provide a number.");
  });

  test("should return 'D' for a score of 50", () => {
    expect(gradeToLetter(50)).toBe("F");
  });

});