import { useState, useEffect } from "react";

//BÀI 1
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Bài 1: Ứng dụng đếm số</h1>
      <h2>Giá trị hiện tại: {count}</h2>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>-</button>
        <button onClick={() => setCount(count + 1)} style={{ marginLeft: "10px" }}>+</button>
        <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }} >Reset</button>
      </div>
    </div>
  );
}


//BÀI 2
function TodoList() {
  const [task, set] = useState("");
  const [tasks, sets] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const addTask = () => {
    if (!task.trim()) return;
    sets([...tasks, { id: idCounter, text: task }]);
    setIdCounter(idCounter + 1);
    set("");
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Bài 2: Danh sách công việc</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => set(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t) => (<li key={t.id}>{t.text}</li>))}
      </ul>
    </div>
  );
}

// BÀI 3
function Color({ color }) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: color,
        marginTop: "20px",
      }}
    />
  );
}

function Change() {
  const colors = ["red", "green", "blue", "yellow"];
  const [color, set] = useState("red");

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Bài 3: Ứng dụng đổi màu nền</h1>
      {colors.map((c) => (<button style={{ marginLeft: "10px" }} key={c} onClick={() => set(c)}>{c}</button>))}
      <Color color={color} />
    </div>
  );
}

//BÀI 4
function Students({ name, age, className }) {
  const [show, set] = useState(false);
  return (
    <div style={{ border: "3px solid red", padding: "10px", margin: "10px" }}>
      <h3>{name}</h3>
      <button onClick={() => set(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

function StudentList() {
  const students = [
    { name: "Nguyễn Văn A", age: 20, className: "UDU1" },
    { name: "Trần Thị B", age: 21, className: "UDU2" },
    { name: "Lê Văn C", age: 19, className: "UDU3" },
  ];

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Bài 4: Thông tin sinh viên</h1>
      {students.map((s, i) => (
        <Students
          key={i}
          name={s.name}
          age={s.age}
          className={s.className}
        />
      ))}
    </div>
  );
}

// BÀI 5
function Display({ time }) {
  return <h2>{time}</h2>;
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h1>Bài 5: Đồng hồ</h1>
      <Display time={time} />
    </div>
  );
}

// ===== APP CHÍNH =====
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Counter />
      <TodoList />
      <Change />
      <StudentList />
      <Clock />
    </div>
  );
}

export default App;
