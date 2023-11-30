function calculateCircumference(radius) {
    // ใช้สูตร C = 2 * π * r
    const pi = Math.PI;
    const circumference = 2 * pi * radius;
  
    return circumference;
  }
  
  // ตัวอย่างการเรียกใช้ฟังก์ชัน
  const radius = 8;
  const result = calculateCircumference(radius);
  console.log(`ความยาวเส้นรอบวงของวงกลมที่มีรัศมี ${radius} คือ ${result}`);
  