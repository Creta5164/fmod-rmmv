/*:
 * @plugindesc This plugin integrated with FMOD by Firelight Technologies Pty Ltd.
 * Version : alpha-1.0.4
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * This plugin integrated with FMOD by Firelight Technologies Pty Ltd.
 * You can use industry-leading audio engine for RPG Maker MV.
 * 
 * Created by Creta Park (https://creft.me/cretapark)
 * 
 * GitHub page : https://github.com/creta5164/fmod-rmmv
 * Recommended MV version : 1.6.2^
 * Recommended FMOD version : 2.01.13^
 * Tested on NW.js 0.29.4
 * 
 * License : https://github.com/creta5164/fmod-rmmv/blob/main/LICENSE
 * 
 * - License conditions -
 * 
 * 1. When using this plugin with other software, the software must be
 *    a game developed and made with RPG Maker, and 'FMOD_MV.js by Creta Park'
 *    must be written in the credit of these game.
 * 
 * 2. Should not be confused 1's content with the attribution of FMOD.
 *    Mark completely separate from the attribution of the FMOD.
 * 
 * 3. Neither this plugin nor any of its individual components,
 *    in Original or Modified Versions, may be sold by itself.
 * 
 * 4. When redistributed after modification, the original author must be indicated.
 * 
 * Please refer to the README.md of the repository
 * if you looking for How to setup, usage, limitation etc.
 * https://github.com/creta5164/fmod-rmmv/blob/main/README.md
 * 
 * @param total-memory
 * @text Total memory
 * @desc FMOD's virtual memory maximum size. (byte units)
 * Default value is 64MB. (64 * 1024 * 1024)
 * @default 67108864
 * @type number
 * 
 * @param bank-path
 * @text Bank asset path
 * @desc Specify the path where the FMOD's Bank assets are.
 * @default audio/bank
 * @type text
 * 
 * @param bank-assets
 * @text Bank assets
 * @parent bank-path
 * @desc Specify banks to load.
 * @type text[]
 * @default ["Master","Master.strings"]
 * 
 * @param guids-path
 * @text GUIDs js path
 * @desc Specify GUID collection script.
 * (i.e. audio/bank/fmod_studio_guids.js)
 * @type text
 * @default audio/bank/fmod_studio_guids.js
 * 
 * @param integrated-vcas
 * @text Integrated VCAs
 * 
 * @param integrated-vcas-bgm
 * @parent integrated-vcas
 * @text Specified BGM VCA name
 * @type text 
 * @desc Specify which VCA is used for Background Musics.
 * If BGM exists in fmod GUIDs (VCA), leave it blank.
 * 
 * @param integrated-vcas-bgs
 * @parent integrated-vcas
 * @text Specified BGS VCA name
 * @type text 
 * @desc Specify which VCA is used for Background Sounds. (Ambient)
 * If BGS exists in fmod GUIDs (VCA), leave it blank.
 * 
 * @param integrated-vcas-me
 * @parent integrated-vcas
 * @text Specified ME VCA name
 * @type text 
 * @desc Specify which VCA is used for Music Effects. (Fanfare)
 * If ME exists in fmod GUIDs (VCA), leave it blank.
 * 
 * @param integrated-vcas-se
 * @parent integrated-vcas
 * @text Specified SE VCA name
 * @type text 
 * @desc Specify which VCA is used for Sound Effects. (SFX)
 * If SE exists in fmod GUIDs (VCA), leave it blank.
 * 
 * @param system-bgm
 * @text System musics
 * 
 * @param system-bgm-title
 * @parent system-bgm
 * @type text
 * @text Title
 * 
 * @param system-bgm-battle
 * @parent system-bgm
 * @type text
 * @text Battle
 * 
 * @param system-bgm-airship
 * @parent system-bgm
 * @type text
 * @text Airship
 * 
 * @param system-bgm-boat
 * @parent system-bgm
 * @type text
 * @text Boat
 * 
 * @param system-bgm-ship
 * @parent system-bgm
 * @type text
 * @text Ship
 * 
 * @param system-me
 * @text System music effects
 * 
 * @param system-me-victory
 * @parent system-me
 * @type text
 * @text Victory
 * 
 * @param system-me-defeat
 * @parent system-me
 * @type text
 * @text Defeat
 * 
 * @param system-me-game-over
 * @parent system-me
 * @type text
 * @text Game over
 * 
 * @param system-se
 * @text System sound effects
 * 
 * @param system-se-cursor
 * @parent system-se
 * @type text
 * @text Cursor
 * 
 * @param system-se-ok
 * @parent system-se
 * @type text
 * @text Confirm (OK)
 * 
 * @param system-se-cancel
 * @parent system-se
 * @type text
 * @text Cancel
 * 
 * @param system-se-buzzer
 * @parent system-se
 * @type text
 * @text Buzzer
 * 
 * @param system-se-equip
 * @parent system-se
 * @type text
 * @text Equip
 * 
 * @param system-se-save
 * @parent system-se
 * @type text
 * @text Save
 * 
 * @param system-se-load
 * @parent system-se
 * @type text
 * @text Load
 * 
 * @param system-se-battle-start
 * @parent system-se
 * @type text
 * @text Battle start
 * 
 * @param system-se-escape
 * @parent system-se
 * @type text
 * @text Escape
 * 
 * @param system-se-enemy-attack
 * @parent system-se
 * @type text
 * @text Enemy attack
 * 
 * @param system-se-enemy-damage
 * @parent system-se
 * @type text
 * @text Enemy damage
 * 
 * @param system-se-enemy-collapse
 * @parent system-se
 * @type text
 * @text Enemy collapse
 * 
 * @param system-se-boss-collapse1
 * @parent system-se
 * @type text
 * @text Boss collapse 1
 * 
 * @param system-se-boss-collapse2
 * @parent system-se
 * @type text
 * @text Boss collapse 2
 * 
 * @param system-se-actor-damage
 * @parent system-se
 * @type text
 * @text Actor damage
 * 
 * @param system-se-actor-collapse
 * @parent system-se
 * @type text
 * @text Actor collapse
 * 
 * @param system-se-recovery
 * @parent system-se
 * @type text
 * @text Recovery
 * 
 * @param system-se-miss
 * @parent system-se
 * @type text
 * @text Miss
 * 
 * @param system-se-evasion
 * @parent system-se
 * @type text
 * @text Evasion
 * 
 * @param system-se-magic-evasion
 * @parent system-se
 * @type text
 * @text Magic evasion
 * 
 * @param system-se-reflection
 * @parent system-se
 * @type text
 * @text Reflection
 * 
 * @param system-se-shop
 * @parent system-se
 * @type text
 * @text Shop
 * 
 * @param system-se-use-item
 * @parent system-se
 * @type text
 * @text Use item
 * 
 * @param system-se-use-skill
 * @parent system-se
 * @type text
 * @text Use skill
 */
/*:ko
 * @plugindesc 이 플러그인은 Firelight Technologies Pty Ltd의 FMOD를 적용합니다.
 * 버전 : alpha-1.0.4
 * @author Creta Park (https://creft.me/cretapark)
 *
 * @help
 * 이 플러그인은 Firelight Technologies Pty Ltd의 FMOD를 적용합니다.
 * 게임 업계 최고의 오디오 엔진을 RPG 만들기 MV에 사용해 보세요.
 * 
 * 제작 : Creta Park (https://creft.me/cretapark)
 * 
 * GitHub 페이지 : https://github.com/creta5164/fmod-rmmv
 * 권장 MV 버전 : 1.6.2 이상
 * 권장 FMOD 버전 : 2.01.13 이상
 * NW.js 0.29.4에서 테스트 완료
 * 
 * 라이센스 : https://github.com/creta5164/fmod-rmmv/blob/main/LICENSE
 * 
 * - 라이센스 조건 -
 * 
 * 1. 이 플러그인을 다른 소프트웨어와 함께 사용하는 경우,
 *    소프트웨어는 RPG 만들기로 개발 및 제작 된 게임이어야 하며,
 *    게임의 크레딧에는 `FMOD_MV.js by Creta Park`가 반드시 들어가야 합니다.
 * 
 * 2. 1의 내용을 FMOD의 저작자 표기와 혼동해서는 안 됩니다.  
 *    FMOD의 저작자 표기와 완전히 별개로 표기하세요.
 * 
 * 3. 이 플러그인의 원본 또는 수정된 버전이나
 *    개별 구성 요소는 단독으로 판매될 수 없습니다.
 * 
 * 4. 수정 후 재배포를 하는 경우, 원저작자를 반드시 표기해야 합니다.
 * 
 * 설정, 사용법, 제한 사항 등은
 * 저장소의 README.md에서 확인해 주세요.
 * https://github.com/creta5164/fmod-rmmv/blob/main/README-ko.md
 * 
 * @param total-memory
 * @text 최대 메모리
 * @desc FMOD의 가상 메모리 최대 크기입니다. (바이트 단위)
 * 기본값은 64MB 입니다. (64 * 1024 * 1024)
 * @default 67108864
 * @type number
 * 
 * @param bank-path
 * @text 뱅크 파일 경로
 * @desc FMOD에 사용할 뱅크 파일이 있는 경로를 지정합니다.
 * @default audio/bank
 * @type text
 * 
 * @param bank-assets
 * @text 사용할 뱅크 파일들
 * @parent bank-path
 * @desc 불러올 뱅크 파일을 지정합니다.
 * @type text[]
 * @default ["Master","Master.strings"]
 * 
 * @param guids-path
 * @text GUID 스크립트 경로
 * @desc GUID가 담겨있는 스크립트 파일의 위치를 지정합니다.
 * (i.e. audio/bank/fmod_studio_guids.js)
 * @type text
 * @default audio/bank/fmod_studio_guids.js
 * 
 * @param integrated-vcas
 * @text 연동할 VCA들
 * 
 * @param integrated-vcas-bgm
 * @parent integrated-vcas
 * @text 지정한 BGM VCA 이름
 * @type text 
 * @desc 어떤 VCA가 음악으로 쓰이는지 이름을 쓰세요.
 * 만약 BGM인 VCA가 fmod GUID에 있다면 비워두세요.
 * 
 * @param integrated-vcas-bgs
 * @parent integrated-vcas
 * @text 지정한 BGS VCA 이름
 * @type text 
 * @desc 어떤 VCA가 환경음으로 쓰이는지 이름을 쓰세요.
 * 만약 BGS인 VCA가 fmod GUID에 있다면 비워두세요.
 * 
 * @param integrated-vcas-me
 * @parent integrated-vcas
 * @text 지정한 ME VCA 이름
 * @type text 
 * @desc 어떤 VCA가 음악 효과음으로 쓰이는지 이름을 쓰세요.
 * 만약 ME인 VCA가 fmod GUID에 있다면 비워두세요.
 * 
 * @param integrated-vcas-se
 * @parent integrated-vcas
 * @text 지정한 SE VCA 이름
 * @type text 
 * @desc 어떤 VCA가 효과음으로 쓰이는지 이름을 쓰세요.
 * 만약 SE인 VCA가 fmod GUID에 있다면 비워두세요.
 * 
 * @param system-bgm
 * @text 시스템 음악(BGM)들
 * 
 * @param system-bgm-title
 * @parent system-bgm
 * @type text
 * @text 타이틀
 * 
 * @param system-bgm-battle
 * @parent system-bgm
 * @type text
 * @text 전투
 * 
 * @param system-bgm-airship
 * @parent system-bgm
 * @type text
 * @text 비행선
 * 
 * @param system-bgm-boat
 * @parent system-bgm
 * @type text
 * @text 보트
 * 
 * @param system-bgm-ship
 * @parent system-bgm
 * @type text
 * @text 선박
 * 
 * @param system-me
 * @text 시스템 음악 효과음(ME)들
 * 
 * @param system-me-victory
 * @parent system-me
 * @type text
 * @text 승리
 * 
 * @param system-me-defeat
 * @parent system-me
 * @type text
 * @text 패배
 * 
 * @param system-me-game-over
 * @parent system-me
 * @type text
 * @text 게임 종료 (게임오버)
 * 
 * @param system-se
 * @text 시스템 효과음(SE)들
 * 
 * @param system-se-cursor
 * @parent system-se
 * @type text
 * @text 커서
 * 
 * @param system-se-ok
 * @parent system-se
 * @type text
 * @text OK
 * 
 * @param system-se-cancel
 * @parent system-se
 * @type text
 * @text 취소
 * 
 * @param system-se-buzzer
 * @parent system-se
 * @type text
 * @text 버저
 * 
 * @param system-se-equip
 * @parent system-se
 * @type text
 * @text 장착
 * 
 * @param system-se-save
 * @parent system-se
 * @type text
 * @text 저장
 * 
 * @param system-se-load
 * @parent system-se
 * @type text
 * @text 로딩 (불러오기)
 * 
 * @param system-se-battle-start
 * @parent system-se
 * @type text
 * @text 전투 시작
 * 
 * @param system-se-escape
 * @parent system-se
 * @type text
 * @text 도망
 * 
 * @param system-se-enemy-attack
 * @parent system-se
 * @type text
 * @text 적 공격
 * 
 * @param system-se-enemy-damage
 * @parent system-se
 * @type text
 * @text 적 피해
 * 
 * @param system-se-enemy-collapse
 * @parent system-se
 * @type text
 * @text 적 소멸 (처치)
 * 
 * @param system-se-boss-collapse1
 * @parent system-se
 * @type text
 * @text 보스 소멸 1 (처치)
 * 
 * @param system-se-boss-collapse2
 * @parent system-se
 * @type text
 * @text 보스 소멸 2 (처치)
 * 
 * @param system-se-actor-damage
 * @parent system-se
 * @type text
 * @text 아군 피해
 * 
 * @param system-se-actor-collapse
 * @parent system-se
 * @type text
 * @text 아군 전투 불능
 * 
 * @param system-se-recovery
 * @parent system-se
 * @type text
 * @text 회복
 * 
 * @param system-se-miss
 * @parent system-se
 * @type text
 * @text 실수 (빗나감)
 * 
 * @param system-se-evasion
 * @parent system-se
 * @type text
 * @text 회피
 * 
 * @param system-se-magic-evasion
 * @parent system-se
 * @type text
 * @text 마법 회피
 * 
 * @param system-se-reflection
 * @parent system-se
 * @type text
 * @text 마법 반사
 * 
 * @param system-se-shop
 * @parent system-se
 * @type text
 * @text 상점 (구매 / 판매)
 * 
 * @param system-se-use-item
 * @parent system-se
 * @type text
 * @text 아이템 사용
 * 
 * @param system-se-use-skill
 * @parent system-se
 * @type text
 * @text 스킬 사용
 */

