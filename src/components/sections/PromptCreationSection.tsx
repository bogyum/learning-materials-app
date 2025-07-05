export default function PromptCreationSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">## 💕인공지능과 함께하는 프롬프트 개발</h2>
      
      {/* PDF 마스킹 프로그램 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-red-600 mb-3">📄 PDF 마스킹 프로그램</h3>
        <p className="text-gray-700 mb-4">
          PDF 파일에서 특정 텍스트를 검은색으로 가려서 보이지 않게 하는 프로그램을 만들어줘.
        </p>
        
        <div className="bg-red-50 p-4 rounded mb-4">
          <h4 className="font-semibold text-red-800 mb-2">원하는 기능:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-red-700">
            <li>PDF 파일을 마우스로 끌어다 놓으면 자동으로 열리게 하고 싶어</li>
            <li>가리고 싶은 단어나 문장을 여러 개 입력할 수 있게 해줘</li>
            <li>주민등록번호(뒷번호 마스킹), 전화번호(010 뒷부분 마스킹) 같은 개인정보는 버튼 하나로 자동으로 찾아서 가려줘</li>
            <li>가린 부분은 완전히 지워져서 복사하거나 검색할 수 없게 만들어줘</li>
            <li>작업이 끝나면 알림창으로 알려줘</li>
            <li>프로그램 아래쪽에 "Made by L.J.D 2025" 라고 써줘</li>
          </ol>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">기술 요구사항:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
            <li>윈도우에서 쓸 수 있는 GUI 프로그램</li>
            <li>PDF 파일 드래그 앤 드롭 지원</li>
            <li>개인정보 자동 감지 및 마스킹</li>
            <li>텍스트 완전 삭제 (복사/검색 불가)</li>
            <li>사용자 친화적 인터페이스</li>
          </ul>
        </div>
      </div>
      
      {/* 구구단 게임 프롬프트 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">🎮 구구단 게임 프롬프트</h3>
        <p className="text-gray-700 mb-4">
          (프롬프트 생성 요청하기)초등학교 2학년 학생들이 재미있게 구구단을 배울 수 있는 구구단 게임을 만들려고 해. 
          이 때 사용할 수 있는 프롬프트 만들어줘
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">게임의 전체적인 분위기 및 컨셉:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>신나는 모험과 함께하는 구구단 탐험대:</strong> 각 단이 하나의 작은 섬이나 행성처럼 디자인</li>
            <li><strong>귀여운 동물 친구들과 함께하는 구구단 파티:</strong> 동물 캐릭터들과 함께 구구단 학습</li>
            <li><strong>우주선을 타고 떠나는 구구단 별 여행:</strong> 우주선을 타고 여러 행성을 방문하며 학습</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">문제 제시 및 답변 방식</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
              <li><strong>시각적 힌트를 제공하는 문제 카드:</strong> 3×4=? 문제 옆에 3개씩 묶인 그룹이 4개 있는 그림</li>
              <li><strong>드래그 앤 드롭으로 답을 맞추는 인터랙티브 방식:</strong> 여러 숫자 블록 중 정답을 드래그하여 빈칸에 놓는 방식</li>
              <li><strong>버블 터치로 정답을 선택하는 동적인 방식:</strong> 여러 개의 숫자 버블이 떠다니는 화면에서 정답 버블을 터치</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">학습 독려 및 보상 시스템</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
              <li><strong>정답 시 칭찬과 함께 나타나는 캐릭터 애니메이션:</strong> 메인 캐릭터가 춤을 추거나 환호하는 긍정적인 애니메이션</li>
              <li><strong>스티커, 뱃지, 아이템 수집 시스템:</strong> 일정 개수의 문제를 맞히거나 특정 단계를 클리어할 때마다 보상 제공</li>
              <li><strong>레벨업 시스템 및 잠금 해제 콘텐츠:</strong> 구구단 학습 진도에 따라 레벨이 오르고 새로운 콘텐츠 잠금 해제</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded mt-4">
          <h4 className="font-semibold text-purple-800 mb-2">최종 프롬프트 예시</h4>
          <div className="bg-gray-800 text-green-400 p-3 rounded text-sm">
            <p>
              "신나는 모험과 함께하는 구구단 탐험대 컨셉으로, 초등학교 2학년 학생들이 귀여운 동물 친구들과 우주선을 타고 떠나는 구구단 별 여행을 떠나는 구구단 게임을 만들어 주세요. 각 단은 하나의 행성으로 표현하고, 행성에는 해당 단의 구구단 외계인 친구들이 나타나 문제를 냅니다. 문제는 3×4=? 와 같은 식과 함께 3개씩 묶인 사과 4개가 그려진 시각적 힌트 카드 형태로 제시하며, 학생들은 버블 터치로 정답을 선택합니다. 정답을 맞힐 때마다 칭찬 메시지와 함께 외계인 친구가 춤추는 애니메이션을 보여주고, 특정 행성 클리어 시 귀여운 스티커와 새로운 우주선 부품 아이템을 보상으로 제공합니다."
            </p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded mt-4">
          <h4 className="font-semibold text-purple-800 mb-2">만들어 진 웹 프로그램 예시</h4>
            <p>
              <a href="https://smartjd.github.io/gugu/" target="_blank" rel="noopener noreferrer">https://smartjd.github.io/gugu/</a>
            </p>
        </div>

      </div>
      
      {/* 자세하게 물어보기 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">🔍 자세하게 물어보기</h3>
        <p className="text-gray-700 mb-4">
          AI 개발자와의 효과적인 소통을 위한 단계별 질문 방법을 알아봅니다.
        </p>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">1단계 - 앱 주요기능과 사용자 흐름 물어보기</h4>
            <div className="bg-gray-800 text-green-400 p-3 rounded text-sm">
              <p>
                "자, 너는 지금부터 지상 최고의 파이썬 GUI 앱 개발자야.<br/><br/>
                이번에 새로운 프로젝트로 "여행 스마트 여행 가이드 앱"을 만들려고 해.<br/><br/>
                앱 주요 기능과 사용자 흐름은 다음과 같아.<br/><br/>
                == [앱 주요 기능] 시작 ==<br/>
                1. 사용자가 여행할 나라나 지역 또는 도시를 입력하고, 인원수(혼자 가는지, 여러명이서 가는지), 성별, 나이, 여행 스타일, 여행 일 수, 예산 규모 등을 선택하면 구글 Gemini API를 사용해서 여행 경로를 추천해주는 웹 앱을 만들고 싶어.<br/>
                2. 이 앱은 1회성으로 쓰는 앱이야. 웹 앱 화면에 결과 히스토리를 표시할 필요는 없어.<br/>
                3. 다만 내부 관리용으로, 출력 결과는 엑셀파일에 자동으로 기록.<br/>
                == [앱 주요 기능] 끝 ==<br/><br/>
                == [사용자 흐름] 시작 ==<br/>
                1. 사용자가 여행할 나라, 지역 또는 도시를 선택. 이거는 일반 텍스트 상자로 자유롭게 입력하도록 하자.<br/>
                2. 인원수, 성별, 나이, 여행 스타일(휴양지, 커플여행, 가족여행), 여행 일수(1일~7일까지), 예산 규모(백만원/인당, 2백만원/인당) 등등을 선택.<br/>
                3. [여행 경로 추천] 버튼을 클릭하면 각 일자별 추천 경로를 출력<br/>
                == [사용자 흐름] 끝 ==<br/><br/>
                데이터는 엑셀파일에서 "기록" 시트 하나로 관리할 거야.<br/><br/>
                위와 같이 만들려면, 엑셀파일의 필드와 화면 인터페이스는 어떻게 구성하면 좋을까?<br/><br/>
                머리글 순번으로 간략하게 알려줘. 그리고 저장에 쓸 엑셀파일도 만들어줘."
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">2단계 - 백엔드와 화면인터페이스 구성 알려주고 앱 제작하기</h4>
            <div className="bg-gray-800 text-green-400 p-3 rounded text-sm">
              <p>
                "== [백엔드 구성] 시작 ==<br/>
                1. 사용할 외부 API<br/>
                - Gemini API : api<br/>
                - 모델은 Gemini 1.5 Flash 를 사용할거야.<br/>
                1. 엑셀 구조<br/>
                - 위에 만든 내용과 같음<br/>
                == [백엔드 구성] 끝 ==<br/><br/>
                == [화면 인터페이스 구성] 시작 ==<br/>
                - 위에 만든 내용과 같음<br/>
                == [화면 인터페이스 구성] 끝 ==<br/><br/>
                모든 내용을 담은 파이썬 GUI 예쁘게 만들어줘"
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 효과적인 질문 전략</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li><strong>단계별 접근:</strong> 큰 프로젝트를 작은 단계로 나누어 질문</li>
            <li><strong>구체적인 요구사항:</strong> 기능, 기술 스택, UI/UX를 명확히 명시</li>
            <li><strong>예시 제공:</strong> 원하는 결과물의 예시나 참고 자료 제시</li>
            <li><strong>피드백 요청:</strong> 각 단계에서 피드백을 받고 다음 단계 진행</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded mt-4">
          <h4 className="font-semibold text-green-800 mb-2">실제 구현된 여행 앱</h4>
          <p className="text-sm text-green-700">
            위의 프롬프트로 실제 구현된 여행 추천 앱: 
            <a href="https://jdtravel.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
              https://jdtravel.streamlit.app/
            </a>
          </p>
        </div>
      </div>
      
      {/* 여행 추천 앱 프롬프트 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-green-600 mb-3">✈️ 여행 추천 앱 프롬프트</h3>
        <p className="text-gray-700 mb-4">
          여행 추천 앱을 만들려고 해. 사용자가 여행지, 인원수, 성별, 나이대, 여행 스타일, 여행 일수, 예산을 입력하면 
          Gemini API를 사용해서 맞춤형 여행 경로를 추천해주는 앱을 만들어줘
        </p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">엑셀파일 구성 (필드 순번 + 설명)</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-2 py-1 border">순번</th>
                    <th className="px-2 py-1 border">열 이름</th>
                    <th className="px-2 py-1 border">설명</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-2 py-1 border">1</td><td className="px-2 py-1 border">타임스탬프</td><td className="px-2 py-1 border">요청 시각 (YYYY-MM-DD HH:MM:SS) 자동 입력</td></tr>
                  <tr><td className="px-2 py-1 border">2</td><td className="px-2 py-1 border">여행지</td><td className="px-2 py-1 border">사용자가 입력한 나라/도시/지역 이름</td></tr>
                  <tr><td className="px-2 py-1 border">3</td><td className="px-2 py-1 border">인원수</td><td className="px-2 py-1 border">1명 / 2명 / 3명 이상</td></tr>
                  <tr><td className="px-2 py-1 border">4</td><td className="px-2 py-1 border">성별</td><td className="px-2 py-1 border">남성 / 여성 / 혼성</td></tr>
                  <tr><td className="px-2 py-1 border">5</td><td className="px-2 py-1 border">나이대</td><td className="px-2 py-1 border">10대 / 20대 / 30대 / 40대 / 50대 이상</td></tr>
                  <tr><td className="px-2 py-1 border">6</td><td className="px-2 py-1 border">여행 스타일</td><td className="px-2 py-1 border">휴양지 / 커플여행 / 가족여행 / 기타</td></tr>
                  <tr><td className="px-2 py-1 border">7</td><td className="px-2 py-1 border">여행 일수</td><td className="px-2 py-1 border">1 ~ 7일</td></tr>
                  <tr><td className="px-2 py-1 border">8</td><td className="px-2 py-1 border">예산(1인당, 원)</td><td className="px-2 py-1 border">1000000 / 2000000 (만원 단위지만 숫자로 저장)</td></tr>
                  <tr><td className="px-2 py-1 border">9</td><td className="px-2 py-1 border">추천 경로 결과</td><td className="px-2 py-1 border">Gemini API 응답 텍스트 전체 (멀티라인 문자열)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">GUI 인터페이스 구성</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-2 py-1 border">순번</th>
                    <th className="px-2 py-1 border">입력항목</th>
                    <th className="px-2 py-1 border">위젯 형태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="px-2 py-1 border">1</td><td className="px-2 py-1 border">여행지 입력</td><td className="px-2 py-1 border">Entry (텍스트박스)</td></tr>
                  <tr><td className="px-2 py-1 border">2</td><td className="px-2 py-1 border">인원수</td><td className="px-2 py-1 border">Combobox 또는 Radiobutton (1명/2명/3명이상)</td></tr>
                  <tr><td className="px-2 py-1 border">3</td><td className="px-2 py-1 border">성별</td><td className="px-2 py-1 border">Radiobutton (남성 / 여성 / 혼성)</td></tr>
                  <tr><td className="px-2 py-1 border">4</td><td className="px-2 py-1 border">나이대</td><td className="px-2 py-1 border">Combobox (10대~50대 이상)</td></tr>
                  <tr><td className="px-2 py-1 border">5</td><td className="px-2 py-1 border">여행 스타일</td><td className="px-2 py-1 border">Combobox (휴양지/커플여행/가족여행/기타)</td></tr>
                  <tr><td className="px-2 py-1 border">6</td><td className="px-2 py-1 border">여행 일수</td><td className="px-2 py-1 border">Spinbox (1~7)</td></tr>
                  <tr><td className="px-2 py-1 border">7</td><td className="px-2 py-1 border">예산 규모(1인당)</td><td className="px-2 py-1 border">Combobox (100만원 / 200만원)</td></tr>
                  <tr><td className="px-2 py-1 border">8</td><td className="px-2 py-1 border">[여행 경로 추천] 버튼</td><td className="px-2 py-1 border">Button</td></tr>
                  <tr><td className="px-2 py-1 border">9</td><td className="px-2 py-1 border">결과 표시 창</td><td className="px-2 py-1 border">Text 또는 ScrolledText 위젯 (Gemini 응답 출력용)</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded">
            <h4 className="font-semibold text-yellow-800 mb-2">백엔드 구성</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
              <li><strong>사용할 외부 API:</strong> Gemini API (모델은 Gemini 1.5 Flash 사용)</li>
              <li><strong>엑셀 구조:</strong> 위에 정의한 필드 구조와 동일</li>
              <li><strong>필요한 라이브러리:</strong> google-generativeai, openpyxl, tkinter</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-purple-50 p-4 rounded mt-4">
          <h4 className="font-semibold text-purple-800 mb-2">사용법 요약</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm text-purple-700">
            <li>Google AI Studio에서 API Key 발급</li>
            <li>코드에 API 키 설정</li>
            <li>google-generativeai 설치: <code className="bg-gray-200 px-1 rounded">pip install google-generativeai</code></li>
            <li>기록.xlsx를 같은 폴더에 두고 실행</li>
          </ol>
        </div>
      </div>
      
      {/* 프롬프트 작성 팁 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">💡 프롬프트 작성 팁</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">효과적인 프롬프트 작성법</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
              <li><strong>명확한 목표 설정:</strong> 만들고자 하는 앱의 목적과 기능을 구체적으로 명시</li>
              <li><strong>대상 사용자 정의:</strong> 누구를 위한 앱인지 명확히 하기</li>
              <li><strong>기술적 요구사항:</strong> 사용할 기술 스택과 라이브러리 명시</li>
              <li><strong>UI/UX 가이드라인:</strong> 디자인 컨셉과 사용자 경험 요구사항</li>
              <li><strong>기능별 세부사항:</strong> 각 기능의 동작 방식과 예상 결과</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">프롬프트 구조화</h4>
            <ol className="list-decimal list-inside space-y-1 text-sm text-green-700">
              <li><strong>개요:</strong> 앱의 전체적인 목적과 컨셉</li>
              <li><strong>기능 요구사항:</strong> 구현해야 할 주요 기능들</li>
              <li><strong>기술 스택:</strong> 사용할 프로그래밍 언어, 프레임워크, 라이브러리</li>
              <li><strong>UI/UX 디자인:</strong> 사용자 인터페이스와 경험 설계</li>
              <li><strong>데이터 구조:</strong> 저장할 데이터의 형태와 구조</li>
              <li><strong>추가 요구사항:</strong> 성능, 보안, 호환성 등</li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">🎯 프롬프트 작성 체크리스트</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
          <li>앱의 목적이 명확한가?</li>
          <li>대상 사용자가 구체적으로 정의되었는가?</li>
          <li>필요한 기능들이 모두 나열되었는가?</li>
          <li>기술적 요구사항이 명시되었는가?</li>
          <li>UI/UX 가이드라인이 포함되었는가?</li>
          <li>데이터 구조가 정의되었는가?</li>
          <li>예상 결과물이 명확한가?</li>
        </ul>
      </div>
    </div>
  );
} 