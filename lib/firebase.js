import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBDZvq26zHrJHv_skhwIu4kUgR86BnRDdA",
  authDomain: "juyeon-builds.firebaseapp.com",
  projectId: "juyeon-builds",
  storageBucket: "juyeon-builds.appspot.com",
  messagingSenderId: "220022975004",
  appId: "1:220022975004:web:b54cda4c80c4c867bc0dd9",
  measurementId: "G-0CT41VPT4K"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
