import {useEffect, useState} from "react";
import {UserType} from "@/types/UserType";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState<UserType|null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const user = localStorage.getItem('user');

    if (user) {
      setCurrentUser(JSON.parse(user));
      setIsAuthenticated(true);
    }
  }, []);
  return {
    currentUser,
    isAuthenticated
  };
}