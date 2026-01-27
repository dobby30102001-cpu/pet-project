import React, { useMemo, useState } from "react";

function App() {
    // 1️⃣ State a, b (giá trị nhập)
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    // 2️⃣ State counter (không liên quan tới phép tính)
    const [counter, setCounter] = useState(0);

    // 3️⃣ Hàm tính tổng
    const sum = (a, b) => {
        console.log("Calculating...");
        return a + b;
    };

    // 4️⃣ useMemo: chỉ tính lại khi a hoặc b thay đổi
    const sumResult = useMemo(() => {
        return sum(a, b);
    }, [a, b]);

    return (
        <div>
            {/* Nhập a */}
            <label>
                a:
                <input
                    type="number"
                    value={a}
                    onChange={(e) => setA(Number(e.target.value))}
                />
            </label>

            {/* Nhập b */}
            <label>
                b:
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(Number(e.target.value))}
                />
            </label>

            {/* Hiển thị kết quả */}
            <p>sum: {sumResult}</p>

            {/* Counter để test re-render */}
            <p>Counter: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>
                increase counter
            </button>
        </div>
    );
}

export default App;
