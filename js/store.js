// ============================================================
// 상태 관리 & DOM 캐싱
// ============================================================

import { config } from '../data/config.js';
import { getStorage } from './utils.js';

// ============================================================
// 앱 상태
// ============================================================
export const state = {
    // 캐릭터
    currentAge: config.defaults.age,
    
    // 플레이어
    currentSongIndex: 0,
    isPlaying: false,
    playerReady: false,
    isRepeatOne: false,
    
    // 볼륨
    volume: getStorage('playerVolume', 50),
    isMuted: getStorage('playerMuted', false),
    
    // 검색
    searchQuery: '',
    filteredPlaylist: [],
    
    // 최근 재생
    recentPlays: [],
    
    // 배경 음악
    currentBgPlayer: null,
    bgPlayersReady: {}
};

// ============================================================
// 플레이어 인스턴스
// ============================================================
export const players = {
    main: null,
    bg: {}
};

// ============================================================
// 타이머/인터벌
// ============================================================
export const timers = {
    progress: null
};

// ============================================================
// DOM 캐시 (지연 초기화)
// ============================================================
let domCache = null;

export function getDOM() {
    if (domCache) return domCache;
    
    domCache = {
        // 섹션
        sections: {
            dashboard: document.getElementById('section-dashboard'),
            playlist: document.getElementById('section-playlist'),
            motif: document.getElementById('section-motif'),
            guide: document.getElementById('section-guide')
        },
        
        // 플레이어 요소
        player: {
            container: document.getElementById('youtube-player-container'),
            zone: document.getElementById('player-zone'),
            albumArt: document.getElementById('main-album-art'),
            title: document.getElementById('main-title'),
            artist: document.getElementById('main-artist'),
            hashtags: document.getElementById('main-hashtags'),
            comment: document.getElementById('main-comment'),
            lyrics: document.getElementById('lyrics-content'),
            progressBg: document.getElementById('progress-bar-bg'),
            progressFill: document.getElementById('progress-bar-fill'),
            currentTime: document.getElementById('current-time'),
            totalTime: document.getElementById('total-time')
        },
        
        // 컨트롤 버튼
        controls: {
            playPause: document.getElementById('btn-play-pause'),
            next: document.getElementById('btn-next'),
            prev: document.getElementById('btn-prev'),
            shuffle: document.getElementById('btn-shuffle'),
            repeat: document.getElementById('btn-repeat'),
            volume: document.getElementById('btn-volume'),
            volumeSlider: document.getElementById('volume-slider'),
            volumeFill: document.getElementById('volume-fill')
        },
        
        // 플레이리스트
        playlist: {
            container: document.getElementById('playlist-container'),
            search: document.getElementById('playlist-search'),
            resultCount: document.getElementById('search-result-count')
        },
        
        // 캐릭터 프로필
        character: {
            profile: () => document.querySelector('.character-profile'),
            ageTabs: () => document.querySelectorAll('.age-tab'),
            propNumber: document.getElementById('prop-number'),
            propKanji: document.getElementById('prop-kanji'),
            propDesc: document.getElementById('prop-desc'),
            quoteMain: document.getElementById('quote-main'),
            quoteSub: document.getElementById('quote-sub'),
            quoteDesc: document.getElementById('quote-desc'),
            avatar: document.getElementById('char-avatar'),
            avatarPlaceholder: document.getElementById('avatar-placeholder'),
            avatarCredit: document.getElementById('avatar-credit'),
            nameKr: document.getElementById('char-name-kr'),
            nameEn: document.getElementById('char-name-en'),
            affiliationBadge: document.getElementById('affiliation-badge'),
            affiliationName: document.getElementById('affiliation-name'),
            personalityTags: document.getElementById('personality-tags'),
            personalityDesc: document.getElementById('personality-desc'),
            basicInfo: document.getElementById('basic-info-content'),
            birthInfo: document.getElementById('birth-info-content'),
            magicInfo: document.getElementById('magic-info-content'),
            relationships: document.getElementById('relationships-grid')
        },
        
        // 메뉴
        menu: {
            items: () => document.querySelectorAll('.menu-item[data-section]')
        }
    };
    
    return domCache;
}

/**
 * DOM 캐시 갱신 (컴포넌트 로드 후 호출)
 */
export function refreshDOM() {
    domCache = null;
    return getDOM();
}