function Guid(a, b, c, d, e, f, g, h, i, j, k) {
    
    if (typeof a === 'string') {
        
        this.initFromString(a);
        return;
        
    } else if (typeof a === 'object') {
        
        this.initFromObject(a);
        return;
    }
    
    if (a < 0 || a > 4294967295)
        throw new Error("Argument a is out of range for uint. (0 ~ 4,294,967,295)");
    
    if (b < 0 || b > 65535)
        throw new Error("Argument b is out of range for ushort. (0 ~ 65,535)");
    
    if (c < 0 || c > 65535)
        throw new Error("Argument c is out of range for ushort. (0 ~ 65,535)");
    
    if (d < 0 || d > 255)
        throw new Error("Argument d is out of range for byte. (0 ~ 255)");
    
    if (e < 0 || e > 255)
        throw new Error("Argument e is out of range for byte. (0 ~ 255)");
    
    if (f < 0 || f > 255)
        throw new Error("Argument f is out of range for byte. (0 ~ 255)");
    
    if (g < 0 || g > 255)
        throw new Error("Argument g is out of range for byte. (0 ~ 255)");
    
    if (h < 0 || h > 255)
        throw new Error("Argument h is out of range for byte. (0 ~ 255)");
    
    if (i < 0 || i > 255)
        throw new Error("Argument i is out of range for byte. (0 ~ 255)");
    
    if (j < 0 || j > 255)
        throw new Error("Argument j is out of range for byte. (0 ~ 255)");
    
    if (k < 0 || k > 255)
        throw new Error("Argument k is out of range for byte. (0 ~ 255)");
    
    this.Data1 = a;
    this.Data2 = b;
    this.Data3 = c;
    this.Data4 = [d, e, f, g, h, i, j, k];
}

Guid.prototype.initFromObject = function(object) {
    
    if (!object.hasOwnProperty('Data1')
     || !object.hasOwnProperty('Data2')
     || !object.hasOwnProperty('Data3')
     || !object.hasOwnProperty('Data4'))
        throw new Error("Cannot cast from object.");
    
    this.Data1 = object.Data1;
    this.Data2 = object.Data2;
    this.Data3 = object.Data3;
    this.Data4 = object.Data4;
}

Guid.prototype.initFromString = function(string) {
    
    var start = string.indexOf('{');
    var end = string.indexOf('}');
    
    if (start < 0 || end < 0)
        throw new Error("Guid string is not valid.");
    
    string = string.substring(start + 1, end)
        .split('-').map(hex => hex.trim());
    
    this.Data1 = Number(`0x${string[0]}`);
    this.Data2 = Number(`0x${string[1]}`);
    this.Data3 = Number(`0x${string[2]}`);
    
    this.Data4 = [];
    
    for (var i = 0; i < string[3].length; i += 2)
        this.Data4.push(Number(`0x${string[3][i]}${string[3][i + 1]}`));
    
    for (var i = 0; i < string[4].length; i += 2)
        this.Data4.push(Number(`0x${string[4][i]}${string[4][i + 1]}`));
}

Guid.prototype.toString = function() {
    
    var a = this.Data1.toString(16).padStart(8, '0');
    
    var b = this.Data2.toString(16).padStart(4, '0');
    
    var c = this.Data3.toString(16).padStart(4, '0');
    
    var d = this.Data4[0].toString(16).padStart(2, '0')
          + this.Data4[1].toString(16).padStart(2, '0');
    
    var e = this.Data4[2].toString(16).padStart(2, '0')
          + this.Data4[3].toString(16).padStart(2, '0')
          + this.Data4[4].toString(16).padStart(2, '0')
          + this.Data4[5].toString(16).padStart(2, '0')
          + this.Data4[6].toString(16).padStart(2, '0')
          + this.Data4[7].toString(16).padStart(2, '0');
    
    return `{${a}-${b}-${c}-${d}-${e}}`;
}

let FMOD;

function FMOD_MV() {
    
    throw new Error("This is a static class.");
}

