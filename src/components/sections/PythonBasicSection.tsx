export default function PythonBasicSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">## 💕파이썬 기본 설치 방법</h2>
      
      {/* 프롬프트 입력 예시 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">💬 프롬프트 입력 예시</h3>
        <p className="text-gray-700 mb-4">
          AI에게 파이썬 설치 방법을 물어볼 때 사용할 수 있는 프롬프트 예시입니다.
        </p>
        
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">기본 프롬프트:</h4>
          <div className="bg-gray-800 text-green-400 p-3 rounded text-sm">
            <p>"파이썬 설치과정을 알려줘"</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">참고사항:</h4>
            <div className="bg-gray-800 text-green-400 p-3 rounded text-sm">
              <p>
                파이썬 설치 과정은 운영체제에 따라 약간의 차이가 있지만, 기본적인 단계는 비슷합니다. 
                다음은 Windows, macOS, Linux 환경에서의 파이썬 설치 과정을 자세히 설명해 드릴게요.<br/><br/>
                시작하기 전에:<br/>
                - 운영체제 확인: 먼저 사용하시는 컴퓨터의 운영체제(Windows, macOS, Linux)를 확인하세요.<br/>
                - 시스템 종류 확인: 32비트인지 64비트인지도 확인해 두면 좋습니다. 대부분의 최신 컴퓨터는 64비트입니다."
              </p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">운영체제별로 확인해야할 사항:</h4>
            <div className="space-y-2">
              <div>
                <strong>Windows:</strong>
                <div className="bg-gray-800 text-green-400 p-2 rounded text-sm mt-1">
                  "Windows에서 파이썬을 설치하는 가장 일반적인 방법은 공식 설치 프로그램을 사용하는 것입니다."
                </div>
              </div>
              <div>
                <strong>macOS:</strong>
                <div className="bg-gray-800 text-green-400 p-2 rounded text-sm mt-1">
                  "macOS에는 기본적으로 파이썬 2.x 버전이 설치되어 있지만, 대부분의 최신 프로젝트는 파이썬 3.x 버전을 사용합니다. 
                  Homebrew를 사용하는 것이 가장 편리하고 권장되는 방법입니다."
                </div>
              </div>
              <div>
                <strong>Linux:</strong>
                <div className="bg-gray-800 text-green-400 p-2 rounded text-sm mt-1">
                  "대부분의 리눅스 배포판에는 파이썬 2.x 또는 3.x가 기본으로 설치되어 있습니다. 
                  하지만 최신 버전을 사용하거나 특정 빌드를 원한다면 패키지 관리자를 통해 설치하는 것이 가장 편리합니다."
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 프롬프트 작성 팁</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li><strong>구체적으로 질문하기:</strong> "파이썬 설치"보다는 "Windows에서 파이썬 3.10 설치 방법"</li>
            <li><strong>단계별로 요청하기:</strong> "단계별로 설명해줘" 또는 "초보자도 이해할 수 있게 설명해줘"</li>
            <li><strong>문제 상황 포함:</strong> "설치 중 오류가 발생했는데 해결 방법은?"</li>
            <li><strong>추가 정보 요청:</strong> "설치 후 확인 방법도 알려줘"</li>
          </ul>
        </div>
      </div>
      
      {/* 파이썬 설치과정 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">🐍 파이썬 설치과정</h3>
        <p className="text-gray-700 mb-4">
          파이썬 설치 과정은 운영체제에 따라 약간의 차이가 있지만, 기본적인 단계는 비슷합니다. 
          다음은 Windows, macOS, Linux 환경에서의 파이썬 설치 과정을 자세히 설명해 드릴게요.
        </p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">시작하기 전에:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li><strong>운영체제 확인:</strong> 먼저 사용하시는 컴퓨터의 운영체제(Windows, macOS, Linux)를 확인하세요.</li>
            <li><strong>시스템 종류 확인:</strong> 32비트인지 64비트인지도 확인해 두면 좋습니다. 대부분의 최신 컴퓨터는 64비트입니다.</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          {/* Windows 설치 */}
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">1. Windows (윈도우)</h4>
            <p className="text-sm text-blue-700 mb-3">
              Windows에서 파이썬을 설치하는 가장 일반적인 방법은 공식 설치 프로그램을 사용하는 것입니다.
            </p>
            <h5 className="font-semibold text-blue-700 mb-2">단계:</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-blue-700">
              <li><strong>파이썬 공식 웹사이트 접속:</strong> 웹 브라우저를 열고 <a href="https://www.python.org/downloads/" className="underline">https://www.python.org/downloads/</a> 에 접속합니다.</li>
              <li><strong>설치 파일 다운로드:</strong> "Download Python" 섹션에서 최신 버전의 파이썬을 찾습니다. 보통 "Download Python 3.X.X" (X는 현재 버전 번호) 버튼이 있습니다.</li>
              <li><strong>설치 프로그램 실행:</strong> 다운로드한 .exe 파일을 더블 클릭하여 실행합니다.</li>
              <li><strong>설치 옵션 선택 (중요!):</strong> 설치 프로그램 창이 열리면, <strong>반드시 가장 아래에 있는 "Add Python X.X to PATH" 체크박스를 선택합니다.</strong></li>
              <li><strong>설치 진행:</strong> "Install Now"를 클릭하면 설치가 시작됩니다. 몇 분 정도 소요될 수 있습니다.</li>
              <li><strong>설치 확인:</strong> 명령 프롬프트에서 <code className="bg-gray-200 px-1 rounded">python --version</code> 명령어로 확인</li>
            </ol>
          </div>
          
          {/* macOS 설치 */}
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">2. macOS (맥OS)</h4>
            <p className="text-sm text-green-700 mb-3">
              macOS에는 기본적으로 파이썬 2.x 버전이 설치되어 있지만, 대부분의 최신 프로젝트는 파이썬 3.x 버전을 사용합니다. 
              Homebrew를 사용하는 것이 가장 편리하고 권장되는 방법입니다.
            </p>
            <h5 className="font-semibold text-green-700 mb-2">단계:</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-green-700">
              <li><strong>Homebrew 설치:</strong> 터미널에서 <code className="bg-gray-200 px-1 rounded">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></li>
              <li><strong>파이썬 설치:</strong> <code className="bg-gray-200 px-1 rounded">brew install python</code></li>
              <li><strong>설치 확인:</strong> <code className="bg-gray-200 px-1 rounded">python3 --version</code></li>
            </ol>
          </div>
          
          {/* Linux 설치 */}
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">3. Linux (리눅스)</h4>
            <p className="text-sm text-purple-700 mb-3">
              대부분의 리눅스 배포판에는 파이썬 2.x 또는 3.x가 기본으로 설치되어 있습니다. 
              하지만 최신 버전을 사용하거나 특정 빌드를 원한다면 패키지 관리자를 통해 설치하는 것이 가장 편리합니다.
            </p>
            <div className="space-y-2">
              <div>
                <h5 className="font-semibold text-purple-700">Ubuntu/Debian 기반:</h5>
                <code className="bg-gray-200 px-1 rounded text-sm">sudo apt install python3 python3-pip</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-700">Red Hat/Fedora 기반:</h5>
                <code className="bg-gray-200 px-1 rounded text-sm">sudo dnf install python3 python3-pip</code>
              </div>
              <div>
                <h5 className="font-semibold text-purple-700">Arch Linux 기반:</h5>
                <code className="bg-gray-200 px-1 rounded text-sm">sudo pacman -S python python-pip</code>
              </div>
            </div>
          </div>
        </div>
        
        {/* 설치 후 추가 정보 */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">설치 후 추가적으로 알아두면 좋은 것들:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li><strong>가상 환경 (Virtual Environment):</strong> 파이썬 프로젝트를 진행할 때는 각 프로젝트마다 독립적인 파이썬 환경을 구축하는 것이 좋습니다.</li>
            <li><strong>IDE (통합 개발 환경):</strong> VS Code, PyCharm, Sublime Text 등과 같은 IDE나 코드 편집기를 사용하는 것이 훨씬 편리합니다.</li>
            <li><strong>패키지 관리자 pip:</strong> pip는 파이썬 패키지(라이브러리)를 설치, 제거, 관리하는 도구입니다.</li>
          </ul>
        </div>
      </div>
      
      {/* 파이썬 IDE 설치과정 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-green-600 mb-3">💻 파이썬 IDE 설치과정</h3>
        <p className="text-gray-700 mb-4">
          파이썬 개발을 효율적으로 하기 위해서는 IDE(Integrated Development Environment, 통합 개발 환경)를 사용하는 것이 좋습니다. 
          IDE는 코드 편집, 디버깅, 테스트, 버전 관리 등 다양한 기능을 통합하여 개발 과정을 편리하게 만들어 줍니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PyCharm */}
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">PyCharm (파이참)</h4>
            <p className="text-sm text-gray-600 mb-3">
              PyCharm은 JetBrains에서 개발한 강력한 파이썬 전용 IDE입니다. 
              Professional 버전(유료)과 Community 버전(무료, 오픈 소스)이 있습니다.
            </p>
            <h5 className="font-semibold text-blue-700 mb-2">설치 과정:</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              <li>PyCharm 공식 웹사이트 접속: <a href="https://www.jetbrains.com/pycharm/download/" className="underline">https://www.jetbrains.com/pycharm/download/</a></li>
              <li>Community 버전 다운로드</li>
              <li>설치 프로그램 실행</li>
              <li>설치 마법사 진행 (모든 옵션 선택 권장)</li>
              <li>초기 설정 완료</li>
            </ol>
            <div className="mt-3">
              <strong>장점:</strong> 파이썬 개발에 특화, 강력한 코드 분석, 리팩토링, 통합 디버거<br/>
              <strong>단점:</strong> VS Code에 비해 무겁고, 리소스 소모가 많을 수 있음
            </div>
          </div>
          
          {/* VS Code */}
          <div className="bg-gray-50 p-4 rounded">
            <h4 className="font-semibold text-green-700 mb-2">Visual Studio Code (VS Code)</h4>
            <p className="text-sm text-gray-600 mb-3">
              VS Code는 Microsoft에서 개발한 무료 오픈 소스 코드 편집기이지만, 
              다양한 확장 기능을 통해 강력한 IDE처럼 사용할 수 있습니다.
            </p>
            <h5 className="font-semibold text-green-700 mb-2">설치 과정:</h5>
            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
              <li>VS Code 공식 웹사이트 접속: <a href="https://code.visualstudio.com/" className="underline">https://code.visualstudio.com/</a></li>
              <li>운영체제에 맞는 버전 다운로드</li>
              <li>설치 프로그램 실행 및 설치</li>
              <li>Python 확장팩 설치 (매우 중요!)</li>
              <li>파이썬 인터프리터 선택</li>
            </ol>
            <div className="mt-3">
              <strong>장점:</strong> 가볍고 빠름, 다양한 언어 지원, 풍부한 확장 생태계<br/>
              <strong>단점:</strong> 파이썬 특화 기능은 확장팩을 통해 추가해야 함
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
          <h4 className="font-semibold text-blue-800 mb-2">💡 어떤 IDE를 선택해야 할까요?</h4>
          <p className="text-blue-700 text-sm">
            <strong>초보자라면:</strong> PyCharm Community Edition은 파이썬에 집중하기 좋으며, 
            VS Code는 가볍고 다양한 언어를 다룰 수 있는 범용성을 제공합니다.
            두 가지 모두 좋은 선택이니, 직접 사용해보시고 본인에게 더 잘 맞는 IDE를 선택하는 것을 추천합니다.
          </p>
        </div>
      </div>
    </div>
  );
} 