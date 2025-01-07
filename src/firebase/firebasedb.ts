import { initializeApp } from "firebase/app";

// Firebase 설정
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // Firebase 프로젝트의 API 키
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN, // 인증 도메인
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // 프로젝트 ID
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET, // 스토리지 버킷 URL
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, // 메시징 발송자 ID
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID, // Firebase 앱 ID
};

// Firebase 초기화
const firebaseApp = initializeApp(firebaseConfig); // Firebase 애플리케이션 초기화

export default firebaseApp; // 초기화된 Firebase 앱 객체를 외부에서 사용할 수 있도록 내보냄
