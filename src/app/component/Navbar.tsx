"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { FiUser } from "react-icons/fi";

const Navbar: React.FC<{ userName?: string }> = ({ userName }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-lg font-bold">Study Here</div>

        <ul className="flex gap-6 text-sm">
          <li className="hover:text-yellow-400 cursor-pointer"><Link href="/">Home</Link></li>
          <li className="hover:text-yellow-400 cursor-pointer"><Link href="/semester">Semester</Link></li>
          <li className="hover:text-yellow-400 cursor-pointer"><Link href="/contact">Contact</Link></li>
          <li className="hover:text-yellow-400 cursor-pointer"><Link href="/contributor">Contributor</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <FiUser className="text-yellow-500 text-lg" />
                <span>Hi , {user.displayName || userName || "User"} !</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg font-bold text-sm">
                Join Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
