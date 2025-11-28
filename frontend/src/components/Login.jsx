import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import BottomNavbar from './BottomNavbar';
import logo from '../assets/logo vintage.png';
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animations';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' or 'otp'
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number');
      return;
    }

    setIsLoading(true);
    // Simulate OTP sending
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      setStep('otp');
      setTimer(60); // 60 seconds timer
      // In real app, OTP would be sent via SMS/Email
      // For demo, we'll use a fixed OTP: 123456
      console.log('OTP sent to', phone, '- Demo OTP: 123456');
    }, 1500);
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      alert('Please enter a valid 6-digit OTP');
      return;
    }

    setIsLoading(true);
    // Simulate OTP verification
    setTimeout(() => {
      // For demo, accept OTP: 123456
      if (otp === '123456') {
        login({
          name: 'Hriti Singh',
          email: `user${phone}@example.com`,
          phone: phone
        });
        navigate('/');
      } else {
        alert('Invalid OTP. Please try again. (Demo OTP: 123456)');
        setIsLoading(false);
      }
    }, 1500);
  };

  const handleResendOtp = () => {
    if (timer === 0) {
      setOtpSent(false);
      setOtp('');
      setTimer(60);
      // Resend OTP logic here
      console.log('OTP resent to', phone, '- Demo OTP: 123456');
    }
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-digits
    const cleaned = value.replace(/\D/g, '');
    // Limit to 10 digits
    return cleaned.slice(0, 10);
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-white pb-20 md:pb-0 flex items-center justify-center overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div 
        className="w-full max-w-md px-4 md:px-6 py-8 md:py-12 overflow-x-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Logo and Brand */}
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            {logo && (
              <img 
                src={logo} 
                alt="Vintage Beauty Logo" 
                className="h-10 md:h-12 w-auto"
              />
            )}
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-white">
              VINTAGE BEAUTY
            </h1>
          </div>
          <p className="text-gray-400 text-sm md:text-base">
            {step === 'phone' ? 'Login to your account' : 'Enter OTP to continue'}
          </p>
        </motion.div>

        {/* Login Form Card */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900 to-black rounded-xl md:rounded-2xl p-4 md:p-8 border border-gray-800 shadow-xl overflow-x-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {step === 'phone' ? (
              <motion.form 
                key="phone"
                onSubmit={handlePhoneSubmit} 
                className="space-y-5 md:space-y-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
              <div>
                <label className="block text-sm md:text-base text-gray-400 mb-2">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus-within:border-[#D4AF37] transition-colors">
                  <span className="text-gray-400">+91</span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                    required
                    placeholder="9876543210"
                    maxLength="10"
                    className="flex-1 bg-transparent text-white placeholder-gray-500 focus:outline-none"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  We'll send you a 6-digit OTP to verify your number
                </p>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || phone.length !== 10}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#F4D03F] hover:to-amber-400 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-bold px-6 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Send OTP</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.form 
              key="otp"
              onSubmit={handleOtpSubmit} 
              className="space-y-5 md:space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <label className="block text-sm md:text-base text-gray-400 mb-2">
                  Enter OTP <span className="text-red-400">*</span>
                </label>
                <div className="flex items-center justify-center gap-1.5 md:gap-2 flex-wrap">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <motion.input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={otp[index] || ''}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '');
                        if (value) {
                          const newOtp = otp.split('');
                          newOtp[index] = value;
                          setOtp(newOtp.join(''));
                          // Auto-focus next input
                          if (index < 5 && e.target.nextSibling) {
                            e.target.nextSibling.focus();
                          }
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Backspace' && !otp[index] && index > 0) {
                          e.target.previousSibling.focus();
                        }
                      }}
                      className="w-10 h-10 md:w-14 md:h-14 bg-gray-800 border border-gray-700 rounded-lg text-center text-lg md:text-2xl font-bold text-white focus:outline-none focus:border-[#D4AF37] transition-colors flex-shrink-0"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      whileFocus={{ scale: 1.05 }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  OTP sent to +91 {phone}
                </p>
                <p className="text-xs text-[#D4AF37] mt-1 text-center">
                  Demo OTP: <span className="font-bold">123456</span>
                </p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">
                  Didn't receive OTP?
                </span>
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={timer > 0}
                  className={`font-medium transition-colors ${
                    timer > 0
                      ? 'text-gray-600 cursor-not-allowed'
                      : 'text-[#D4AF37] hover:text-amber-400'
                  }`}
                >
                  {timer > 0 ? `Resend in ${timer}s` : 'Resend OTP'}
                </button>
              </div>

              <motion.button
                type="submit"
                disabled={isLoading || otp.length !== 6}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-amber-500 hover:from-[#F4D03F] hover:to-amber-400 disabled:from-gray-700 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-bold px-6 py-3 md:py-4 rounded-lg text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Verify & Login</span>
                  </>
                )}
              </motion.button>

              <button
                type="button"
                onClick={() => {
                  setStep('phone');
                  setOtp('');
                  setOtpSent(false);
                  setTimer(0);
                }}
                className="w-full text-gray-400 hover:text-white text-sm font-medium transition-colors"
              >
                ← Change Phone Number
              </button>
            </motion.form>
          )}
          </AnimatePresence>

          {/* Divider */}
          <div className="my-6 md:my-8 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-800"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          {/* Signup Link */}
          <div className="text-center">
            <p className="text-gray-400 text-sm md:text-base mb-3">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="inline-block w-full bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-lg text-base transition-all duration-300 border border-gray-700 hover:border-[#D4AF37]/30"
            >
              Create New Account
            </Link>
          </div>
        </motion.div>

        {/* Back to Home */}
        <motion.div 
          className="text-center mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            to="/"
            className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      <BottomNavbar />
    </motion.div>
  );
};

export default Login;

