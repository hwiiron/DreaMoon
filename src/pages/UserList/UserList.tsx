import { useEffect, useState } from "react";
import db from "../../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

type User = {
  id: string;
  nickname: string;
  age: number;
};

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // const fetchUsers = async () => {
  //   const usersCollection = collection(db, "users");
  //   const usersSnapshot = await getDocs(usersCollection);
  //   const usersList = usersSnapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     nickname: doc.data().nickname,
  //     age: doc.data().age,
  //   }));
  //   setUsers(usersList);
  // };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  const fetchUsers = async () => {
    try {
      console.log("Fetching users...");
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        nickname: doc.data().nickname,
        age: doc.data().age,
      }));
      console.log("Fetched users:", usersList);
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2>유저 목록</h2>
      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "2px solid orange", margin: "20px 0" }}
        >
          <p>아이디: {user.id}</p>
          <p>닉네임: {user.nickname}</p>
          <p>나이: {user.age}</p>
        </div>
      ))}
    </>
  );
}

export default UserList;
