import React, { useState, useEffect } from 'react';
import { Pill, Mail, Lock, Activity, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [animationStage, setAnimationStage] = useState('entering'); // entering, waiting, breaking, form, success

    useEffect(() => {
        const entryTimer = setTimeout(() => {
            setAnimationStage('waiting');
        }, 1200);

        const breakTimer = setTimeout(() => {
            setAnimationStage('breaking');
        }, 1800);

        const revealTimer = setTimeout(() => {
             // Only perform this if we haven't already moved to success
             setAnimationStage(prev => prev === 'success' ? 'success' : 'form');
        }, 2400);

        return () => {
            clearTimeout(entryTimer);
            clearTimeout(breakTimer);
            clearTimeout(revealTimer);
        };
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Logging in with:', email, password);
        
        // Trigger Heartbeat Transition
        setAnimationStage('success');

        // Navigate after animation
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    return (
        <div className="flex min-h-screen w-full bg-gradient-to-br from-teal-50 via-white to-cyan-100 justify-center items-center relative overflow-hidden">
    
            {/* Optional: Dot Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0F766E_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            {/* Custom CSS for Smooth Animations */}
            <style>{`
                @keyframes floatInRotate {
                    0% { transform: translateY(-100px) scale(0) rotate(-90deg); opacity: 0; }
                    60% { transform: translateY(20px) scale(1.2) rotate(45deg); opacity: 1; }
                    100% { transform: translateY(0) scale(1) rotate(45deg); opacity: 1; }
                }
                @keyframes breakTopSmooth {
                    0% { transform: translate(0, 0) rotate(45deg); }
                    100% { transform: translate(-80px, -80px) rotate(-10deg); opacity: 0; }
                }
                @keyframes breakBottomSmooth {
                    0% { transform: translate(0, 0) rotate(45deg); }
                    100% { transform: translate(80px, 80px) rotate(90deg); opacity: 0; }
                }
                @keyframes formPopSoft {
                    0% { transform: scale(0.8); opacity: 0; filter: blur(10px); }
                    100% { transform: scale(1); opacity: 1; filter: blur(0px); }
                }
                @keyframes heartbeat-pulse {
                    0% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.3); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.5; }
                }
                @keyframes ekg-line {
                    0% { stroke-dashoffset: 1000; }
                    100% { stroke-dashoffset: 0; }
                }
                
                .capsule-enter { animation: floatInRotate 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
                .capsule-break-top { animation: breakTopSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
                .capsule-break-bottom { animation: breakBottomSmooth 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
                .form-enter { animation: formPopSoft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .animate-heartbeat { animation: heartbeat-pulse 1.2s ease-in-out infinite; }
            `}</style>
            
            {/* --- HEARTBEAT TRANSITION OVERLAY --- */}
            {animationStage === 'success' && (
                <div className="fixed inset-0 z-50 bg-red-600 flex flex-col justify-center items-center transition-all duration-1000 animate-in fade-in">
                    <div className="relative">
                        <Heart size={120} className="text-white fill-white animate-heartbeat" />
                        <Activity size={60} className="text-red-600 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <h2 className="text-white text-3xl font-bold mt-8 animate-pulse text-center">Access Granted<br/><span className="text-xl font-normal opacity-80">Entering System...</span></h2>
                </div>
            )}

            {/* --- CAPSULE ANIMATION WRAPPER --- */}
            {animationStage !== 'form' && animationStage !== 'success' && (
                <div className={`absolute z-20 flex flex-col justify-center items-center transition-all duration-500`}>

                    <div className={`relative flex flex-col items-center justify-center  
                        ${animationStage === 'entering' ? 'capsule-enter' : ''}
                        ${animationStage === 'waiting' ? 'transform rotate-45 scale-100' : ''} 
                    `}>
                        {/* Top Half (Red) */}
                        <div className={`w-32 h-64 bg-gradient-to-b from-red-500 to-red-600 rounded-t-full border-4 border-white shadow-lg relative z-10 
                            ${animationStage === 'breaking' ? 'capsule-break-top' : ''}
                        `}>
                            <div className="absolute top-2 left-4 w-20 h-3 bg-white opacity-20 rounded-full"></div>
                        </div>

                        {/* Middle Line */}
                        <div className={`w-32 h-1 bg-gray-200 z-0 ${animationStage === 'breaking' ? 'opacity-0' : 'opacity-100'}`}></div>

                        {/* Bottom Half (White) */}
                        <div className={`w-32 h-64 bg-gradient-to-b from-gray-50 to-gray-200 rounded-b-full border-4 border-white shadow-lg relative z-10 
                            ${animationStage === 'breaking' ? 'capsule-break-bottom' : ''}
                        `}>
                            <div className="absolute bottom-4 right-8 w-10 h-2 bg-gray-300 opacity-20 rounded-full"></div>
                        </div>

                        <div className={`absolute inset-0 bg-red-500 blur-2xl opacity-20 -z-10 transition-opacity duration-500 ${animationStage === 'breaking' ? 'opacity-0' : 'opacity-30'}`}></div>
                    </div>
                </div>
            )}

            {/* --- LOGIN FORM --- */}
            {animationStage !== 'entering' && animationStage !== 'waiting' && animationStage !== 'success' && (
                <div className={`z-10 w-full max-w-[420px] p-6 ${animationStage === 'form' ? 'form-enter' : 'opacity-0'}`}>
                    <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50 relative overflow-hidden">

                        {/* Decorative Top Gradient */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-teal-500"></div>

                        {/* Header Icon */}
                        <div className="absolute -top-8 -right-8 bg-teal-50 p-8 rounded-full opacity-50"></div>
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl shadow-lg flex items-center justify-center text-white mb-6 rotate-3">
                            <Activity size={32} />
                        </div>

                        <div className="text-center mb-8">
                            <h2 className="text-gray-800 text-3xl font-bold mb-1 tracking-tight">Welcome Back</h2>
                            <p className="text-gray-400 text-sm">Pharmacy Management System</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-5">
                            <div className="group">
                                <label className="block mb-2 text-sm font-semibold text-gray-600 ml-1">Email</label>
                                <div className="relative transition-all duration-300 focus-within:transform focus-within:scale-[1.02]">
                                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                                    <input
                                        type="email"
                                        placeholder="admin@pharmacy.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-3.5 px-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="group">
                                <label className="block mb-2 text-sm font-semibold text-gray-600 ml-1">Password</label>
                                <div className="relative transition-all duration-300 focus-within:transform focus-within:scale-[1.02]">
                                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-teal-500 transition-colors" />
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-3.5 px-4 pl-12 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all shadow-sm"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full mt-2 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white py-3.5 rounded-xl text-sm font-bold flex justify-center items-center gap-2 transform active:scale-95 transition-all shadow-lg hover:shadow-teal-500/30"
                            >
                                Secure Login <Pill size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
        
    );
};

export default Login;
