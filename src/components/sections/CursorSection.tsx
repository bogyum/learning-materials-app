export default function CursorSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">## 💕인공지능과 IDE의 만남 커서!!!</h2>
      
      {/* 커서 IDE란? */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">💻 커서 IDE란?</h3>
        <p className="text-gray-700 mb-4">
          Cursor는 AI 기능을 강력하게 통합한 코드 편집기로, 특히 AI 기반 코드 생성, 수정, 채팅 기능에 특화되어 있습니다. 
          Visual Studio Code를 기반으로 만들어졌기 때문에 VS Code와 유사한 사용자 경험을 제공합니다.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded">
          <h4 className="font-semibold mb-2">주요 특징:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>AI 코드 자동완성</li>
            <li>실시간 코드 리뷰</li>
            <li>버그 찾기 및 수정 제안</li>
            <li>코드 설명 및 문서화</li>
            <li>다양한 프로그래밍 언어 지원</li>
            <li>VS Code 기반으로 익숙한 인터페이스</li>
          </ul>
        </div>
      </div>
      
      {/* 커서 설치방법 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-green-600 mb-3">🚀 커서 설치방법</h3>
        <p className="text-gray-700 mb-4">
          커서 설치 과정은 운영체제별로 거의 동일하며 매우 간단합니다.
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">1. Cursor 공식 웹사이트 접속</h4>
            <p className="text-sm text-blue-700">
              웹 브라우저를 열고 <a href="https://www.cursor.com/" className="underline">https://www.cursor.com/</a> 에 접속합니다.
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">2. 설치 파일 다운로드</h4>
            <p className="text-sm text-green-700">
              웹사이트 중앙에 있는 "Download" 버튼을 클릭합니다. 
              Cursor는 자동으로 사용자의 운영체제를 감지하여 적절한 설치 파일을 다운로드합니다.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">3. 설치 프로그램 실행</h4>
            <div className="space-y-2 text-sm text-purple-700">
              <div>
                <strong>Windows:</strong> 다운로드한 <code className="bg-gray-200 px-1 rounded">Cursor Setup.exe</code> 파일을 더블 클릭하여 실행
              </div>
              <div>
                <strong>macOS:</strong> 다운로드한 <code className="bg-gray-200 px-1 rounded">Cursor.dmg</code> 파일을 더블 클릭하여 열고, 
                Cursor 아이콘을 Applications 폴더로 드래그 앤 드롭
              </div>
              <div>
                <strong>Linux:</strong> 다운로드한 <code className="bg-gray-200 px-1 rounded">.AppImage</code> 파일에 실행 권한을 부여하고 실행
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">4. 초기 설정 및 로그인</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
              <li>Keyboard Shortcuts 설정</li>
              <li>Language 설정</li>
              <li>Codebase Indexing 설정</li>
              <li>CLI Shortcuts 설치</li>
              <li>VS Code 설정 가져오기 (선택 사항)</li>
              <li>계정 생성 및 로그인</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Cursor의 주요 AI 기능 활용 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">🎯 Cursor의 주요 AI 기능 활용</h3>
        <div className="bg-gray-50 p-4 rounded">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">핵심 단축키:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li><code className="bg-gray-200 px-1 rounded">Ctrl + K</code> (Windows/Linux) 또는 <code className="bg-gray-200 px-1 rounded">Cmd + K</code> (macOS): 인라인 AI 편집</li>
                <li><code className="bg-gray-200 px-1 rounded">Ctrl + L</code> (Windows/Linux) 또는 <code className="bg-gray-200 px-1 rounded">Cmd + L</code> (macOS): AI 채팅 패널 토글</li>
                <li><code className="bg-gray-200 px-1 rounded">Tab</code>: AI 코드 제안 수락</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">AI 기능:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                <li>선택한 코드 블록에 대한 AI 생성/수정 요청</li>
                <li>코드에 대해 AI에게 질문하거나 논의</li>
                <li>실시간 코드 제안 및 자동완성</li>
                <li>코드 리뷰 및 개선 제안</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">💡 사용 팁</h4>
        <p className="text-yellow-700 text-sm">
          Cursor는 AI를 활용한 생산성 향상에 중점을 둔 도구이므로, 핵심 단축키를 익히는 것이 중요합니다. 
          VS Code 기반이므로 VS Code 사용자라면 쉽게 적응할 수 있습니다.
        </p>
      </div>
    </div>
  );
} 