(function() {
    
    FMOD_MV.Params = PluginManager.parameters("FMOD_MV");
    
    FMOD_MV.BankPath = FMOD_MV.Params["bank-path"];
    FMOD_MV.BankAssets = JSON.parse(FMOD_MV.Params["bank-assets"])
        .map(name => name.endsWith('.bank') ? name : (name + '.bank'));
    
    FMOD_MV.GUIDsPath = FMOD_MV.Params["guids-path"];
    
    FMOD_MV.VCA_BGM = FMOD_MV.Params["integrated-vcas-bgm"];
    FMOD_MV.VCA_BGS = FMOD_MV.Params["integrated-vcas-bgs"];
    FMOD_MV.VCA_ME  = FMOD_MV.Params["integrated-vcas-me"];
    FMOD_MV.VCA_SE  = FMOD_MV.Params["integrated-vcas-se"];
    
    FMOD_MV.SystemBGM_Title       = FMOD_MV.Params["system-bgm-title"];
    FMOD_MV.SystemBGM_Battle      = FMOD_MV.Params["system-bgm-battle"];
    FMOD_MV.SystemBGM_Airship     = FMOD_MV.Params["system-bgm-airship"];
    FMOD_MV.SystemBGM_Boat        = FMOD_MV.Params["system-bgm-boat"];
    FMOD_MV.SystemBGM_Ship        = FMOD_MV.Params["system-bgm-ship"];
    
    FMOD_MV.SystemME_Victory      = FMOD_MV.Params["system-me-victory"];
    FMOD_MV.SystemME_Defeat       = FMOD_MV.Params["system-me-defeat"];
    FMOD_MV.SystemME_GameOver     = FMOD_MV.Params["system-me-game-over"];
    
    FMOD_MV.SystemSE_Cursor        = FMOD_MV.Params["system-se-cursor"];
    FMOD_MV.SystemSE_Ok            = FMOD_MV.Params["system-se-ok"];
    FMOD_MV.SystemSE_Cancel        = FMOD_MV.Params["system-se-cancel"];
    FMOD_MV.SystemSE_Buzzer        = FMOD_MV.Params["system-se-buzzer"];
    FMOD_MV.SystemSE_Equip         = FMOD_MV.Params["system-se-equip"];
    FMOD_MV.SystemSE_Save          = FMOD_MV.Params["system-se-save"];
    FMOD_MV.SystemSE_Load          = FMOD_MV.Params["system-se-load"];
    FMOD_MV.SystemSE_BattleStart   = FMOD_MV.Params["system-se-battle-start"];
    FMOD_MV.SystemSE_Escape        = FMOD_MV.Params["system-se-escape"];
    FMOD_MV.SystemSE_EnemyAttack   = FMOD_MV.Params["system-se-enemy-attack"];
    FMOD_MV.SystemSE_EnemyDamage   = FMOD_MV.Params["system-se-enemy-damage"];
    FMOD_MV.SystemSE_EnemyCollapse = FMOD_MV.Params["system-se-enemy-collapse"];
    FMOD_MV.SystemSE_BossCollapse1 = FMOD_MV.Params["system-se-boss-collapse1"];
    FMOD_MV.SystemSE_BossCollapse2 = FMOD_MV.Params["system-se-boss-collapse2"];
    FMOD_MV.SystemSE_ActorDamage   = FMOD_MV.Params["system-se-actor-damage"];
    FMOD_MV.SystemSE_ActorCollapse = FMOD_MV.Params["system-se-actor-collapse"];
    FMOD_MV.SystemSE_Recovery      = FMOD_MV.Params["system-se-recovery"];
    FMOD_MV.SystemSE_Miss          = FMOD_MV.Params["system-se-miss"];
    FMOD_MV.SystemSE_Evasion       = FMOD_MV.Params["system-se-evasion"];
    FMOD_MV.SystemSE_MagicEvasion  = FMOD_MV.Params["system-se-magic-evasion"];
    FMOD_MV.SystemSE_Reflection    = FMOD_MV.Params["system-se-reflection"];
    FMOD_MV.SystemSE_Shop          = FMOD_MV.Params["system-se-shop"];
    FMOD_MV.SystemSE_UseItem       = FMOD_MV.Params["system-se-use-item"];
    FMOD_MV.SystemSE_UseSkill      = FMOD_MV.Params["system-se-use-skill"];
    
    FMOD_MV.QueuedPauseBGMs = null;
    FMOD_MV.QueuedPauseBGSs = null;
    FMOD_MV.QueuedPauseBGMsByME = null;
    
    FMOD_MV.MaximumHeapSize = Number(FMOD_MV.Params["total-memory"]) || 64 * 1024 * 1024;
    
    FMOD_MV.EventType = {
        
        None: 0,
        BGM:  1,
        BGS:  2,
        ME:   3,
        SE:   4
    }
    
    FMOD_MV.EventTypeValues = Object.values(FMOD_MV.EventType);
    
    FMOD_MV.LISTENER_CAMERA = 0;
    
    FMOD_MV.Initialized = false;
    FMOD_MV.IsAudioResumed = false;
    
    FMOD_MV.FGlobalSystem = null;
    FMOD_MV.FGlobalSystemCore = null;
    FMOD_MV.FBanks = null;
    
    FMOD_MV.ListenerAttributes = [];
    FMOD_MV.MaximumInstanceCount = 200;
    
    FMOD_MV.Log = function(obj) {
        
        console.log(`[FMOD_MV] ${obj}`);
    }
    
    FMOD_MV.Warn = function(obj) {
        
        console.warn(`[FMOD_MV] ${obj}`);
    }
    
    FMOD_MV.Error = function(obj) {
        
        console.error(`[FMOD_MV] ${obj}`);
    }
    
    FMOD_MV.Assert = function(result) {
        
        if (result != FMOD.OK) {
            
            if (result in FMOD_MV.FMODError)
                throw new Error(`[FMOD_MV] FMOD Error : ${FMOD_MV.FMODError[result]} - ${FMOD.ErrorString(result)}`);
            
            else
                throw new Error(`[FMOD_MV] FMOD Error : UNKNOWN - ${FMOD.ErrorString(result)}`);
        }
    }
    
    FMOD_MV.OnPreRun = function() {
        
        var bankAssets = FMOD_MV.BankAssets;
        var canRead = true;
        var canWrite = false;
        
        for (var bankAsset of bankAssets)
            FMOD.FS_createPreloadedFile('/', bankAsset, FMOD_MV.BankPath + '/' + bankAsset, canRead, canWrite);
    }
    
    FMOD_MV.Initialize = function() {
        
        FMOD_MV.FMODError = {[FMOD.OK]:"OK",[FMOD.ERR_BADCOMMAND]:"ERR_BADCOMMAND",[FMOD.ERR_CHANNEL_ALLOC]:"ERR_CHANNEL_ALLOC",[FMOD.ERR_CHANNEL_STOLEN]:"ERR_CHANNEL_STOLEN",[FMOD.ERR_DMA]:"ERR_DMA",[FMOD.ERR_DSP_CONNECTION]:"ERR_DSP_CONNECTION",[FMOD.ERR_DSP_DONTPROCESS]:"ERR_DSP_DONTPROCESS",[FMOD.ERR_DSP_FORMAT]:"ERR_DSP_FORMAT",[FMOD.ERR_DSP_INUSE]:"ERR_DSP_INUSE",[FMOD.ERR_DSP_NOTFOUND]:"ERR_DSP_NOTFOUND",[FMOD.ERR_DSP_RESERVED]:"ERR_DSP_RESERVED",[FMOD.ERR_DSP_SILENCE]:"ERR_DSP_SILENCE",[FMOD.ERR_DSP_TYPE]:"ERR_DSP_TYPE",[FMOD.ERR_FILE_BAD]:"ERR_FILE_BAD",[FMOD.ERR_FILE_COULDNOTSEEK]:"ERR_FILE_COULDNOTSEEK",[FMOD.ERR_FILE_DISKEJECTED]:"ERR_FILE_DISKEJECTED",[FMOD.ERR_FILE_EOF]:"ERR_FILE_EOF",[FMOD.ERR_FILE_ENDOFDATA]:"ERR_FILE_ENDOFDATA",[FMOD.ERR_FILE_NOTFOUND]:"ERR_FILE_NOTFOUND",[FMOD.ERR_FORMAT]:"ERR_FORMAT",[FMOD.ERR_HEADER_MISMATCH]:"ERR_HEADER_MISMATCH",[FMOD.ERR_HTTP]:"ERR_HTTP",[FMOD.ERR_HTTP_ACCESS]:"ERR_HTTP_ACCESS",[FMOD.ERR_HTTP_PROXY_AUTH]:"ERR_HTTP_PROXY_AUTH",[FMOD.ERR_HTTP_SERVER_ERROR]:"ERR_HTTP_SERVER_ERROR",[FMOD.ERR_HTTP_TIMEOUT]:"ERR_HTTP_TIMEOUT",[FMOD.ERR_INITIALIZATION]:"ERR_INITIALIZATION",[FMOD.ERR_INITIALIZED]:"ERR_INITIALIZED",[FMOD.ERR_INTERNAL]:"ERR_INTERNAL",[FMOD.ERR_INVALID_FLOAT]:"ERR_INVALID_FLOAT",[FMOD.ERR_INVALID_HANDLE]:"ERR_INVALID_HANDLE",[FMOD.ERR_INVALID_PARAM]:"ERR_INVALID_PARAM",[FMOD.ERR_INVALID_POSITION]:"ERR_INVALID_POSITION",[FMOD.ERR_INVALID_SPEAKER]:"ERR_INVALID_SPEAKER",[FMOD.ERR_INVALID_SYNCPOINT]:"ERR_INVALID_SYNCPOINT",[FMOD.ERR_INVALID_THREAD]:"ERR_INVALID_THREAD",[FMOD.ERR_INVALID_VECTOR]:"ERR_INVALID_VECTOR",[FMOD.ERR_MAXAUDIBLE]:"ERR_MAXAUDIBLE",[FMOD.ERR_MEMORY]:"ERR_MEMORY",[FMOD.ERR_MEMORY_CANTPOINT]:"ERR_MEMORY_CANTPOINT",[FMOD.ERR_NEEDS3D]:"ERR_NEEDS3D",[FMOD.ERR_NEEDSHARDWARE]:"ERR_NEEDSHARDWARE",[FMOD.ERR_NET_CONNECT]:"ERR_NET_CONNECT",[FMOD.ERR_NET_SOCKET_ERROR]:"ERR_NET_SOCKET_ERROR",[FMOD.ERR_NET_URL]:"ERR_NET_URL",[FMOD.ERR_NET_WOULD_BLOCK]:"ERR_NET_WOULD_BLOCK",[FMOD.ERR_NOTREADY]:"ERR_NOTREADY",[FMOD.ERR_OUTPUT_ALLOCATED]:"ERR_OUTPUT_ALLOCATED",[FMOD.ERR_OUTPUT_CREATEBUFFER]:"ERR_OUTPUT_CREATEBUFFER",[FMOD.ERR_OUTPUT_DRIVERCALL]:"ERR_OUTPUT_DRIVERCALL",[FMOD.ERR_OUTPUT_FORMAT]:"ERR_OUTPUT_FORMAT",[FMOD.ERR_OUTPUT_INIT]:"ERR_OUTPUT_INIT",[FMOD.ERR_OUTPUT_NODRIVERS]:"ERR_OUTPUT_NODRIVERS",[FMOD.ERR_PLUGIN]:"ERR_PLUGIN",[FMOD.ERR_PLUGIN_MISSING]:"ERR_PLUGIN_MISSING",[FMOD.ERR_PLUGIN_RESOURCE]:"ERR_PLUGIN_RESOURCE",[FMOD.ERR_PLUGIN_VERSION]:"ERR_PLUGIN_VERSION",[FMOD.ERR_RECORD]:"ERR_RECORD",[FMOD.ERR_REVERB_CHANNELGROUP]:"ERR_REVERB_CHANNELGROUP",[FMOD.ERR_REVERB_INSTANCE]:"ERR_REVERB_INSTANCE",[FMOD.ERR_SUBSOUNDS]:"ERR_SUBSOUNDS",[FMOD.ERR_SUBSOUND_ALLOCATED]:"ERR_SUBSOUND_ALLOCATED",[FMOD.ERR_SUBSOUND_CANTMOVE]:"ERR_SUBSOUND_CANTMOVE",[FMOD.ERR_TAGNOTFOUND]:"ERR_TAGNOTFOUND",[FMOD.ERR_TOOMANYCHANNELS]:"ERR_TOOMANYCHANNELS",[FMOD.ERR_TRUNCATED]:"ERR_TRUNCATED",[FMOD.ERR_UNIMPLEMENTED]:"ERR_UNIMPLEMENTED",[FMOD.ERR_UNINITIALIZED]:"ERR_UNINITIALIZED",[FMOD.ERR_UNSUPPORTED]:"ERR_UNSUPPORTED",[FMOD.ERR_VERSION]:"ERR_VERSION",[FMOD.ERR_EVENT_ALREADY_LOADED]:"ERR_EVENT_ALREADY_LOADED",[FMOD.ERR_EVENT_LIVEUPDATE_BUSY]:"ERR_EVENT_LIVEUPDATE_BUSY",[FMOD.ERR_EVENT_LIVEUPDATE_MISMATCH]:"ERR_EVENT_LIVEUPDATE_MISMATCH",[FMOD.ERR_EVENT_LIVEUPDATE_TIMEOUT]:"ERR_EVENT_LIVEUPDATE_TIMEOUT",[FMOD.ERR_EVENT_NOTFOUND]:"ERR_EVENT_NOTFOUND",[FMOD.ERR_STUDIO_UNINITIALIZED]:"ERR_STUDIO_UNINITIALIZED",[FMOD.ERR_STUDIO_NOT_LOADED]:"ERR_STUDIO_NOT_LOADED",[FMOD.ERR_INVALID_STRING]:"ERR_INVALID_STRING",[FMOD.ERR_ALREADY_LOCKED]:"ERR_ALREADY_LOCKED",[FMOD.ERR_NOT_LOCKED]:"ERR_NOT_LOCKED",[FMOD.ERR_RECORD_DISCONNECTED]:"ERR_RECORD_DISCONNECTED",[FMOD.ERR_TOOMANYSAMPLES]:"ERR_TOOMANYSAMPLES"}
        
        var ptr_out = {}
        var result;
        
        result = FMOD.Studio_System_Create(ptr_out);
        FMOD_MV.Assert(result);
        
        var globalSystem = FMOD_MV.FGlobalSystem = ptr_out.val;
        
        result = globalSystem.getCoreSystem(ptr_out);
        FMOD_MV.Assert(result);
        
        var globalSystemCore = FMOD_MV.FGlobalSystemCore = ptr_out.val;
        
        result = globalSystemCore.setDSPBufferSize(2048, 2);
        FMOD_MV.Assert(result);
        
        result = globalSystem.initialize(1024, FMOD.STUDIO_INIT_NORMAL, FMOD.INIT_NORMAL, null);
        
        FMOD_MV.Start();
        
        FMOD_MV.RegisterListeners();
        FMOD_MV.Assert(FMOD_MV.FGlobalSystemCore.mixerResume());
        FMOD_MV.IsAudioResumed = true;
        
        if (typeof OutputAudioWorklet_resumeAudio === "function")
            OutputAudioWorklet_resumeAudio();
        
        FMOD_MV.Initialized = true;
    }
    
    FMOD_MV.RegisterListeners = function() {
        
        document.addEventListener("keydown", FMOD_MV.ResumeAudio.bind(this));
        document.addEventListener("mousedown", FMOD_MV.ResumeAudio.bind(this));
        document.addEventListener("touchend", FMOD_MV.ResumeAudio.bind(this), false);
        document.addEventListener('touchstart', FMOD_MV.ResumeAudio.bind(this));
        document.addEventListener('visibilitychange', FMOD_MV.OnVisibilityChange.bind(this));
        document.addEventListener('blur', FMOD_MV.OnBlur.bind(this));
        document.addEventListener('focus', FMOD_MV.OnFocus.bind(this));
        
        if (!Utils.isNwjs())
            return;
        
        var window = nw.Window.get();
        window.on('focus', FMOD_MV.OnFocus.bind(this));
        window.on('blur', FMOD_MV.OnBlur.bind(this));
    }
    
    FMOD_MV.Vector = function(x, y, z, to) {
        
        if (!to)
            to = {}
        
        to.x = x;
        to.y = y;
        to.z = z;
        
        return to;
    }
    
    FMOD_MV.Create3DAttributes = function(x, y, z) {
        
        var attributes = FMOD._3D_ATTRIBUTES();
        
        FMOD_MV.Vector(x || 0, y || 0, z || 0, attributes.position);
        FMOD_MV.Vector(0, 0, 0, attributes.velocity);
        FMOD_MV.Vector(0, 0, 1, attributes.forward);
        FMOD_MV.Vector(0, 1, 0, attributes.up);
        
        return attributes;
    }
    
    FMOD_MV.SetListenerPosition = function(id, x, y, z) {
        
        if (id < 0)
            throw new Error('Invalid listener id');
        
        if (!FMOD_MV.ListenerAttributes[id])
            FMOD_MV.ListenerAttributes[id] = FMOD_MV.Create3DAttributes(x, y, z);
        
        var attributes = FMOD_MV.ListenerAttributes[id];
        
        FMOD_MV.Vector(x, y, z, attributes.position);
        FMOD_MV.Assert(FMOD_MV.FGlobalSystem.setListenerAttributes(id, attributes, null));
    }
    
    FMOD_MV.Start = function() {
        
        FMOD_MV.InstantiatedEvents = {
            
            [FMOD_MV.EventType.None]: {},
            [FMOD_MV.EventType.BGM]:  {},
            [FMOD_MV.EventType.BGS]:  {},
            [FMOD_MV.EventType.ME]:   {},
            [FMOD_MV.EventType.SE]:   {}
        }
        
        FMOD_MV.SetListenerPosition(FMOD_MV.LISTENER_CAMERA, 0, 0, 0);
        FMOD_MV.GlobalSpeaker = new Speaker({x: 0, y: 0});
        
        FMOD_MV.Temp3DAttributes = FMOD_MV.Create3DAttributes();
        
        FMOD_MV.FBanks = {}
        var bankAssets = FMOD_MV.BankAssets;
        var bank;
        
        for (var bankAsset of bankAssets) {
            
            bank = FMOD_MV.LoadBank(bankAsset);
            FMOD_MV.FBanks[bankAsset] = bank;
            
            if (bankAsset.endsWith('.strings.bank'))
                FMOD_MV.GatherAllStrings(bankAsset, bank);
        }
        
        FMOD_MV.VCA_BGM = FMOD_MV.GetVCA(FMOD_MV.VCA_BGM);
        FMOD_MV.VCA_BGS = FMOD_MV.GetVCA(FMOD_MV.VCA_BGS);
        FMOD_MV.VCA_ME  = FMOD_MV.GetVCA(FMOD_MV.VCA_ME);
        FMOD_MV.VCA_SE  = FMOD_MV.GetVCA(FMOD_MV.VCA_SE);
        
        if (!FMOD_MV.VCA_BGM) FMOD_MV.Warn("FMOD MV Couldn't found VCA for BGM, volume for BGM channel will be ignored. (only applied to RM core system)");
        if (!FMOD_MV.VCA_BGS) FMOD_MV.Warn("FMOD MV Couldn't found VCA for BGS, volume for BGS channel will be ignored. (only applied to RM core system)");
        if (!FMOD_MV.VCA_ME)  FMOD_MV.Warn("FMOD MV Couldn't found VCA for ME, volume for ME channel will be ignored. (only applied to RM core system)");
        if (!FMOD_MV.VCA_SE)  FMOD_MV.Warn("FMOD MV Couldn't found VCA for SE, volume for SE channel will be ignored. (only applied to RM core system)");
        
        FMOD_MV.SetBGMVolume(AudioManager.bgmVolume);
        FMOD_MV.SetBGSVolume(AudioManager.bgsVolume);
        FMOD_MV.SetMEVolume(AudioManager.meVolume);
        FMOD_MV.SetSEVolume(AudioManager.seVolume);
        
        FMOD_MV.Snapshots = FMOD_MV.LoadAllSnapshots();
    }
    
    FMOD_MV.GetVCA = function(guid) {
         
        if (!(guid instanceof Guid))
            return null;
        
        var ptr_out = {};
        
        try {
            
            FMOD_MV.Assert(FMOD_MV.FGlobalSystem.getVCAByID(guid, ptr_out));
            
        } catch (ex) {
            
            return null;
        }
        
        return ptr_out.val;
    }
    
    FMOD_MV.LoadAllSnapshots = function() {
        
        var result = {}
        
        if (!FMOD_FSPRO)
            return result;
        
        var ptr_event = {}
        var ptr_instance = {}
        
        var guid;
        
        for (var snaps in FMOD_FSPRO.Snapshot) {
            
            guid = FMOD_FSPRO.Snapshot[snaps];
            
            FMOD_MV.Assert(FMOD_MV.FGlobalSystem.getEventByID(guid, ptr_event));
            FMOD_MV.Assert(ptr_event.val.createInstance(ptr_instance));
            
            result[guid] = ptr_instance.val;
        }
        
        return result;
    }
    
    FMOD_MV.GetEvent = function(type, guid) {
        
        if (!(type in FMOD_MV.EventTypeValues))
            type = FMOD_MV.EventType.None;
         
        if (!(guid instanceof Guid))
            return null;
        
        //if (!(type in FMOD_MV.InstantiatedEvents))
        //    FMOD_MV.InstantiatedEvents[type] = {}
        
        var instancesType = FMOD_MV.InstantiatedEvents[type];
        var instanceCreated = false;
        
        if (!(guid in instancesType)) {
            
            instancesType[guid] = {
                instances: [],
                parameters: {},
                initialParameters: null
            }
            
            instanceCreated = true;
        }
        
        var instancesData = instancesType[guid];
        
        if (!instanceCreated) {
            
            var availableInstance = instancesData.instances
                .find(instance => {
                    
                    if (!instance || instance.isDeleted())
                        return false;
                    
                    var ptr_state = {}
                    FMOD_MV.Assert(instance.getPlaybackState(ptr_state));
                    
                    return ptr_state.val === FMOD.STUDIO_PLAYBACK_STOPPED;
                });
            
            if (availableInstance)
                return availableInstance;
            
            else if (instancesData.instances.length >= FMOD_MV.MaximumInstanceCount) {
                
                FMOD_MV.Log(`Can't instantiate event, ${guid}'s instances reached maximum count.`);
                return null;
            }
        }
        
        //var isID = false;
        //
        //if (guid instanceof Guid)
        //    isID = true;
        
        var ptr_event = {}
        var ptr_instance = {}
        
        //if (isID)
        FMOD_MV.Assert(FMOD_MV.FGlobalSystem.getEventByID(guid, ptr_event));
        //
        //else
        //    FMOD_MV.Assert(FMOD_MV.FGlobalSystem.getEventByName(guid, ptr_event));
        
        FMOD_MV.Assert(ptr_event.val.createInstance(ptr_instance));
        
        instancesData.initialParameters = FMOD_MV.CacheInitialParameters(ptr_instance.val);
        
        for (var name in instancesData.initialParameters) {
            
            if (!instancesData.parameters[name])
                instancesData.parameters[name] = [0, true];
            
            instancesData.parameters[name][0] = instancesData.initialParameters[name];
            instancesData.parameters[name][1] = true;
        }
        
        instancesData.instances.push(ptr_instance.val);
        
        return ptr_instance.val;
    }
    
    FMOD_MV.CacheInitialParameters = function(event) {
        
        var result = {}
        
        var ptr_description = {}
        FMOD_MV.Assert(event.getDescription(ptr_description));
        var description = ptr_description.val;
        
        var ptr_count = {}
        FMOD_MV.Assert(description.getParameterDescriptionCount(ptr_count));
        
        var paramDescription = {};
        
        for (var index = 0; index < ptr_count.val; index++) {
            
            FMOD_MV.Assert(description.getParameterDescriptionByIndex(index, paramDescription));
            result[paramDescription.name] = paramDescription.defaultvalue;
        }
        
        return result;
    }
    
    FMOD_MV.ResumeAudio = function() {
        
        if (FMOD_MV.IsAudioResumed)
            return;
        
        FMOD_MV.Assert(FMOD_MV.FGlobalSystemCore.mixerSuspend());
        FMOD_MV.Assert(FMOD_MV.FGlobalSystemCore.mixerResume());
        
        FMOD_MV.IsAudioResumed = true;
    }
    
    FMOD_MV.OnVisibilityChange = function() {
        
        if (document.visibilityState === 'hidden') {
            
            FMOD_MV.Assert(FMOD_MV.FGlobalSystemCore.mixerSuspend());
            FMOD_MV.IsAudioResumed = false;
        }
        
        else
            FMOD_MV.ResumeAudio.call(this);
    }
    
    FMOD_MV.OnBlur = function() {
        
        FMOD_MV.Assert(FMOD_MV.FGlobalSystemCore.mixerSuspend());
        FMOD_MV.IsAudioResumed = false;
    }
    
    FMOD_MV.OnFocus = function() {
        
        FMOD_MV.ResumeAudio.call(this);
    }
    
    FMOD_MV.LoadBank = function(name) {
        
        var path = name;
        var out = {}
        FMOD_MV.Assert(FMOD_MV.FGlobalSystem.loadBankFile(path, FMOD.STUDIO_LOAD_BANK_NORMAL, out));
        
        return out.val;
    }
    
    FMOD_MV.GatherAllStrings = function(bankAsset, bank) {
        
        //TODO : Cache all event's path in strings bank
    }
    
    Scene_Title.prototype.playTitleMusic = function() {
        
        if (!FMOD_MV.SystemBGM_Title)
            AudioManager.playBgm($dataSystem.titleBgm);
        
        else
            FMOD_MV.PlayBGM(FMOD_MV.SystemBGM_Title);
        
        FMOD_MV.StopSnapshot();
        AudioManager.stopBgs();
        AudioManager.stopMe();
        
        $gameMap.stopAllEventSpeakers();
    }
    
    Game_Map.prototype.stopAllEventSpeakers = function() {
        
        for (var event of this.events())
            event.speaker().stopEvent();
    }
    
    var Scene_Boot_isReady = Scene_Boot.prototype.isReady;
    Scene_Boot.prototype.isReady = function() {
        return FMOD_MV.Initialized && Scene_Boot_isReady.call(this);
    }
    
    var SceneManager_updateManagers = SceneManager.updateManagers;
    SceneManager.updateManagers = function() {
        
        SceneManager_updateManagers.call(SceneManager);
        
        if (FMOD_MV.Initialized)
            FMOD_MV.Update();
    }
    
    FMOD_MV.PlayEvent = function(type, guid, at, parameters) {
        
        var event = FMOD_MV.GetEvent(type, guid);
        
        if (!event)
            return;
        
        var attribute = null;
        
        //if (!is3D) {
        //    
        //    var ptr_description = {}
        //    FMOD_MV.Assert(event.getDescription(ptr_description));
        //    var description = ptr_description.val;
        //    
        //    var ptr_is3D = {}
        //    FMOD_MV.Assert(description.is3D(ptr_is3D));
        //    var is3D = ptr_is3D.val;
        //}
        
        var speaker = null;
            
        if (at instanceof Game_CharacterBase) {
            
            speaker = at.speaker();
            speaker.bindEvent(event, guid);
            
            attribute = speaker.attribute();
            
            isGlobal = false;
            
        } else if (at instanceof Game_Interpreter) {
            
            var character = at.character(at.eventId());
            
            if (character) {
                
                speaker = character.speaker();
                speaker.bindEvent(event, guid);
                
                attribute = speaker.attribute();
                isGlobal = false;
            }
            
        } else if (at && typeof at === 'object' && at.hasOwnProperty('x') && at.hasOwnProperty('y')) {
            
            FMOD_MV.Temp3DAttributes.position.x =  at.x;
            FMOD_MV.Temp3DAttributes.position.y = -at.y;
            FMOD_MV.Temp3DAttributes.position.z = 0;
            
            if (at.hasOwnProperty('param'))
                parameters = at['param'];
            
            attribute = FMOD_MV.Temp3DAttributes;
        }
        
        if (attribute)
            event.set3DAttributes(attribute);
        
        else {
            
            FMOD_MV.Temp3DAttributes.position.x = FMOD_MV.ListenerAttributes[FMOD_MV.LISTENER_CAMERA].position.x;
            FMOD_MV.Temp3DAttributes.position.y = FMOD_MV.ListenerAttributes[FMOD_MV.LISTENER_CAMERA].position.y;
            
            event.set3DAttributes(FMOD_MV.Temp3DAttributes);
        }
        
        FMOD_MV.ApplyParametersToEvent(event, parameters);
        event.start();
        
        return event;
    }
    
    FMOD_MV.ApplyParametersToEvent = function(event, parameters) {
        
        if (!parameters || typeof parameters !== 'object')
            return;
        
        var parameter;
        var immediateSet;
        
        for (var key in parameters) {
            
            parameter = parameters[key];
            
            if (parameter.length == 0)
                continue;
            
            if (parameter.length <= 1)
                immediateSet = false;
            
            immediateSet = parameter[1] == true;
            
            FMOD_MV.Assert(event.setParameterByName(key, parameters[key][0], immediateSet))
        }
    }
    
    FMOD_MV.EventIsPlaying = function(event) {
        
        var ptr_state = {}
        
        FMOD_MV.Assert(event.getPlaybackState(ptr_state));
        
        return ptr_state.val !== FMOD.STUDIO_PLAYBACK_STOPPED;
    }
    
    FMOD_MV.GetEventTimelinePosition = function(event) {
        
        var ptr_position = {};
        FMOD_MV.Assert(event.getTimelinePosition(ptr_position));
        
        return ptr_position.val;
    }
    
    FMOD_MV.SetEventTimelinePosition = function(event, milliseconds) {
        
        event.setTimelinePosition(milliseconds);
    }
    
    FMOD_MV.ResetEventParameters = function(type, guid) {
        
        if (!(type in FMOD_MV.EventTypeValues))
            type = FMOD_MV.EventType.None;
        
        if (!(guid instanceof Guid))
            return;
        
        var category = FMOD_MV.InstantiatedEvents[type];
        
        if (!(guid in category))
            return;
        
        var initialParameters = category[guid].initialParameters;
        
        for (var name in initialParameters)
            FMOD_MV.SetEventParameter(type, guid, name, initialParameters[name], true);
    }
    
    FMOD_MV.SetEventParameter = function(type, guid, name, value, immediateSet) {
        
        if (!(type in FMOD_MV.EventTypeValues))
            type = FMOD_MV.EventType.None;
        
        if (!guid || !(guid instanceof Guid))
            return;
        
        var category = FMOD_MV.InstantiatedEvents[type];
        
        if (!(guid in category))
            return;
        
        var eventData = category[guid];
        
        eventData.parameters[name] = [value || 0, immediateSet === true];
        
        for (var instance of eventData.instances)
            FMOD_MV.ApplyParametersToEvent(instance, eventData.parameters);
    }
    
    FMOD_MV.StopEvent = function(type, immediateStop, specifiedGuid) {
        
        if (!(type in FMOD_MV.EventTypeValues))
            type = FMOD_MV.EventType.None;
        
        if (specifiedGuid && specifiedGuid instanceof Guid) {
            
            if (!(specifiedGuid in FMOD_MV.InstantiatedEvents[type]))
                return;
            
            var playingInstances = FMOD_MV.InstantiatedEvents[type][specifiedGuid].instances
                    .filter(instance => FMOD_MV.EventIsPlaying(instance));
                
            for (var playingInstance of playingInstances)
                playingInstance.stop(immediateStop ? FMOD.STUDIO_STOP_IMMEDIATE : FMOD.STUDIO_STOP_ALLOWFADEOUT);
            
        } else {
            
            var playingInstances;
            
            for (var guid in FMOD_MV.InstantiatedEvents[type]) {
                
                playingInstances = FMOD_MV.InstantiatedEvents[type][guid].instances
                    .filter(instance => FMOD_MV.EventIsPlaying(instance));
                
                for (var playingInstance of playingInstances)
                    playingInstance.stop(immediateStop ? FMOD.STUDIO_STOP_IMMEDIATE : FMOD.STUDIO_STOP_ALLOWFADEOUT);
            }
        }
    }
    
    FMOD_MV.PlayBGM = function(guid, isAppend, immediateStop) {
        
        if (!guid || !(guid instanceof Guid))
            return null;
        
        //TODO : Apply to queue data if enqueued bgm are exist.
        
        if (FMOD_MV.BGMIsPlaying(guid))
            return null;
        
        if (!isAppend)
            FMOD_MV.StopBGM(immediateStop);
        
        FMOD_MV.ResetEventParameters(FMOD_MV.EventType.BGM, guid);
        var event = FMOD_MV.PlayEvent(FMOD_MV.EventType.BGM, guid);
        
        FMOD_MV.QueuedPauseBGMs = null;
        
        return event;
    }
    
    FMOD_MV.StopBGM = function(immediateStop, specifiedGuid) {
        
        FMOD_MV.StopEvent(FMOD_MV.EventType.BGM, immediateStop, specifiedGuid);
    }
    
    FMOD_MV.BGMIsPlaying = function(guid) {
        
        if (!guid)
            return Object.values(FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGM])
                .some(events => events.instances.some(instance => FMOD_MV.EventIsPlaying(instance)));
        
        if (!FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGM][guid])
            return false;
        
        return FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGM][guid].instances
            .some(instance => FMOD_MV.EventIsPlaying(instance));
    }
    
    FMOD_MV.SetBGMParameter = function(guid, name, value, immediateSet) {
        
        FMOD_MV.SetEventParameter(FMOD_MV.EventType.BGM, guid, name, value, immediateSet);
    }
    
    FMOD_MV.PauseBGM = function() {
        
        if (FMOD_MV.QueuedPauseBGMs)
            return;
        
        var events = FMOD_MV.InstantiatedEvents;
        var bgm = events[FMOD_MV.EventType.BGM];
        
        FMOD_MV.QueuedPauseBGMs = FMOD_MV.ExtractAllParameters(bgm, true, true);
    }
    
    FMOD_MV.ResumeBGM = function() {
        
        if (!FMOD_MV.QueuedPauseBGMs)
            return;
        
        var queue = FMOD_MV.QueuedPauseBGMs;
        FMOD_MV.LoadFromSerializedData(FMOD_MV.EventType.BGM, queue);
        
        FMOD_MV.QueuedPauseBGMs = null;
    }
    
    FMOD_MV.PlayBGS = function(guid, isAppend, immediateStop) {
        
        if (!guid || !(guid instanceof Guid))
            return null;
        
        if (FMOD_MV.BGSIsPlaying(guid))
            return null;
        
        if (!isAppend)
            FMOD_MV.StopBGS(immediateStop);
        
        FMOD_MV.ResetEventParameters(FMOD_MV.EventType.BGS, guid);
        var event = FMOD_MV.PlayEvent(FMOD_MV.EventType.BGS, guid);
        
        FMOD_MV.QueuedPauseBGSs = null;
        
        return event;
    }
    
    FMOD_MV.StopBGS = function(immediateStop, specifiedGuid) {
        
        FMOD_MV.StopEvent(FMOD_MV.EventType.BGS, immediateStop, specifiedGuid);
    }
    
    FMOD_MV.BGSIsPlaying = function(guid) {
        
        if (!guid)
            return Object.values(FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGS])
                .some(events => events.instances.some(instance => FMOD_MV.EventIsPlaying(instance)));
        
        if (!FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGS][guid])
            return false;
        
        return FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.BGS][guid].instances
            .some(instance => FMOD_MV.EventIsPlaying(instance));
    }
    
    FMOD_MV.SetBGSParameter = function(guid, name, value, immediateSet) {
        
        FMOD_MV.SetEventParameter(FMOD_MV.EventType.BGS, guid, name, value, immediateSet);
    }
    
    FMOD_MV.PauseBGS = function() {
        
        if (FMOD_MV.QueuedPauseBGSs)
            return;
        
        var events = FMOD_MV.InstantiatedEvents;
        var bgs = events[FMOD_MV.EventType.BGS];
        
        FMOD_MV.QueuedPauseBGSs = FMOD_MV.ExtractAllParameters(bgs, true, true);
    }
    
    FMOD_MV.ResumeBGS = function() {
        
        if (!FMOD_MV.QueuedPauseBGSs)
            return;
        
        var queue = FMOD_MV.QueuedPauseBGSs;
        FMOD_MV.LoadFromSerializedData(FMOD_MV.EventType.BGS, queue);
        
        FMOD_MV.QueuedPauseBGSs = null;
    }
    
    FMOD_MV.PlayME = function(guid, immediateStop) {
        
        if (!guid || !(guid instanceof Guid))
            return null;
        
        FMOD_MV.StopME(immediateStop);
        
        FMOD_MV.ResetEventParameters(FMOD_MV.EventType.ME, guid);
        var event = FMOD_MV.PlayEvent(FMOD_MV.EventType.ME, guid);
        
        if (FMOD_MV.QueuedPauseBGMsByME)
            return event;
        
        var events = FMOD_MV.InstantiatedEvents;
        var bgm = events[FMOD_MV.EventType.BGM];
        
        FMOD_MV.QueuedPauseBGMsByME = FMOD_MV.ExtractAllParameters(bgm, true, true);
        FMOD_MV.StopBGM();
        
        return event;
    }
    
    FMOD_MV.StopME = function(immediateStop, specifiedGuid) {
        
        FMOD_MV.StopEvent(FMOD_MV.EventType.ME, immediateStop, specifiedGuid);
        FMOD_MV.CheckMEIsFinished();
    }
    
    FMOD_MV.MEIsPlaying = function(guid) {
        
        if (!guid)
            return Object.values(FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.ME])
                .some(events => events.instances.some(instance => FMOD_MV.EventIsPlaying(instance)));
        
        if (!FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.ME][guid])
            return false;
        
        return FMOD_MV.InstantiatedEvents[FMOD_MV.EventType.ME][guid].instances
            .some(instance => FMOD_MV.EventIsPlaying(instance));
    }
    
    FMOD_MV.SetMEParameter = function(guid, name, value, immediateSet) {
        
        FMOD_MV.SetEventParameter(FMOD_MV.EventType.ME, guid, name, value, immediateSet);
    }
    
    FMOD_MV.CheckMEIsFinished = function() {
        
        if (FMOD_MV.QueuedPauseBGMsByME && !FMOD_MV.MEIsPlaying()) {
            
            var queue = FMOD_MV.QueuedPauseBGMsByME;
            FMOD_MV.LoadFromSerializedData(FMOD_MV.EventType.BGM, queue);
            
            FMOD_MV.QueuedPauseBGMsByME = null;
        }
    }
    
    FMOD_MV.PlaySE = function(guid, at, parameters, forceBind) {
        
        return FMOD_MV.PlayEvent(FMOD_MV.EventType.SE, guid, at, parameters, forceBind);
    }
    
    FMOD_MV.StopSE = function(immediateStop, specifiedGuid) {
        
        FMOD_MV.StopEvent(FMOD_MV.EventType.SE, immediateStop, specifiedGuid);
    }
    
    FMOD_MV.StartSnapshot = function(guid) {
        
        if (!guid || !(guid instanceof Guid))
            return;
        
        if (!(guid in FMOD_MV.Snapshots))
            return;
        
        FMOD_MV.Snapshots[guid].start();
    }
    
    FMOD_MV.StopSnapshot = function(immediateStop, specifiedGuid) {
        
        var stopMode = immediateStop ? FMOD.STUDIO_STOP_IMMEDIATE : FMOD.STUDIO_STOP_ALLOWFADEOUT;
        
        if (specifiedGuid && specifiedGuid instanceof Guid) {
            
            if (!(specifiedGuid in FMOD_MV.Snapshots))
                return;
            
            FMOD_MV.Snapshots[specifiedGuid].stop(stopMode);
            
        } else {
            
            for (var guid in FMOD_MV.Snapshots)
                FMOD_MV.Snapshots[guid].stop(stopMode);
        }
    }
    
    FMOD_MV.Update = function() {
        
        FMOD_MV.FGlobalSystem.update();
        FMOD_MV.CheckMEIsFinished();
    }
    
    FMOD_MV.SaveAll = function() {
        
        var data = {}
        
        var events = FMOD_MV.InstantiatedEvents;
        
        var bgm = events[FMOD_MV.EventType.BGM];
        var bgs = events[FMOD_MV.EventType.BGS];
        
        data.bgm = FMOD_MV.ExtractAllParameters(bgm, true);
        data.bgs = FMOD_MV.ExtractAllParameters(bgs, true);
        
        data.snapshots = FMOD_MV.SaveSnapshots();
        
        data.queuedPausedBGMs    = FMOD_MV.QueuedPauseBGMs;
        data.queuedPauseBGSs     = FMOD_MV.QueuedPauseBGSs;
        data.queuedPauseBGMsByME = FMOD_MV.QueuedPauseBGMsByME;
        
        return data;
    }
    
    FMOD_MV.ExtractAllParameters = function(instances, playingOnly, withTimelinePosition) {
        
        var result = {}
        var playingInstances;
        var isPlaying;
        
        for (var guid in instances) {
            
            playingInstances = instances[guid].instances
                .filter(event => event && !event.isDeleted() && FMOD_MV.EventIsPlaying(event));
            
            isPlaying = playingInstances.length > 0;
            
            if (playingOnly && !isPlaying)
                continue;
            
            result[guid] = {
                parameters: instances[guid].parameters,
                isPlaying: isPlaying,
                time: withTimelinePosition !== true ? 0 : FMOD_MV.GetEventTimelinePosition(playingInstances[0])
            }
        }
        
        return result;
    }
    
    FMOD_MV.SaveSnapshots = function() {
        
        var snapshots = {}
        
        for (var guid in FMOD_MV.Snapshots)
            snapshots[guid] = FMOD_MV.SnapshotIsPlaying(FMOD_MV.Snapshots[guid]);
        
        return snapshots;
    }
    
    FMOD_MV.SnapshotIsPlaying = function(snapshot) {
        
        var ptr_state = {}
        
        FMOD_MV.Assert(snapshot.getPlaybackState(ptr_state));
        
        return ptr_state.val === FMOD.STUDIO_PLAYBACK_PLAYING;
    }
    
    FMOD_MV.LoadAll = function(data) {
        
        if (!data)
            return;
        
        FMOD_MV.LoadFromSerializedData(FMOD_MV.EventType.BGM, data.bgm);
        FMOD_MV.LoadFromSerializedData(FMOD_MV.EventType.BGS, data.bgs);
        
        FMOD_MV.LoadSnapshots(data.snapshots);
        
        FMOD_MV.QueuedPauseBGMs     = data.queuedPausedBGMs    || null;
        FMOD_MV.QueuedPauseBGSs     = data.queuedPauseBGSs     || null;
        FMOD_MV.QueuedPauseBGMsByME = data.queuedPauseBGMsByME || null;
    }
    
    FMOD_MV.LoadFromSerializedData = function(type, data) {
        
        if (!data)
            return;
        
        if (!(type in FMOD_MV.EventTypeValues))
            type = FMOD_MV.EventType.None;
        
        var guid, serializedData, parameterData;
        
        for (var guidStr in data) {
            
            guid = new Guid(guidStr);
            
            serializedData = data[guid];
            
            if (serializedData.isPlaying) {
                
                FMOD_MV.ResetEventParameters(type, guid);
                var event = FMOD_MV.PlayEvent(type, guid);
                
                if (serializedData.time > 0)
                    FMOD_MV.SetEventTimelinePosition(event, serializedData.time);
            }
            
            for (var parameter in serializedData.parameters) {
                
                parameterData = serializedData.parameters[parameter];
                FMOD_MV.SetEventParameter(type, guid, parameter, parameterData[0], true);
            }
        }
    }
    
    FMOD_MV.LoadSnapshots = function(snapshots) {
        
        if (!snapshots)
            return;
        
        for (var guid in snapshots) {
            
            if (!(guid in FMOD_MV.Snapshots))
                continue;
            
            if (snapshots[guid])
                FMOD_MV.Snapshots[guid].start();
        }
    }
    
    var Game_System_onBeforeSave = Game_System.prototype.onBeforeSave;
    Game_System.prototype.onBeforeSave = function() {
        
        Game_System_onBeforeSave.call(this);
        
        this._fmodData = FMOD_MV.SaveAll();
    }
    
    var Game_System_onAfterLoad = Game_System.prototype.onAfterLoad;
    Game_System.prototype.onAfterLoad = function() {
        
        Game_System_onAfterLoad.call(this);
        
        FMOD_MV.LoadAll(this._fmodData);
    }
    
    function Speaker(body, serializedData) {
        
        this._disposed = false;
        this._bindedEvents = {}
        this._body = body;
        
        if (!serializedData) {
            
            this._parameters = {}
            this._attribute = FMOD_MV.Create3DAttributes(body.x, -body.y);
            
        } else {
            
            this._parameters = serializedData._parameters || {}
            this._attribute = serializedData._attribute || FMOD_MV.Create3DAttributes(body.x, -body.y);
        }
    }
    
    Speaker.prototype.isDisposed = function() {
        return this._disposed;
    }
    
    Speaker.prototype.attribute = function() {
        return this._attribute;
    }
    
    Speaker.prototype.bindedEvents = function() {
        return this._bindedEvents;
    }
    
    Speaker.prototype.bindEvent = function(event, guid) {
        
        if (this.isDisposed())
            return;
        
        if (!guid) {
            
            var ptr_desc = {}
            FMOD_MV.Assert(event.getDescription(ptr_desc));
            
            var ptr_id = {}
            FMOD_MV.Assert(ptr_desc.val.getID(ptr_id));
            
            //use this instead new Guid(ptr_id.val).toString(); cause avoiding boxing / unboxing.
            guid = Guid.prototype.toString.call(ptr_id.val);
        }
            
        if (!(guid in this._bindedEvents))
            this._bindedEvents[guid] = [];
        
        this._bindedEvents[guid].push(event);
    }
    
    Speaker.prototype.setParameter = function(guid, name, value, immediateSet) {
        
        if (!guid || !(guid instanceof Guid))
            return;
        
        var parameters = this._parameters;
        
        if (!(guid in parameters))
            parameters[guid] = {}
        
        var parameter = parameters[guid];
        
        if (!(name in parameter))
            parameter[name] = [0, false];
        
        var paramValue = parameter[name];
        
        paramValue[0] = value || 0;
        paramValue[1] = immediateSet === true;
    }
    
    Speaker.prototype.clearParameter = function(guid) {
        
        if (!guid || !(guid instanceof Guid))
            return;
        
        var parameters = this._parameters;
        parameters[guid] = {}
    }
    
    Speaker.prototype.clearAllParameters = function() {
        
        this._parameters = {}
    }
    
    Speaker.prototype.stopEvent = function(immediateStop, specifiedGuid) {
        
        var bindedEvents = this.bindedEvents();
        
        if (!(specifiedGuid instanceof Guid)) {
            
            for (var guid in bindedEvents) {
                
                var count = bindedEvents[guid].length - 1;
                
                while (count >= 0) {
                    
                    bindedEvents[guid][count].stop(immediateStop ? FMOD.STUDIO_STOP_IMMEDIATE : FMOD.STUDIO_STOP_ALLOWFADEOUT);
                    count--;
                }
            }
            
        } else if (specifiedGuid in bindedEvents) {
            
            var targetGuid = bindedEvents[specifiedGuid];
            
            var count = targetGuid.length - 1;
            
            while (count >= 0) {
                
                targetGuid[count].stop(immediateStop ? FMOD.STUDIO_STOP_IMMEDIATE : FMOD.STUDIO_STOP_ALLOWFADEOUT);
                count--;
            }
        }
    }
    
    Speaker.prototype.isBinded = function(guid) {
        
        return guid in this.bindedEvents() && this.bindedEvents()[guid].length > 0;
    }
    
    Speaker.prototype.update = function() {
        
        if (this.isDisposed())
            return;
        
        this.validateUpdate();
        this.update3DAttributes();
        this.updateParameters();
    }
    
    Speaker.prototype.validateUpdate = function() {
        
        if (this.isDisposed())
            return;
        
        if (this._body instanceof Game_Event && this._body._mapId !== $gameMap.mapId()) {
            
            this.dispose();
            return;
        }
        
        var bindedEvents = this.bindedEvents();
        
        for (var guid in bindedEvents) {
            
            var count = bindedEvents[guid].length - 1;
            
            while (count >= 0) {
                
                if (!FMOD_MV.EventIsPlaying(bindedEvents[guid][count]))
                    bindedEvents[guid].splice(count, 1);
                
                count--;
            }
        }
    }
    
    Speaker.prototype.update3DAttributes = function() {
        
        if (this.isDisposed())
            return;
        
        var x = this._body._realX || this._body.x;
        var y = this._body._realY || this._body.y;
        
        FMOD_MV.Vector(x + 0.5, -(y + 0.5), 0, this._attribute.position);
        
        var bindedEvents = this.bindedEvents();
        
        for (var guid in bindedEvents) {
            
            var count = bindedEvents[guid].length - 1;
            
            while (count >= 0) {
                
                bindedEvents[guid][count].set3DAttributes(this._attribute);
                count--;
            }
        }
        //
        ////TODO : Need implementation for velocity change.
        //FMOD_MV.Vector(0, 0, 0, attribute.velocity);
        ////if (!this.isMoving())
        ////    FMOD_MV.Vector(0, 0, 0, attribute.velocity);
        ////
        ////else
        ////    FMOD_MV.Vector(0, 0, 0, attribute.velocity);
    }
    
    Speaker.prototype.updateParameters = function() {
        
        if (this.isDisposed())
            return;
        
        var parameters, bindedEvents;
        
        for (var guid in this._parameters) {
            
            parameters = this._parameters[guid];
            
            if (!(guid in this._bindedEvents))
                continue;
            
            bindedEvents = this._bindedEvents[guid];
            
            for (var event of bindedEvents)
                FMOD_MV.ApplyParametersToEvent(event, parameters);
        }
    }
    
    Speaker.prototype.dispose = function() {
        
        if (this._disposed)
            return;
        
        this.stopEvent();
        
        this._bindedEvents = null;
        this._parameters = null;
        this._body = null;
        this._attribute = null;
        
        this._disposed = true;
    }
    
    var Game_Map_setupEvents = Game_Map.prototype.setupEvents;
    Game_Map.prototype.setupEvents = function() {
        
        for (var event of this._events) {
            
            if (event && event.speaker())
                event.speaker().dispose();
        }
        
        Game_Map_setupEvents.call(this);
    }
    
    Game_Interpreter.prototype.event = function() {
        
        if (!this.isOnCurrentMap())
            return null;
        
        return $gameMap.event(this.eventId());
    }
    
    Game_Interpreter.prototype.speaker = function() {
        
        if (!this.isOnCurrentMap())
            return null;
        
        var event = $gameMap.event(this.eventId());
        
        if (!event)
            return null;
        
        return event.speaker();
    }
    
    var AudioManager_fadeOutBgm = AudioManager.fadeOutBgm;
    AudioManager.fadeOutBgm = function(duration) {
        
        AudioManager_fadeOutBgm.call(this, duration);
        FMOD_MV.StopBGM();
    }

    var AudioManager_fadeOutBgs = AudioManager.fadeOutBgs;
    AudioManager.fadeOutBgs = function(duration) {
        
        AudioManager_fadeOutBgs.call(this, duration);
        FMOD_MV.StopBGS();
    }
    
    var AudioManager_stopBgm = AudioManager.stopBgm;
    AudioManager.stopBgm = function() {
        
        AudioManager_stopBgm.call(this);
        FMOD_MV.StopBGM(true);
    }

    var AudioManager_stopBgs = AudioManager.stopBgs;
    AudioManager.stopBgs = function() {
        
        AudioManager_stopBgs.call(this);
        FMOD_MV.StopBGS(true);
    }
    
    var AudioManager_stopMe = AudioManager.stopMe;
    AudioManager.stopMe = function() {
        
        AudioManager_stopMe.call(this);
        FMOD_MV.StopME(true);
    }
    
    var AudioManager_stopSe = AudioManager.stopSe;
    AudioManager.stopSe = function() {
        
        AudioManager_stopSe.call(this);
        FMOD_MV.StopSE(true);
    }
    
    //TODO : Need to implement handle battle phase
    //var BattleManager_saveBgmAndBgs = BattleManager.saveBgmAndBgs;
    //BattleManager.saveBgmAndBgs = function() {
    //    
    //    BattleManager_saveBgmAndBgs.call(this);
    //    this._fmodData = FMOD_MV.SaveAll();
    //}
    //
    //BattleManager.replayBgmAndBgs = function() {
    //    if (this._mapBgm) {
    //        AudioManager.replayBgm(this._mapBgm);
    //    } else {
    //        AudioManager.stopBgm();
    //    }
    //    if (this._mapBgs) {
    //        AudioManager.replayBgs(this._mapBgs);
    //    }
    //}

    //var BattleManager_playBattleBgm = BattleManager.playBattleBgm;
    BattleManager.playBattleBgm = function() {
        
        if (!FMOD_MV.SystemBGM_Battle)
            AudioManager.playBgm($gameSystem.battleBgm());
        
        else
            FMOD_MV.PlayBGM(FMOD_MV.SystemBGM_Battle);
        
        AudioManager.stopBgs();
    }
    
    var BattleManager_playVictoryMe = BattleManager.playVictoryMe;
    BattleManager.playVictoryMe = function() {
        
        if (!FMOD_MV.SystemME_Victory)
            BattleManager_playVictoryMe.call(this);
        
        else
            FMOD_MV.PlayME(FMOD_MV.SystemME_Victory);
    }
    
    var BattleManager_playDefeatMe = BattleManager.playDefeatMe;
    BattleManager.playDefeatMe = function() {
        
        if (!FMOD_MV.SystemME_Defeat)
            BattleManager_playDefeatMe.call(this);
        
        else
            FMOD_MV.PlayME(FMOD_MV.SystemME_Defeat);
    }
    
    var SoundManager_playCursor = SoundManager.playCursor;
    SoundManager.playCursor = function() {
        
        if (!FMOD_MV.SystemSE_Cursor)
            SoundManager_playCursor.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Cursor);
    }
    
    var SoundManager_playOk = SoundManager.playOk;
    SoundManager.playOk = function() {
        
        if (!FMOD_MV.SystemSE_Ok)
            SoundManager_playOk.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Ok);
    }
    
    var SoundManager_playCancel = SoundManager.playCancel;
    SoundManager.playCancel = function() {
        
        if (!FMOD_MV.SystemSE_Cancel)
            SoundManager_playCancel.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Cancel);
    }
    
    var SoundManager_playBuzzer = SoundManager.playBuzzer;
    SoundManager.playBuzzer = function() {
        
        if (!FMOD_MV.SystemSE_Buzzer)
            SoundManager_playBuzzer.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Buzzer);
    }
    
    var SoundManager_playEquip = SoundManager.playEquip;
    SoundManager.playEquip = function() {
        
        if (!FMOD_MV.SystemSE_Equip)
            SoundManager_playEquip.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Equip);
    }
    
    var SoundManager_playSave = SoundManager.playSave;
    SoundManager.playSave = function() {
        
        if (!FMOD_MV.SystemSE_Save)
            SoundManager_playSave.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Save);
    }
    
    var SoundManager_playLoad = SoundManager.playLoad;
    SoundManager.playLoad = function() {
        
        if (!FMOD_MV.SystemSE_Load)
            SoundManager_playLoad.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Load);
    }
    
    var SoundManager_playBattleStart = SoundManager.playBattleStart;
    SoundManager.playBattleStart = function() {
        
        if (!FMOD_MV.SystemSE_BattleStart)
            SoundManager_playBattleStart.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_BattleStart);
    }
    
    var SoundManager_playEscape = SoundManager.playEscape;
    SoundManager.playEscape = function() {
        
        if (!FMOD_MV.SystemSE_Escape)
            SoundManager_playEscape.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Escape);
    }
    
    var SoundManager_playEnemyAttack = SoundManager.playEnemyAttack;
    SoundManager.playEnemyAttack = function() {
        
        if (!FMOD_MV.SystemSE_EnemyAttack)
            SoundManager_playEnemyAttack.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_EnemyAttack);
    }
    
    var SoundManager_playEnemyDamage = SoundManager.playEnemyDamage;
    SoundManager.playEnemyDamage = function() {
        
        if (!FMOD_MV.SystemSE_EnemyDamage)
            SoundManager_playEnemyDamage.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_EnemyDamage);
    }
    
    var SoundManager_playEnemyCollapse = SoundManager.playEnemyCollapse;
    SoundManager.playEnemyCollapse = function() {
        
        if (!FMOD_MV.SystemSE_EnemyCollapse)
            SoundManager_playEnemyCollapse.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_EnemyCollapse);
    }
    
    var SoundManager_playBossCollapse1 = SoundManager.playBossCollapse1;
    SoundManager.playBossCollapse1 = function() {
        
        if (!FMOD_MV.SystemSE_BossCollapse1)
            SoundManager_playBossCollapse1.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_BossCollapse1);
    }
    
    var SoundManager_playBossCollapse2 = SoundManager.playBossCollapse2;
    SoundManager.playBossCollapse2 = function() {
        
        if (!FMOD_MV.SystemSE_BossCollapse2)
            SoundManager_playBossCollapse2.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_BossCollapse2);
    }
    
    var SoundManager_playActorDamage = SoundManager.playActorDamage;
    SoundManager.playActorDamage = function() {
        
        if (!FMOD_MV.SystemSE_ActorDamage)
            SoundManager_playActorDamage.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_ActorDamage);
    }
    
    var SoundManager_playActorCollapse = SoundManager.playActorCollapse;
    SoundManager.playActorCollapse = function() {
        
        if (!FMOD_MV.SystemSE_ActorCollapse)
            SoundManager_playActorCollapse.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_ActorCollapse);
    }
    
    var SoundManager_playRecovery = SoundManager.playRecovery;
    SoundManager.playRecovery = function() {
        
        if (!FMOD_MV.SystemSE_Recovery)
            SoundManager_playRecovery.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Recovery);
    }
    
    var SoundManager_playMiss = SoundManager.playMiss;
    SoundManager.playMiss = function() {
        
        if (!FMOD_MV.SystemSE_Miss)
            SoundManager_playMiss.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Miss);
    }
    
    var SoundManager_playEvasion = SoundManager.playEvasion;
    SoundManager.playEvasion = function() {
        
        if (!FMOD_MV.SystemSE_Evasion)
            SoundManager_playEvasion.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Evasion);
    }
    
    var SoundManager_playMagicEvasion = SoundManager.playMagicEvasion;
    SoundManager.playMagicEvasion = function() {
        
        if (!FMOD_MV.SystemSE_MagicEvasion)
            SoundManager_playMagicEvasion.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_MagicEvasion);
    }
    
    var SoundManager_playReflection = SoundManager.playReflection;
    SoundManager.playReflection = function() {
        
        if (!FMOD_MV.SystemSE_Reflection)
            SoundManager_playReflection.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Reflection);
    }
    
    var SoundManager_playShop = SoundManager.playShop;
    SoundManager.playShop = function() {
        
        if (!FMOD_MV.SystemSE_Shop)
            SoundManager_playShop.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_Shop);
    }
    
    var SoundManager_playUseItem = SoundManager.playUseItem;
    SoundManager.playUseItem = function() {
        
        if (!FMOD_MV.SystemSE_UseItem)
            SoundManager_playUseItem.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_UseItem);
    }
    
    var SoundManager_playUseSkill = SoundManager.playUseSkill;
    SoundManager.playUseSkill = function() {
        
        if (!FMOD_MV.SystemSE_UseSkill)
            SoundManager_playUseSkill.call(this);
        
        else
            FMOD_MV.PlaySE(FMOD_MV.SystemSE_UseSkill);
    }
    
    FMOD_MV.SetBGMVolume = function(volume) {
        
        if (!FMOD_MV || typeof FMOD_MV.VCA_BGM !== 'object' || FMOD_MV.VCA_BGM === null || FMOD_MV.VCA_BGM instanceof Guid)
            return;
        
        FMOD_MV.VCA_BGM.setVolume(volume / 100);
    }
    
    FMOD_MV.SetBGSVolume = function(volume) {
        
        if (!FMOD_MV || typeof FMOD_MV.VCA_BGS !== 'object' || FMOD_MV.VCA_BGS === null || FMOD_MV.VCA_BGS instanceof Guid)
            return;
        
        FMOD_MV.VCA_BGS.setVolume(volume / 100);
    }
    
    FMOD_MV.SetMEVolume = function(volume) {
        
        if (!FMOD_MV || typeof FMOD_MV.VCA_ME !== 'object' || FMOD_MV.VCA_ME === null || FMOD_MV.VCA_ME instanceof Guid)
            return;
        
        FMOD_MV.VCA_ME.setVolume(volume / 100);
    }
    
    FMOD_MV.SetSEVolume = function(volume) {
        
        if (!FMOD_MV || typeof FMOD_MV.VCA_SE !== 'object' || FMOD_MV.VCA_SE === null || FMOD_MV.VCA_SE instanceof Guid)
            return;
        
        FMOD_MV.VCA_SE.setVolume(volume / 100);
    }
    
    Object.defineProperty(AudioManager, 'bgmVolume', {
        get: function() {
            return this._bgmVolume;
        },
        set: function(value) {
            this._bgmVolume = value;
            this.updateBgmParameters(this._currentBgm);
            FMOD_MV.SetBGMVolume(value);
        },
        configurable: true
    });

    Object.defineProperty(AudioManager, 'bgsVolume', {
        get: function() {
            return this._bgsVolume;
        },
        set: function(value) {
            this._bgsVolume = value;
            this.updateBgsParameters(this._currentBgs);
            FMOD_MV.SetBGSVolume(value);
        },
        configurable: true
    });

    Object.defineProperty(AudioManager, 'meVolume', {
        get: function() {
            return this._meVolume;
        },
        set: function(value) {
            this._meVolume = value;
            this.updateMeParameters(this._currentMe);
            FMOD_MV.SetMEVolume(value);
        },
        configurable: true
    });

    Object.defineProperty(AudioManager, 'seVolume', {
        get: function() {
            return this._seVolume;
        },
        set: function(value) {
            this._seVolume = value;
            FMOD_MV.SetSEVolume(value);
        },
        configurable: true
    });
    
    var Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
    Game_CharacterBase.prototype.initMembers = function() {
        
        Game_CharacterBase_initMembers.call(this);
        this._speaker = new Speaker(this);
    }
    
    Game_CharacterBase.prototype.speaker = function() {
        
        if (!(this._speaker instanceof Speaker))
            this._speaker = new Speaker(this, this._speaker);
        
        return this._speaker;
    }
    
    var Game_CharacterBase_update = Game_CharacterBase.prototype.update;
    Game_CharacterBase.prototype.update = function() {
        
        if (!this.speaker().isDisposed())
            this.speaker().update();
        
        Game_CharacterBase_update.call(this);
    }
    
    var Game_Player_initMembers = Game_Player.prototype.initMembers;
    Game_Player.prototype.initMembers = function() {
        
        Game_Player_initMembers.call(this);
    }
    
    var Game_Map_update = Game_Map.prototype.update;
    Game_Map.prototype.update = function(sceneActive) {
        
        Game_Map_update.call(this, sceneActive);
        this.updateListenerAttributes();
    }
    
    Game_Map.prototype.updateListenerAttributes = function() {
        
        var normalizedCenterX = this.displayX() + (Graphics.width / $gameMap.tileWidth()) / 2;
        var normalizedCenterY = this.displayY() + (Graphics.height / $gameMap.tileHeight()) / 2;
        normalizedCenterY = -normalizedCenterY;
        
        FMOD_MV.SetListenerPosition(FMOD_MV.LISTENER_CAMERA, normalizedCenterX, normalizedCenterY, -10);
    }
    
    if (!FMOD_MV.GUIDsPath) {
        
        throw new Error(`[FMOD_MV] Please specify GUID script path in plugins option.`);
        
    } else {
        
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = FMOD_MV.GUIDsPath;
        script.async = false;
        script.onerror = PluginManager.onError.bind(PluginManager);
        document.body.appendChild(script);
    }
    
    FMOD_MV.Bootloader = function() {
        
        if (FMOD_MV.GUIDsPath && typeof FMOD_FSPRO === 'undefined') {
            
            setTimeout(FMOD_MV.Bootloader, 100);
            return;
        }
        
        if (typeof FMOD_FSPRO === 'object')
            FMOD_MV.InitializePredefinedEvents();
        
        //Bootloader
        FMOD = {
            preRun: FMOD_MV.OnPreRun,
            onRuntimeInitialized: FMOD_MV.Initialize,
            TOTAL_MEMORY: FMOD_MV.MaximumHeapSize
        }
        
        FMODModule(FMOD);
    }
    
    FMOD_MV.InitializePredefinedEvents = function() {
        
        FMOD_MV.InitializeVCAs();
        FMOD_MV.InitializeSystemBGM();
        FMOD_MV.InitializeSystemME();
        FMOD_MV.InitializeSystemSE();
        
        if (FMOD_MV.OnGUIDsLoad)
            FMOD_MV.OnGUIDsLoad();
    }
    
    FMOD_MV.InitializeVCAs = function() {
        
        if (typeof FMOD_FSPRO.VCA === 'undefined') {
            
            FMOD_MV.Warn("No VCA found in GUID, you must use VCA for control volume feature.\nSee FMOD docs : https://www.fmod.com/docs/2.01/studio/mixing.html#vcas ");
            return;
        }
        
        //BGM
        FMOD_MV.Log(`Looking for VCA '${FMOD_MV.VCA_BGM}' used to BGM...`);
        if (!FMOD_MV.VCA_BGM) {
            
            if (FMOD_FSPRO.VCA.BGM) {
                
                FMOD_MV.VCA_BGM = FMOD_FSPRO.VCA.BGM;
                FMOD_MV.Log("VCA for BGM found.");
            }
            
            else
                FMOD_MV.Warn("BGM VCA was not specified, so FMOD MV tried to find BGM, but it's not exist in the VCA.");
        }
        
        else if (FMOD_MV.VCA_BGM in FMOD_FSPRO.VCA) {
            
            FMOD_MV.Log("Manually setted VCA for BGM found.");
            FMOD_MV.VCA_BGM = FMOD_FSPRO.VCA[FMOD_MV.VCA_BGM];
        }
        
        //BGS
        FMOD_MV.Log(`Looking for VCA '${FMOD_MV.VCA_BGS}' used to BGS...`);
        if (!FMOD_MV.VCA_BGS) {
            
            if (FMOD_FSPRO.VCA.BGS) {
                
                FMOD_MV.VCA_BGS = FMOD_FSPRO.VCA.BGS;
                FMOD_MV.Log("VCA for BGS found.");
            }
            
            else
                FMOD_MV.Warn("BGS VCA was not specified, so FMOD MV tried to find BGS, but it's not exist in the VCA.");
        }
        
        else if (FMOD_MV.VCA_BGS in FMOD_FSPRO.VCA) {
            
            FMOD_MV.Log("Manually setted VCA for BGS found.");
            FMOD_MV.VCA_BGS = FMOD_FSPRO.VCA[FMOD_MV.VCA_BGS];
        }
        
        //ME
        FMOD_MV.Log(`Looking for VCA '${FMOD_MV.VCA_ME}' used to ME...`);
        if (!FMOD_MV.VCA_ME) {
            
            if (FMOD_FSPRO.VCA.ME) {
                
                FMOD_MV.VCA_ME = FMOD_FSPRO.VCA.ME;
                FMOD_MV.Log("VCA for ME found.");
            }
            
            else
                FMOD_MV.Warn("ME VCA was not specified, so FMOD MV tried to find ME, but it's not exist in the VCA.");
        }
        
        else if (FMOD_MV.VCA_ME in FMOD_FSPRO.VCA) {
            
            FMOD_MV.Log("Manually setted VCA for ME found.");
            FMOD_MV.VCA_ME = FMOD_FSPRO.VCA[FMOD_MV.VCA_ME];
        }
        
        //SE
        FMOD_MV.Log(`Looking for VCA '${FMOD_MV.VCA_SE}' used to SE...`);
        if (!FMOD_MV.VCA_SE) {
            
            if (FMOD_FSPRO.VCA.SE) {
                
                FMOD_MV.VCA_SE = FMOD_FSPRO.VCA.SE;
                FMOD_MV.Log("VCA for SE found.");
            }
            
            else
                FMOD_MV.Warn("SE VCA was not specified, so FMOD MV tried to find SE, but it's not exist in the VCA.");
        }
        
        else if (FMOD_MV.VCA_SE in FMOD_FSPRO.VCA) {
            
            FMOD_MV.Log("Manually setted VCA for SE found.");
            FMOD_MV.VCA_SE = FMOD_FSPRO.VCA[FMOD_MV.VCA_SE];
        }
    }
    
    FMOD_MV.InitializeSystemBGM = function() {
        
        FMOD_MV.SystemBGM_Title   = FMOD_FSPRO.Event[FMOD_MV.SystemBGM_Title]   || null;
        FMOD_MV.SystemBGM_Battle  = FMOD_FSPRO.Event[FMOD_MV.SystemBGM_Battle]  || null;
        FMOD_MV.SystemBGM_Boat    = FMOD_FSPRO.Event[FMOD_MV.SystemBGM_Boat]    || null;
        FMOD_MV.SystemBGM_Ship    = FMOD_FSPRO.Event[FMOD_MV.SystemBGM_Ship]    || null;
        FMOD_MV.SystemBGM_Airship = FMOD_FSPRO.Event[FMOD_MV.SystemBGM_Airship] || null;
    }
    
    FMOD_MV.InitializeSystemME = function() {
        
        FMOD_MV.SystemME_Victory  = FMOD_FSPRO.Event[FMOD_MV.SystemME_Victory]  || null;
        FMOD_MV.SystemME_Defeat   = FMOD_FSPRO.Event[FMOD_MV.SystemME_Defeat]   || null;
        FMOD_MV.SystemME_GameOver = FMOD_FSPRO.Event[FMOD_MV.SystemME_GameOver] || null;
    }
    
    FMOD_MV.InitializeSystemSE = function() {
        
        FMOD_MV.SystemSE_Cursor        = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Cursor]        || null;
        FMOD_MV.SystemSE_Ok            = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Ok]            || null;
        FMOD_MV.SystemSE_Cancel        = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Cancel]        || null;
        FMOD_MV.SystemSE_Buzzer        = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Buzzer]        || null;
        FMOD_MV.SystemSE_Equip         = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Equip]         || null;
        FMOD_MV.SystemSE_Save          = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Save]          || null;
        FMOD_MV.SystemSE_Load          = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Load]          || null;
        FMOD_MV.SystemSE_BattleStart   = FMOD_FSPRO.Event[FMOD_MV.SystemSE_BattleStart]   || null;
        FMOD_MV.SystemSE_Escape        = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Escape]        || null;
        FMOD_MV.SystemSE_EnemyAttack   = FMOD_FSPRO.Event[FMOD_MV.SystemSE_EnemyAttack]   || null;
        FMOD_MV.SystemSE_EnemyDamage   = FMOD_FSPRO.Event[FMOD_MV.SystemSE_EnemyDamage]   || null;
        FMOD_MV.SystemSE_EnemyCollapse = FMOD_FSPRO.Event[FMOD_MV.SystemSE_EnemyCollapse] || null;
        FMOD_MV.SystemSE_BossCollapse1 = FMOD_FSPRO.Event[FMOD_MV.SystemSE_BossCollapse1] || null;
        FMOD_MV.SystemSE_BossCollapse2 = FMOD_FSPRO.Event[FMOD_MV.SystemSE_BossCollapse2] || null;
        FMOD_MV.SystemSE_ActorDamage   = FMOD_FSPRO.Event[FMOD_MV.SystemSE_ActorDamage]   || null;
        FMOD_MV.SystemSE_ActorCollapse = FMOD_FSPRO.Event[FMOD_MV.SystemSE_ActorCollapse] || null;
        FMOD_MV.SystemSE_Recovery      = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Recovery]      || null;
        FMOD_MV.SystemSE_Miss          = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Miss]          || null;
        FMOD_MV.SystemSE_Evasion       = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Evasion]       || null;
        FMOD_MV.SystemSE_MagicEvasion  = FMOD_FSPRO.Event[FMOD_MV.SystemSE_MagicEvasion]  || null;
        FMOD_MV.SystemSE_Reflection    = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Reflection]    || null;
        FMOD_MV.SystemSE_Shop          = FMOD_FSPRO.Event[FMOD_MV.SystemSE_Shop]          || null;
        FMOD_MV.SystemSE_UseItem       = FMOD_FSPRO.Event[FMOD_MV.SystemSE_UseItem]       || null;
        FMOD_MV.SystemSE_UseSkill      = FMOD_FSPRO.Event[FMOD_MV.SystemSE_UseSkill]      || null;
    }
    
    setTimeout(FMOD_MV.Bootloader, 100);
    
})();