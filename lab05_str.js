function truncate(str, length) {
    if (str.length > length) {
        return str.slice(0, length - 1) + '...';
    } else {
        return str;
    }
}

// ตัวอย่างการใช้งาน
const result1 = truncate("What I'd like to tell on this topic is:", 1);
console.log(result1); // ผลลัพธ์: "What I'd like to te..."

const result2 = truncate("Hi everyone!", 20);
console.log(result2); // ผลลัพธ์: "Hi everyone!"
