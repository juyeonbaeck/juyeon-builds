// pages/admin.js

import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../lib/firebase'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [user, setUser] = useState(null)
  const router = useRouter()


  const handleLogin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        setUser(userCredential.user)

        // ✅ 로그인 성공 시 홈으로 이동
        router.push('/')
    } catch (err) {
      setError('로그인 실패: 이메일 또는 비밀번호를 확인하세요')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-24 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

      {!user ? (
        <>
          <input
            className="w-full p-2 mb-2 border"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className="w-full p-2 mb-2 border"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white py-2 rounded"
            onClick={handleLogin}
          >
            로그인
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </>
      ) : (
        <p>🎉 {user.email} 님, 로그인 성공!</p>
      )}
    </div>
  )
}
