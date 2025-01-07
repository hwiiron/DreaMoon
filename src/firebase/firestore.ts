import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebasedb"; // Firebase 초기화 파일에서 초기화된 Firebase 앱 가져오기

const db = getFirestore(firebaseApp); // Firestore 데이터베이스 인스턴스 생성

export default db; // 생성된 Firestore 인스턴스를 외부에서 사용할 수 있도록 내보냄
