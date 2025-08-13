import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function InstructorRegister() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    field: "",
    contact: "",
    bio: ""
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const login = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("로그인 먼저 해주세요.");

    await addDoc(collection(db, "instructors"), {
      ...formData,
      email: user.email,
      createdAt: serverTimestamp()
    });
    alert("등록 완료!");
    setFormData({ name: "", field: "", contact: "", bio: "" });
  };

  return (
    <div>
      {!user ? (
        <button onClick={login}>Google 계정으로 로그인</button>
      ) : (
        <div>
          <p>{user.email}님 로그인 중</p>
          <button onClick={logout}>로그아웃</button>
          <form onSubmit={handleSubmit}>
            <input placeholder="이름" value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
            <input placeholder="전문분야" value={formData.field}
              onChange={(e) => setFormData({ ...formData, field: e.target.value })} required />
            <input placeholder="연락처" value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })} required />
            <textarea placeholder="소개" value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}></textarea>
            <button type="submit">등록</button>
          </form>
        </div>
      )}
    </div>
  );
}
