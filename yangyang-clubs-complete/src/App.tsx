import InstructorRegister from "./components/InstructorRegister";

export default function App() {
  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
      <h1>강사 등록 시스템</h1>
      <InstructorRegister />
    </div>
  );
}
