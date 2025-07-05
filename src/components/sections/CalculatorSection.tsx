export default function CalculatorSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">## 💕파이썬 계산 앱 프롬프트</h2>
      
      {/* 계산기 만들기 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">🧮 계산기 만들기</h3>
        <p className="text-gray-700 mb-4">계산기를 만들고 싶어 예쁜 디자인을 가지도록 파이썬 GUI로 만들어줘</p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <p className="text-sm text-gray-600 mb-3">
            가장 대중적이고 사용하기 쉬운 <strong>Tkinter</strong> 라이브러리를 사용하여 계산기를 만들어 보겠습니다. 
            사용자 경험을 위해 몇 가지 디자인 요소를 고려하여 작성해 드릴게요.
          </p>
          
          <h4 className="font-semibold mb-2">주요 특징:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>예쁜 디자인의 GUI 계산기</li>
            <li>Tkinter 라이브러리 사용</li>
            <li>사칙연산 기능 구현</li>
            <li>사용자 친화적 인터페이스</li>
            <li>색상과 폰트를 활용한 시각적 디자인</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">Python Tkinter를 이용한 예쁜 계산기</h4>
          <p className="text-sm text-blue-700 mb-3">
            아래 코드는 Tkinter를 사용하여 기본적인 사칙연산이 가능한 계산기입니다. 
            색상과 폰트를 활용하여 시각적으로 예쁘게 보이도록 디자인했습니다.
          </p>
          <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`import tkinter as tk
from tkinter import font as tkFont

class StylishCalculator:
    def __init__(self, master):
        self.master = master
        master.title("예쁜 계산기")
        master.geometry("300x450")
        master.resizable(False, False)
        master.configure(bg="#F0F0F0")

        self.expression = ""
        self.input_text = tk.StringVar()

        # 폰트 설정
        self.display_font = tkFont.Font(family="맑은 고딕", size=24, weight="bold")
        self.button_font = tkFont.Font(family="맑은 고딕", size=16)

        # 결과 표시창 프레임
        display_frame = tk.Frame(master, bd=0, relief="solid", bg="#FFFFFF")
        display_frame.pack(side=tk.TOP, fill=tk.BOTH, expand=True, padx=10, pady=10)

        # 결과 표시 Entry 위젯
        self.input_field = tk.Entry(display_frame, font=self.display_font,
                                    textvariable=self.input_text, justify='right', bd=0,
                                    bg="#FFFFFF", fg="#333333", cursor="arrow")
        self.input_field.grid(row=0, column=0, ipadx=8, ipady=8, sticky="nsew")
        display_frame.grid_columnconfigure(0, weight=1)

        # 버튼 프레임
        button_frame = tk.Frame(master, bg="#F0F0F0")
        button_frame.pack(side=tk.BOTTOM, fill=tk.BOTH, expand=True, padx=5, pady=5)

        # 버튼 레이아웃 정의 (텍스트, 배경색, 글자색)
        buttons = [
            ('C', '#FF6B6B', '#FFFFFF'), ('/', '#FFB06B', '#FFFFFF'), 
            ('*', '#FFB06B', '#FFFFFF'), ('<', '#FF6B6B', '#FFFFFF'),
            ('7', '#FFFFFF', '#333333'), ('8', '#FFFFFF', '#333333'), 
            ('9', '#FFFFFF', '#333333'), ('-', '#6BBEFF', '#FFFFFF'),
            ('4', '#FFFFFF', '#333333'), ('5', '#FFFFFF', '#333333'), 
            ('6', '#FFFFFF', '#333333'), ('+', '#6BBEFF', '#FFFFFF'),
            ('1', '#FFFFFF', '#333333'), ('2', '#FFFFFF', '#333333'), 
            ('3', '#FFFFFF', '#333333'), ('=', '#6BFF91', '#FFFFFF'),
            ('00', '#FFFFFF', '#333333'), ('0', '#FFFFFF', '#333333'), 
            ('.', '#FFFFFF', '#333333'), ('%', '#FFB06B', '#FFFFFF')
        ]

        row_val = 0
        col_val = 0
        for button_text, bg_color, fg_color in buttons:
            action = lambda x=button_text: self.click_event(x)
            button = tk.Button(button_frame, text=button_text, font=self.button_font,
                               fg=fg_color, bg=bg_color, relief="flat", bd=0,
                               command=action, padx=20, pady=15,
                               activebackground="#E0E0E0", activeforeground="#333333")
            button.grid(row=row_val, column=col_val, sticky="nsew", padx=5, pady=5)

            col_val += 1
            if col_val > 3:
                col_val = 0
                row_val += 1

        # 버튼 프레임의 그리드 가중치 설정
        for i in range(4):
            button_frame.grid_columnconfigure(i, weight=1)
        for i in range(5):
            button_frame.grid_rowconfigure(i, weight=1)

    def click_event(self, key):
        if key == '=':
            try:
                # 퍼센트 계산 처리
                self.expression = self.expression.replace('%', '*0.01*')
                result = str(eval(self.expression))
                self.input_text.set(result)
                self.expression = result
            except Exception as e:
                self.input_text.set("Error")
                self.expression = ""
        elif key == 'C':
            self.expression = ""
            self.input_text.set("")
        elif key == '<': # 백스페이스 기능
            self.expression = self.expression[:-1]
            self.input_text.set(self.expression)
        else:
            self.expression += str(key)
            self.input_text.set(self.expression)

root = tk.Tk()
calculator = StylishCalculator(root)
root.mainloop()`}
          </pre>
        </div>
        
        <div className="bg-green-50 p-4 rounded mt-4">
          <h4 className="font-semibold text-green-800 mb-2">코드 설명:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-green-700">
            <li><strong>Tkinter 임포트:</strong> tkinter 라이브러리를 tk로, 폰트 설정을 위해 tkinter.font를 tkFont로 임포트</li>
            <li><strong>StylishCalculator 클래스:</strong> 계산기 GUI를 초기화하고 관리</li>
            <li><strong>폰트 설정:</strong> 결과 표시창과 버튼의 폰트, 크기, 굵기를 설정</li>
            <li><strong>결과 표시창:</strong> tk.Entry 위젯을 사용하여 계산 결과나 현재 입력 값을 표시</li>
            <li><strong>버튼 레이아웃:</strong> 각 버튼의 텍스트, 배경색, 글자색을 개별적으로 설정</li>
            <li><strong>이벤트 처리:</strong> click_event 함수로 버튼 클릭 시 동작을 처리</li>
          </ul>
        </div>
      </div>
      
      {/* 키보드 이벤트 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-green-600 mb-3">⌨️ 키보드 이벤트</h3>
        <p className="text-gray-700 mb-4">키보드 이벤트 넣어줘</p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">구현 기능:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>숫자 키 입력 지원</li>
            <li>연산자 키 입력 지원</li>
            <li>Enter 키로 계산 실행</li>
            <li>ESC 키로 초기화</li>
            <li>Backspace 키로 한 글자 삭제</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">키보드 이벤트 추가 코드</h4>
          <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`# 키보드 이벤트 바인딩
master.bind('<Return>', lambda event: self.click_event('=')) # 엔터 키
master.bind('<BackSpace>', lambda event: self.click_event('<')) # 백스페이스 키
master.bind('<Escape>', lambda event: self.click_event('C')) # ESC 키 (초기화)
master.bind('<Key>', self.handle_keyboard_input) # 숫자 및 연산자 입력 처리

def handle_keyboard_input(self, event):
    key = event.char
    if key.isdigit() or key == '.':
        self.click_event(key)
    elif key == '+':
        self.click_event('+')
    elif key == '-':
        self.click_event('-')
    elif key == '*':
        self.click_event('*')
    elif key == '/':
        self.click_event('/')
    elif key == '%':
        self.click_event('%')`}
          </pre>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">변경된 부분 설명:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li><strong>tk.Entry 위젯 상태 변경:</strong> state="readonly"로 설정하여 직접 입력 방지</li>
            <li><strong>키보드 이벤트 바인딩:</strong> Enter, BackSpace, Escape, 일반 키 입력 처리</li>
            <li><strong>handle_keyboard_input 함수:</strong> 숫자 및 연산자 키 입력을 처리하는 함수 추가</li>
          </ul>
        </div>
      </div>
      
      {/* 실행파일 만들기 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">🔧 실행파일 만들기</h3>
        <p className="text-gray-700 mb-4">파이썬 파일을 실행파일로 만들려고 해. 방법과 명령 알려줘</p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <p className="text-sm text-gray-600">
            파이썬 스크립트를 실행 파일(.exe)로 만들려면 <strong>PyInstaller</strong> 라이브러리를 사용하는 것이 가장 일반적이고 권장되는 방법입니다. 
            PyInstaller는 파이썬 코드를 독립 실행형 애플리케이션으로 패키징하여, 파이썬 인터프리터가 설치되지 않은 시스템에서도 실행할 수 있도록 해줍니다.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-800 mb-2">PyInstaller 설치</h4>
            <p className="text-sm text-purple-700 mb-2">
              먼저 PyInstaller를 설치해야 합니다. 명령 프롬프트(Windows) 또는 터미널(macOS/Linux)을 열고 다음 명령어를 입력하세요:
            </p>
            <code className="bg-gray-200 px-1 rounded text-sm">pip install pyinstaller</code>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-800 mb-2">PyInstaller 사용법</h4>
            <div className="space-y-2 text-sm text-blue-700">
              <div>
                <strong>1. 기본 실행 파일 만들기:</strong><br/>
                <code className="bg-gray-200 px-1 rounded">pyinstaller your_script_name.py</code>
              </div>
              <div>
                <strong>2. 단일 파일 실행 파일 만들기:</strong><br/>
                <code className="bg-gray-200 px-1 rounded">pyinstaller --onefile your_script_name.py</code>
              </div>
              <div>
                <strong>3. 콘솔 창 없이 GUI 앱 만들기:</strong><br/>
                <code className="bg-gray-200 px-1 rounded">pyinstaller --onefile --noconsole your_script_name.py</code>
              </div>
              <div>
                <strong>4. 아이콘 추가:</strong><br/>
                <code className="bg-gray-200 px-1 rounded">pyinstaller --onefile --noconsole --icon icon.ico your_script_name.py</code>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-800 mb-2">계산기 실행 파일 만들기</h4>
            <p className="text-sm text-green-700 mb-2">
              계산기 앱을 실행 파일로 만들기 위한 명령어:
            </p>
            <code className="bg-gray-200 px-1 rounded text-sm">pyinstaller --onefile --noconsole --icon calculator.ico calc.py</code>
            <p className="text-sm text-green-700 mt-2">
              이 명령어는 단일 실행 파일을 만들고, 콘솔 창을 숨기며, 아이콘을 추가합니다.
            </p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
          <h4 className="font-semibold text-yellow-800 mb-2">💡 주의사항</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
            <li>PyInstaller는 실행 파일을 만드는 컴퓨터의 운영체제에 따라 달라집니다</li>
            <li>Windows에서 만든 실행 파일은 Windows에서만 실행됩니다</li>
            <li>실행 파일이 제대로 작동하지 않으면 --noconsole 옵션을 제거하여 오류 메시지를 확인하세요</li>
            <li>아이콘 파일(.ico)은 별도로 준비해야 합니다</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 