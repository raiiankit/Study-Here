"use client";
import { useState } from "react";
import { auth } from "../firebase/firebase"; 
import { createUserWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { useRouter } from "next/navigation";
import Navbar from "../component/Navbar";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      <Navbar userName={name} />;
      router.push("/");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-black">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Create an Account</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
        <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg">
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500">Login</a>
        </p>
      </div>
    </div>
    </div>
  );
}
