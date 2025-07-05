'use client';

import { useState } from 'react';
import IntroSection from '../components/sections/IntroSection';
import PythonBasicSection from '../components/sections/PythonBasicSection';
import CalculatorSection from '../components/sections/CalculatorSection';
import CursorSection from '../components/sections/CursorSection';
import YouTubeDownloaderSection from '../components/sections/YouTubeDownloaderSection';
import PromptCreationSection from '../components/sections/PromptCreationSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', name: '📚 소개', component: IntroSection },
    { id: 'python-basic', name: '💕 파이썬 기본 설치', component: PythonBasicSection },
    { id: 'calculator', name: '🧮 파이썬 계산 앱', component: CalculatorSection },
    { id: 'cursor', name: '💻 커서 IDE', component: CursorSection },
    { id: 'youtube-downloader', name: '📥 유튜브 다운로더', component: YouTubeDownloaderSection },
    { id: 'prompt-creation', name: '💡 프롬프트 제작', component: PromptCreationSection },
  ];

  const ActiveComponent = sections.find(section => section.id === activeSection)?.component || IntroSection;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">바이브 코딩 프롬프트</h1>
            <div className="text-sm text-gray-500">
              AI와 함께하는 파이썬 학습 가이드
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border p-4 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">목차</h2>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {section.name}
                  </button>
                ))}
              </nav>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
                  <p className="text-xs text-yellow-800">
                    <strong>💡 팁:</strong> 왼쪽 목차에서 원하는 주제를 선택하여 자세한 내용을 확인하세요!
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-8">
                <ActiveComponent />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>😊 인공지능이 그대를 힘들게 하더라도 노여워하거나 슬퍼하지 말라!!!</p>
            <p className="mt-2">바이브 코딩 프롬프트 - 파이썬 학습 가이드</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
