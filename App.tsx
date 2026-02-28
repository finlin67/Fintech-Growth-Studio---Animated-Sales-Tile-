'use client';

import React from 'react';
import { Landmark, TrendingUp, BarChart3, ShieldCheck, Activity } from 'lucide-react';
import FinServTile from './components/FinServTile';

export default function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans overflow-hidden flex flex-col relative">
      
      {/* Background Grid Pattern - Using CSS class from globals.css */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-grid-pattern" />

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-3 bg-[#020617]/80 backdrop-blur-md border-b border-slate-800/50 z-50 shrink-0 sticky top-0">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 text-white cursor-pointer group">
            <Landmark className="text-[#0b8aad] w-7 h-7 group-hover:scale-110 transition-transform" />
            <h2 className="text-white text-base font-bold tracking-tight">Fintech Growth</h2>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a className="text-slate-400 hover:text-white text-xs font-medium transition-colors" href="#">Dashboard</a>
            <a className="text-slate-400 hover:text-white text-xs font-medium transition-colors" href="#">Wealth</a>
            <a className="text-slate-400 hover:text-white text-xs font-medium transition-colors" href="#">Security</a>
            <a className="text-slate-400 hover:text-white text-xs font-medium transition-colors" href="#">Analytics</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#0b8aad] hover:bg-[#0b8aad]/90 text-white text-xs font-bold px-4 py-2 rounded-lg transition-all shadow-lg shadow-[#0b8aad]/20">
            Get Started
          </button>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8 border border-slate-700 cursor-pointer hover:border-slate-500 transition-colors" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3V9LbZZS5mN6duMrLts_v4Y_g8JI0tEgD2az5aUpAifM7RARgvJh7YwxquoIdraX421_KhVCyB40ZIm522jN-0SgsaXlWpQLOrfGo3RfCxqiLxzku5WdlhO2CuVNReiSXfq1uPqgcyxlXu4sA850HWpX6P05CNSIvR3Lwg-oe4b6FMgisTwdP91GyRM4nrf1M_EiGuxGVKVhvDlBqcwc11SuHPLe-nJyFL1xOoXqkjViLN8rkZ_-4xSYaaNADPVPyxtl1VOlHh956")' }}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative flex flex-col z-10">
        
        {/* Layout Grid */}
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b8aad]/10 border border-[#0b8aad]/20">
                    <span className="size-2 rounded-full bg-[#10b981] animate-pulse"></span>
                    <span className="text-[#0b8aad] text-[10px] font-bold uppercase tracking-widest">Enterprise Grade Security</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black leading-tight text-white">
                    Wealth & <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#60a5fa]">Onboarding</span>
                </h1>
                
                <p className="text-slate-400 text-sm md:text-lg max-w-xl leading-relaxed">
                    Experience +52% AUM Growth and 3.1x CLV with our secure financial pipeline. Built for modern fintech leaders who demand precision and scale.
                </p>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#0b8aad] hover:scale-105 hover:shadow-xl hover:shadow-[#0b8aad]/20 transition-all text-white text-sm font-bold">
                        View Dashboard
                    </button>
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-slate-800 hover:bg-slate-700 text-white text-sm font-bold border border-slate-700 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Right Column: Animated Tile */}
            <div className="w-full flex justify-center items-center h-[500px] md:h-[600px] lg:h-auto">
                <FinServTile />
            </div>

        </div>

        {/* Stats Footer */}
        <div className="mt-auto px-8 py-6 border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="h-10 w-1 bg-[#10b981] rounded-full group-hover:h-12 transition-all duration-300"></div>
                    <div>
                        <p className="text-white text-lg font-bold group-hover:text-[#10b981] transition-colors">+52%</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">AUM Growth</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="h-10 w-1 bg-[#60a5fa] rounded-full group-hover:h-12 transition-all duration-300"></div>
                    <div>
                        <p className="text-white text-lg font-bold group-hover:text-[#60a5fa] transition-colors">3.1x</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">CLV Multiplier</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="h-10 w-1 bg-[#0b8aad] rounded-full group-hover:h-12 transition-all duration-300"></div>
                    <div>
                        <p className="text-white text-lg font-bold group-hover:text-[#0b8aad] transition-colors">99.9%</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Uptime</p>
                    </div>
                </div>
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="h-10 w-1 bg-slate-600 rounded-full group-hover:h-12 transition-all duration-300"></div>
                    <div>
                        <p className="text-white text-lg font-bold group-hover:text-slate-400 transition-colors">ISO 27k</p>
                        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-wider">Certified</p>
                    </div>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
}