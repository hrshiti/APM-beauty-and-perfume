import React, { useState, useEffect } from "react";
import adminService from "../admin-services/adminService";
import { useNavigate } from "react-router-dom";
import { Lock, User, Eye, EyeOff, Shield, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegistrationMode, setIsRegistrationMode] = useState(false);
  const [statusLoading, setStatusLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAdminStatus();
  }, []);

  const checkAdminStatus = async () => {
    try {
      setStatusLoading(true);
      const status = await adminService.checkAdminStatus();
      setStatusLoading(false);
      setIsRegistrationMode(!status.data.adminExists);
    } catch (error) {
      console.error('Failed to check admin status:', error);
      setStatusLoading(false);
      setIsRegistrationMode(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const response = await adminService.login({
        email,
        password
      });

      if (response.data.token) {
        setSuccess("Login successful! Redirecting...");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/admin");
        }, 1500);
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (!username.trim() || username.length < 3 || username.length > 30) {
      setError("Username must be 3-30 characters long");
      setLoading(false);
      return;
    }

    if (!email.trim() || !password.trim() || password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    try {
      const response = await adminService.registerAdmin({
        username,
        email,
        password
      });

      if (response.data.token) {
        setSuccess("Admin account created successfully! Redirecting...");
        setUsername("");
        setEmail("");
        setPassword("");
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else {
        setError("Registration failed - No token received");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsRegistrationMode(!isRegistrationMode);
    setError("");
    setSuccess("");
    setEmail("");
    setPassword("");
    setUsername("");
  };

  if (statusLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking admin status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-3">
      <div className="w-full max-w-sm">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mb-2.5">
              <img 
                src="/vintage-beauty-logo.svg" 
                alt="Vintage Beauty Logo" 
                className="w-9 h-9 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-lg hidden">V</div>
            </div>
            <h1 className="text-lg font-bold text-white mb-1.5">Vintage Admin</h1>
            <p className="text-sm text-blue-100">
              {isRegistrationMode ? 'Create your admin account' : 'Sign in to manage your store'}
            </p>
          </div>

          <div className="px-5 py-5">
            <form onSubmit={isRegistrationMode ? handleRegistration : handleLogin} className="space-y-4">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-medium">{error}</span>
                </div>
              )}

              {success && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">{success}</span>
                </div>
              )}

              {isRegistrationMode && (
                <div className="space-y-1.5">
                  <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                    Username *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      id="username"
                      type="text"
                      placeholder="Enter your username"
                      className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      minLength={3}
                      maxLength={30}
                    />
                  </div>
                  <p className="text-xs text-gray-500">Username must be 3-30 characters long</p>
                </div>
              )}

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5 relative">
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-12 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="flex justify-between items-center">
                  {isRegistrationMode ? (
                    <p className="text-xs text-gray-500">Password must be at least 6 characters long</p>
                  ) : (
                    <Link
                      to="/admin/forgot-password"
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Forgot Password?
                    </Link>
                  )}
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{isRegistrationMode ? 'Creating account...' : 'Signing in...'}</span>
                  </div>
                ) : (
                  isRegistrationMode ? 'Create Admin Account' : 'Sign In'
                )}
              </button>
            </form>

            <div className="mt-5 text-center">
              <button
                type="button"
                onClick={toggleMode}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center justify-center space-x-2 mx-auto"
              >
                {isRegistrationMode ? (
                  <>
                    <Shield className="w-4 h-4" />
                    <span>Already have an account? Sign in</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Need to create admin account? Register</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-500">
            {isRegistrationMode 
              ? 'Create your admin account to manage the store' 
              : 'Secure admin access for store management'
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

