import {useState} from "react";
import { useAuth } from "../contexts/AuthContext";

export default function SignUp() {
    const { signUp } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
        }
        try {
        await signUp(email, password);
        } catch (err) {
        setError(err.message);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input type = "email" value= {email} onChange={(e) => setEmail(e.target.value)} />
            <input type = "password" value= {password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>

        </form>
        /* <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            {error && <div className="mb-4 text-red-500">{error}</div>}
            <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
                </label>
                <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
                </label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                Confirm Password
                </label>
                <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">
                Confirm Password
                </label>
                <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                Sign Up
            </button>
        </form>
        </div>
        </div>*/
    );
}