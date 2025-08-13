import { useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

type FormState = { name: string; field: string; contact: string; bio: string; };

export default function InstructorRegister() {
  const [user, setUser] = useState<null | { email: string | null }>(null);
  const [f, setF] = useState<FormState>({ name: "", field: "", contact: "", bio: "" });
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u ? { email: u.email } : null));
    return () => unsub();
  }, []);

  const login = async () => { await signInWithPopup(auth, provider); };
  const logout = async () => { await signOut(auth); };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.email) return alert("로그인 후 이용해주세요.");
    await addDoc(collection(db, "instructors"), { ...f, email: user.email, createdAt: serverTimestamp() });
    alert("제출 완료!");
    setF({ name: "", field: "", contact: "", bio: "" });
  };

  if (!user) return <button onClick={login}>Google 계정으로 로그인</button>;

  return (
    <div style={{ maxWidth: 720 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
        <div><strong>{user.email}</strong> 로그인 중</div>
        <button onClick={logout}>로그아웃</button>
      </div>

      <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
        <input placeholder="이름" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} required />
        <input placeholder="전문분야" value={f.field} onChange={(e) => setF({ ...f, field: e.target.value })} required />
        <input placeholder="연락처" value={f.contact} onChange={(e) => setF({ ...f, contact: e.target.value })} required />
        <textarea placeholder="소개(200자)" maxLength={200} value={f.bio} onChange={(e) => setF({ ...f, bio: e.target.value })} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
