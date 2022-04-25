import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { usersUrl } from "../config";
export default function User() {
  const [user, setUser] = useState();
  const params = useParams();

  const getUsers = useCallback(async () => {
    const res = await fetch(`${usersUrl}/${params.userId}`);
    const dataUsers = await res.json();
    console.log(dataUsers);
    setUser(dataUsers);
  }, [params.userId]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return <div>{user && <h1>User Id: {user.username}</h1>}</div>;
}
