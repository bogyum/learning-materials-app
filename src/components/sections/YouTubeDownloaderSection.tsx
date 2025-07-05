export default function YouTubeDownloaderSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">## 💕파이썬 유튜브 다운로드 앱 프롬프트</h2>
      
      {/* 기본 요청 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">📥 기본 요청</h3>
        <p className="text-gray-700 mb-4">유튜브 다운로드 프로그램을 파이썬으로 만들려고 해. gui 로 예쁘게 만들어줘</p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <p className="text-sm text-gray-600">
            파이썬으로 YouTube 다운로드 프로그램을 GUI로 만드시려는군요! 
            PyTube와 Tkinter 라이브러리를 사용하면 손쉽게 만들 수 있습니다.
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded">
          <h4 className="font-semibold text-blue-800 mb-2">YouTube 다운로더 (GUI)</h4>
          <p className="text-sm text-blue-700 mb-3">
            아래는 PyTube와 Tkinter를 사용한 기본적인 YouTube 다운로더 코드입니다:
          </p>
          <pre className="bg-gray-800 text-green-400 p-3 rounded text-sm overflow-x-auto">
{`import tkinter as tk
from tkinter import filedialog, messagebox
from pytube import YouTube

def download_video():
    url = url_entry.get()
    save_path = path_entry.get()
    
    if not url:
        messagebox.showerror("오류", "YouTube URL을 입력해주세요.")
        return
    if not save_path:
        messagebox.showerror("오류", "저장 경로를 선택해주세요.")
        return
    
    try:
        yt = YouTube(url)
        stream = yt.streams.get_highest_resolution()
        message_label.config(text=f"'{yt.title}' 다운로드 중...")
        window.update_idletasks()
        stream.download(output_path=save_path)
        messagebox.showinfo("완료", f"'{yt.title}' 다운로드가 완료되었습니다!")
        message_label.config(text="")
    except Exception as e:
        messagebox.showerror("오류", f"다운로드 중 오류가 발생했습니다: {e}")
        message_label.config(text="")

def browse_path():
    folder_selected = filedialog.askdirectory()
    if folder_selected:
        path_entry.delete(0, tk.END)
        path_entry.insert(0, folder_selected)

# GUI 설정
window = tk.Tk()
window.title("YouTube 다운로더")
window.geometry("500x250")
window.resizable(False, False)

# URL 입력 섹션
url_frame = tk.Frame(window, padx=10, pady=5)
url_frame.pack(fill=tk.X)

url_label = tk.Label(url_frame, text="YouTube URL:")
url_label.pack(side=tk.LEFT, padx=(0, 10))

url_entry = tk.Entry(url_frame, width=50)
url_entry.pack(side=tk.LEFT, expand=True, fill=tk.X)

# 저장 경로 섹션
path_frame = tk.Frame(window, padx=10, pady=5)
path_frame.pack(fill=tk.X)

path_label = tk.Label(path_frame, text="저장 경로:")
path_label.pack(side=tk.LEFT, padx=(0, 10))

path_entry = tk.Entry(path_frame, width=40)
path_entry.pack(side=tk.LEFT, expand=True, fill=tk.X)

browse_button = tk.Button(path_frame, text="찾아보기", command=browse_path)
browse_button.pack(side=tk.LEFT, padx=(10, 0))

# 다운로드 버튼
download_button = tk.Button(window, text="다운로드", command=download_video, 
                           width=20, height=2, bg="#4CAF50", fg="white", 
                           font=("Helvetica", 12, "bold"))
download_button.pack(pady=20)

# 메시지 라벨
message_label = tk.Label(window, text="", fg="blue", font=("Helvetica", 10))
message_label.pack()

window.mainloop()`}
          </pre>
        </div>
      </div>
      
      {/* PyTube vs yt-dlp */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-green-600 mb-3">🔧 PyTube vs yt-dlp</h3>
        <p className="text-gray-700 mb-4">pytube 말고 다른 라이브러리로 만들어</p>
        
        <div className="bg-gray-50 p-4 rounded mb-4">
          <h4 className="font-semibold mb-2">yt-dlp 라이브러리:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>youtube-dl의 포크(fork) 버전</li>
            <li>더 활발한 개발과 업데이트</li>
            <li>다양한 기능 제공</li>
            <li>더 안정적인 다운로드</li>
            <li>더 많은 사이트 지원</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-4 rounded">
          <h4 className="font-semibold text-green-800 mb-2">yt-dlp 설치 및 사용</h4>
          <div className="space-y-2 text-sm text-green-700">
            <div>
              <strong>설치:</strong> <code className="bg-gray-200 px-1 rounded">pip install yt-dlp</code>
            </div>
            <div>
              <strong>기본 사용법:</strong> <code className="bg-gray-200 px-1 rounded">yt-dlp [URL]</code>
            </div>
            <div>
              <strong>GUI 통합:</strong> Tkinter와 subprocess를 사용하여 GUI에서 yt-dlp 실행
            </div>
          </div>
        </div>
      </div>
      
      {/* 고급 기능 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-xl font-semibold text-purple-600 mb-3">⚙️ 고급 기능</h3>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded">
            <h4 className="font-semibold text-purple-700 mb-2">인증 없이 ffmpeg 없이 만들어줘</h4>
            <p className="text-sm text-purple-600">
              SSL 인증서 검증 우회 및 FFmpeg 없이도 동작하는 버전
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-purple-600 mt-2">
              <li>--no-check-certificates 옵션 사용</li>
              <li>단일 스트림 다운로드로 FFmpeg 의존성 제거</li>
              <li>인코딩 문제 해결을 위한 locale 설정</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h4 className="font-semibold text-blue-700 mb-2">고화질 영상이 4k 라면 fhd로 받도록 수정가능해?</h4>
            <p className="text-sm text-blue-600">
              4K 영상을 FHD(1080p)로 다운로드하는 옵션 추가
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-blue-600 mt-2">
              <li>height=1080 필터 사용</li>
              <li>bestvideo[height=1080][ext=mp4] 형식 지정</li>
              <li>FFmpeg과 함께 고화질 비디오/오디오 병합</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded">
            <h4 className="font-semibold text-green-700 mb-2">ffmpeg 파일이 있으면 고화질 선택이 활성화되고 없으면 일반화질만 활성화</h4>
            <p className="text-sm text-green-600">
              FFmpeg 존재 여부에 따른 자동 옵션 조절
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-600 mt-2">
              <li>FFmpeg 설치 여부 자동 감지</li>
              <li>고화질/MP3 옵션 자동 활성화/비활성화</li>
              <li>사용자 친화적인 옵션 제어</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <h4 className="font-semibold text-blue-800 mb-2">🎯 주요 기능</h4>
        <ul className="list-disc list-inside space-y-1 text-sm text-blue-700">
          <li>다양한 해상도 선택 (FHD, 일반화질)</li>
          <li>오디오 다운로드 (M4A, MP3)</li>
          <li>진행률 표시</li>
          <li>저장 경로 선택</li>
          <li>멀티스레딩 다운로드</li>
          <li>SSL 인증서 검증 우회</li>
          <li>FFmpeg 자동 감지</li>
        </ul>
      </div>
    </div>
  );
} 