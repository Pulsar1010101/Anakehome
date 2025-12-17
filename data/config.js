// 앱 설정 (config)
export const config = {
  // ==========================================
  // [NEW] 텍스트 라벨 설정 (세계관에 맞춰 수정하세요)
  // ==========================================
  labels: {
    // 섹션 제목
    name: "NAME",
    basicInfo: "BASIC INFO",
    birthInfo: "BIRTH INFO",
    magicInfo: "MAGIC INFO",      // 예: WEAPON INFO, SKILL INFO
    relationships: "RELATIONSHIPS",

    // 상세 항목 이름 (왼쪽 라벨)
    heightWeight: "키 / 체중",
    affiliation: "소속",          // 예: 기숙사, 길드, 학교
    nationality: "국적",
    blood: "혈통",                // 예: 종족, 등급
    
    birthday: "생일",
    birthFlowerTree: "탄생화 / 탄생목",
    birthStone: "탄생석",
    birthColor: "탄생색",
    
    wand: "지팡이",               // 예: 주무기, 능력
    wandLength: "길이 / 유연성",   // 예: 내구도 / 등급
    themeColor: "테마색",
    moodSong: "무드곡"
  },

  // ==========================================
  // [NEW] 테마 설정 (색상)
  // ==========================================
  theme: {
    colors: {
      background: "#0a0a0c",
      secondary: "#111114",
      tertiary: "#1a1a1e",
      text: "#e8e6e3",
      highlight: "#B2B0E8",
      border: "rgba(255, 255, 255, 0.04)"
    }
  },

  features: {
    showAgeTabs: true,
    snowEffect: false
  },

  // ==========================================
  // 기존 설정 유지
  // ==========================================
  player: {
    width: 360,
    height: 203,
    defaultVolume: 20,
    playerVars: {
      playsinline: 1,
      controls: 0,
      disablekb: 1,
      fs: 0,
      rel: 0,
      autoplay: 0
    }
  },

  defaults: {
    age: 11,
    section: 'dashboard'
  },

  components: {
    dashboard: 'components/dashboard.html',
    playlist: 'components/playlist.html',
    motif: 'components/motif.html',
    guide: 'components/about.html'
  },

  timing: {
    bgMusicInitDelay: 1000,
    iconRenderDelay: 50,
    videoLoadDelay: 100,
    bgMusicSwitchDelay: 500
  },

  api: {
    youtubeIframe: 'https://www.youtube.com/iframe_api',
    youtubeThumbnail: (videoId) => `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    uiAvatars: (name, bg = '333', color = 'fff') =>
      `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}`
  },

  bgMusicSections: ['dashboard'],
  keepBgMusicSections: ['motif', 'guide']
};
