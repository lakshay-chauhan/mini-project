import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    alert(`${isLogin ? "Logging in" : "Signing up"} with Email: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}  
      >
        <Card className="p-6 w-96 shadow-lg rounded-2xl">
          <CardContent>
            <h2 className="text-xl font-bold text-center mb-4">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3"
            />
            <Button onClick={handleAuth} className="w-full mb-3">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
            <p className="text-center text-sm">
              {isLogin ? "Don't have an account?" : "Already have an account?"} 
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-blue-500 hover:underline ml-1"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AuthPage;
