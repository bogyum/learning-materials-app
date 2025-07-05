export default function IntroSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4"># 바이브 코딩 프롬프트</h1>
        <p className="text-xl text-gray-600 mb-6">
          <strong>😊 인공지능이 그대를 힘들게 하더라도 노여워하거나 슬퍼하지 말라!!!</strong>
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">📚 학습 목차</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-600 mb-2">💕 파이썬 기본 설치 방법</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 파이썬 설치과정 (Windows, macOS, Linux)</li>
              <li>• 파이썬 IDE 설치과정 (PyCharm, VS Code)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-green-600 mb-2">🧮 파이썬 계산 앱 프롬프트</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• GUI 계산기 만들기</li>
              <li>• 키보드 이벤트</li>
              <li>• 실행파일 변환</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-purple-600 mb-2">💻 인공지능과 IDE의 만남 커서!!!</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 커서 설치방법</li>
              <li>• AI 기능 활용</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-red-600 mb-2">📥 파이썬 유튜브 다운로드 앱</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• GUI 다운로더 만들기</li>
              <li>• PyTube vs yt-dlp</li>
              <li>• 고급 기능 구현</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
        <h3 className="font-semibold text-yellow-800 mb-2">💡 사용 방법</h3>
        <p className="text-yellow-700">
          왼쪽 사이드바에서 원하는 주제를 선택하여 자세한 내용을 확인하세요! 
          각 섹션에는 상세한 설치 방법과 코드 예제가 포함되어 있습니다.
        </p>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <h3 className="font-semibold text-blue-800 mb-2">🎯 학습 목표</h3>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li>파이썬 개발 환경 구축 및 IDE 활용</li>
          <li>GUI 애플리케이션 개발 능력 향상</li>
          <li>AI 기반 개발 도구 활용법 습득</li>
          <li>실용적인 파이썬 프로젝트 구현</li>
          <li>실행 파일 제작 및 배포 방법 학습</li>
        </ul>
      </div>
    </div>
  );
} 