function calculateDiagonalLength(length, width) {
    const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));
    return diagonal;
  }
  
  // ตัวอย่างการเรียกใช้ฟังก์ชัน
  const rectangleLength = 3;
  const rectangleWidth = 4;
  const diagonalLength = calculateDiagonalLength(rectangleLength, rectangleWidth);
  console.log(`ความยาวเส้นทแยงมุมของสี่เหลี่ยมผืนผ้าที่มีความยาว ${rectangleLength} และความกว้าง ${rectangleWidth} คือ ${diagonalLength}`);
  