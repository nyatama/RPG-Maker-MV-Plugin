//=============================================================================
// NYA_MillSecTimer.js
//=============================================================================
 
/*:
 * @plugindesc v1.3.0 ミリ秒に変更するタイマー関係のプラグイン
 * @author にゃたま
 *
 * @param FontFace
 * @desc タイマー文字列のフォント名です(指定する場合のみ)
 * fontsフォルダに入れて下さい。「.ttf」以外のフォント名のみ
 *
 * @param FontSize
 * @desc フォントサイズ
 * Default: 52
 * @default 52
 *
 * @param FontColor
 * @desc フォント色 Default: #ffffff
 * 例（黒:#000000 白:#ffffff 赤:#ff0000）
 * @default  #ffffff
 *
 * @param Width
 * @desc 横幅
 * Default: 200
 * @default 200
 *
 * @param Height
 * @desc 縦幅
 * Default: 68
 * @default 68
 *
 * @param Align
 * @desc タイマーの整列設定 Default: center
 * 例（左揃え:left 中央揃え:center 右揃え:right）
 * @default center
 *
 * @param Position X
 * @desc X位置
 * Default: Graphics.width - this.bitmap.width - 10
 * @default Graphics.width - this.bitmap.width - 10
 *
 * @param Position Y
 * @desc Y位置
 * Default: 0
 * @default 0
 *
 * @param --デバッグ用--
 *
 * @param BackColor
 * @desc 背景色設定（主にデバッグ用）Default: <空欄>
 * 例> 黒:#000000 白:#ffffff 赤:#ff0000 or rgb(255, 0, 0)
 * @default 
 *
 * @param TimerTitle BackColor
 * @desc タイマータイトル背景色設定（主にデバッグ用）
 * 例> 黒:#000000 白:#ffffff 赤:#ff0000 or rgb(255, 0, 0)
 * Default: <空欄>
 * @default 
 * 
 * @param --タイマータイトル設定--
 *
 * @param TimerTitle Enable
 * @desc タイマーにタイトルを設定する
 * Default: false
 * @type boolean
 * @default false
 *
 * @param TimerTitle Name
 * @desc タイマータイトルのタイトル名
 * Default: TIME
 * @default  TIME
 *
 * @param TimerTitle FontFace
 * @desc タイマータイトル文字列のフォント名です(指定する場合のみ)
 * fontsフォルダに入れて下さい。「.ttf」以外のフォント名のみ
 *
 * @param TimerTitle FontSize
 * @desc タイマータイトルのフォントサイズ
 * Default: 25
 * @default 25
 *
 * @param TimerTitle FontColor
 * @desc タイマータイトルの文字色 Default: #ffffff
 * 例（黒:#000000 白:#ffffff 赤:#ff0000）
 * @default  #ffffff
 *
 * @param TimerTitle Width
 * @desc タイマータイトルの横幅
 * Default: 200
 * @default 200
 *
 * @param TimerTitle Height
 * @desc タイマータイトルの縦幅
 * Default: 30
 * @default 30
 *
 * @param TimerTitle Align
 * @desc タイマータイトルの整列設定 Default: left
 * 例（左揃え:left 中央揃え:center 右揃え:right）
 * @default left
 *
 * @param --開始アニメーション設定--
 *
 * @param TimerStartAnime Enable
 * @desc タイマーのスタート位置を決めてアニメーションする
 * Default: false
 * @type boolean
 * @default false
 *
 * @param StartWaitFrame
 * @desc タイマー開始位置で維持させるフレーム数
 * Default: 180
 * @default 180
 *
 * @param StartToEndFrame
 * @desc タイマー開始位置〜通常位置にアニメーションさせるフレーム数
 * Default: 180
 * @default 180
 *
 * @param StartPosition X
 * @desc タイマーのスタートするX座標
 * Default: Graphics.width / 2 - this.bitmap.width / 2
 * @default Graphics.width / 2 - this.bitmap.width / 2
 *
 * @param StartPosition Y
 * @desc タイマーのスタートするY座標
 * Default: Graphics.height / 2 - this.bitmap.height / 2
 * @default Graphics.height / 2 - this.bitmap.height / 2
 *
 *
 * @help
 * 概要:
 * ツクール標準のカウントダウンタイマーの表示をミリ秒表示に変えるプラグインです。
 *
 *
 * プラグインコマンド:
 *   NYA_MillSecTimer add 10          # タイマーを指定秒数増加させる
 *   NYA_MillSecTimer sub 10          # タイマーを指定秒数減少させる
 *   NYA_MillSecTimer pause           # タイマーを一時停止させる
 *   NYA_MillSecTimer resume          # タイマーを再開させる
 *   NYA_MillSecTimer posSet 340 250  # タイマーの表示位置を変更する(x位置,y位置)
 *   NYA_MillSecTimer posSet          # 引数がないとリセットになります
 *   NYA_MillSecTimer color #ffffff   # フォントの色を設定します
 *   NYA_MillSecTimer colorReset      # フォントの色をリセットします
 *   NYA_MillSecTimer posReset        # タイマーの位置をリセットします
 *   NYA_MillSecTimer hide            # タイマーを非表示にします
 *   NYA_MillSecTimer show            # タイマーを表示します
 * 
 * ※このプラグインでは、以下を書き換えていますので、本体アップデートや競合に注意してください。
 *    Sprite_Timer.prototype.createBitmap
 *    Sprite_Timer.prototype.updateBitmap
 *    Sprite_Timer.prototype.updatePosition
 *    Sprite_Timer.prototype.timerText
 *    Sprite_Timer.prototype.redraw
 *    Game_Timer.prototype.start
 *    Game_Timer.prototype.update
 *    Game_Interpreter.prototype.command111
 *    
 *
 * プラグインコマンド:
 *   ありません
 * 
 * 
 * ライセンス:
 * このプラグインは以下のライセンスのもと、使用することができます。 
 *   Copyright (c) 2016 nyatama
 *  This software is released under the MIT License.
 *  http://opensource.org/licenses/mit-license.php
 */
 
(function() {
    var getParamString = function(paramNames) {
        var value = getParamOther(paramNames);
        return value == null ? '' : value;
    };
    
    var getParamNumber = function(paramNames, min, max) {
        var value = getParamOther(paramNames);
        if (arguments.length < 2) min = -Infinity;
        if (arguments.length < 3) max = Infinity;
        return (parseInt(value, 10) || 0).clamp(min, max);
    };
    
     var getParamOther = function(paramNames) {
        if (!Array.isArray(paramNames)) paramNames = [paramNames];
        for (var i = 0; i < paramNames.length; i++) {
            var name = PluginManager.parameters(pluginName)[paramNames[i]];
            if (name) return name;
        }
        return null;
    };
    
    var pluginName = 'NYA_MillSecTimer';
    var parameters = PluginManager.parameters(pluginName);
    var fontFace = getParamString(['FontFace']);
    var fontColor = String(parameters['FontColor'] || '#ffffff');
    var fontSize = Number(parameters['FontSize'] || 52);
    var timerWidth = Number(parameters['Width'] || 200);
    var timerHeight = Number(parameters['Height'] || 68);
    var timerAlign = String(parameters['Align'] || 'center');
    var posX = String(parameters['Position X'] || 'Graphics.width - this.bitmap.width - 10');
    var posY = String(parameters['Position Y'] || '0');
    
    var backColor = String(parameters['BackColor'] || '');
    var timerTitle_BackColor = String(parameters['TimerTitle BackColor'] || '');
    
    var timerTitle_Enable = eval(parameters['TimerTitle Enable']);
    var timerTitle_Name = String(parameters['TimerTitle Name'] || 'TIME');
    var timerTitle_FontFace = getParamString(['TimerTitle FontFace']);
    var timerTitle_FontSize = Number(parameters['TimerTitle FontSize'] || 25);
    var timerTitle_FontColor = String(parameters['TimerTitle FontColor'] || '#ffffff');
    var timerTitle_Width = Number(parameters['TimerTitle Width'] || 200);
    var timerTitle_Height = Number(parameters['TimerTitle Height'] || 30);
    var timerTitle_Align = String(parameters['TimerTitle Align'] || 'left');
    
    var timerStartAnime = eval(parameters['TimerStartAnime Enable']);
    var timerStartAnime_StartWaitFrame = Number(parameters['StartWaitFrame'] || 180);
    var timerStartAnime_StartToEndFrame = Number(parameters['StartToEndFrame'] || 180);
    var timerStartAnime_StartPosX = String(parameters['StartPosition X'] || 'Graphics.width / 2 - this.bitmap.width / 2');
    var timerStartAnime_StartPosY = String(parameters['StartPosition Y'] || 'Graphics.height / 2 - this.bitmap.height / 2');
    
    var posTimerX = null;
    var posTimerY = null;
    var timerColor = fontColor;
    var _hideTimer = false;
    var _timerPause = false;

    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'NYA_MillSecTimer') {

            switch (args[0]) {
            case 'add':
                $gameTimer.addFrames(eval(args[1]));
                break;
            case 'sub':
                $gameTimer.subFrames(eval(args[1]));
                break;
            case 'pause':
                $gameTimer.pause();
                break;
            case 'resume':
                $gameTimer.resume();
                break;
            case 'posSet':
                posTimerX = args[1] != null ? Number(args[1]) : posX;
                posTimerY = args[2] != null ? Number(args[2]) : posY;
                break;
            case 'posReset':
                posTimerX = posX;
                posTimerY = posY;
                break;
            case 'colorSet':
                timerColor = args[1];
                break;
            case 'colorReset':
                timerColor = fontColor;
                break;
            case 'hide':
                _hideTimer = true;
                break;
            case 'show':
                _hideTimer = false;
                break;
            }
        }
    };
    
    // _Sprite_Timer_initialize override
    var _Sprite_Timer_initialize = Sprite_Timer.prototype.initialize;
    Sprite_Timer.prototype.initialize = function() {
       _Sprite_Timer_initialize.call(this);
        //eval()でwidth、heightを処理できるのはspriteクラス内でのみ
        timerStartAnime_StartPosX = eval(timerStartAnime_StartPosX);
        timerStartAnime_StartPosY = eval(timerStartAnime_StartPosY);
        posX = eval(posX);
        posY = eval(posY);
    };
    
    // _Sprite_Timer_createBitmap override
    var _Sprite_Timer_createBitmap = Sprite_Timer.prototype.createBitmap;
    Sprite_Timer.prototype.createBitmap = function() {
        _Sprite_Timer_createBitmap.call(this);
        
        //タイマーテキスト
        if(timerTitle_Enable){
            this.bitmap = new Bitmap(timerWidth, timerHeight + timerTitle_Height);
        }else{
            this.bitmap = new Bitmap(timerWidth, timerHeight);
        }
        //this.bitmap.textColor = fontColor;
        //this.bitmap.fontSize = fontSize;
        if (fontFace) {
            Graphics.loadFont(fontFace, 'fonts/' + fontFace + '.ttf');
        }
        if (timerTitle_FontFace) {
            Graphics.loadFont(timerTitle_FontFace, 'fonts/' + timerTitle_FontFace + '.ttf');
        }
    };
    
    // _Sprite_Timer_updateBitmap override
    var _Sprite_Timer_updateBitmap = Sprite_Timer.prototype.updateBitmap;
    Sprite_Timer.prototype.updateBitmap = function() {
        _Sprite_Timer_updateBitmap.call(this);
        if (this._millseconds !== $gameTimer.millseconds()) {
            this._seconds = $gameTimer.seconds();
            this._millseconds = $gameTimer.millseconds();
            this.redraw();
        }
        if(_hideTimer){
            this.opacity = 0;
        }else{
            this.opacity = 255;
        }
        this.bitmap.textColor = timerColor;
    };
    
    // _Sprite_Timer_redraw override
    var _Sprite_Timer_redraw = Sprite_Timer.prototype.redraw;
    Sprite_Timer.prototype.redraw = function() {
        
        var text = this.timerText();
        var width = this.bitmap.width;
        var height = this.bitmap.height;
        this.bitmap.clear();
        
        //背景色設定
        if(backColor){
            if(timerTitle_Enable){
                this.bitmap.fillRect(0, timerTitle_Height, timerWidth, timerHeight, backColor);
            }else{
                this.bitmap.fillRect(0, 0, timerWidth, timerHeight, backColor);
            }
        }
        //タイマーテキスト設定
        this.bitmap.textColor = fontColor;
        this.bitmap.fontSize = fontSize;
        if (fontFace) {
            this.bitmap.fontFace = fontFace;
        }else{
            this.bitmap.fontFace = 'GameFont';
        }
        //タイマーテキスト画面出力
        if(timerTitle_Enable){
            this.bitmap.drawText(text, 0, timerTitle_Height, timerWidth, timerHeight, timerAlign);
        }else{
            this.bitmap.drawText(text, 0, 0, timerWidth, timerHeight, timerAlign);
        }
        
        if(timerTitle_Enable){
            //背景色設定
            if(timerTitle_BackColor){
                this.bitmap.fillRect(0, 0, timerTitle_Width, timerTitle_Height, timerTitle_BackColor);
            }
            //タイマータイトル設定
            this.bitmap.textColor = timerTitle_FontColor;
            this.bitmap.fontSize = timerTitle_FontSize;
            if (timerTitle_FontFace) {
                this.bitmap.fontFace = timerTitle_FontFace;
            }else{
                this.bitmap.fontFace = 'GameFont';
            }
            //タイマータイトル画面出力
            this.bitmap.drawText(timerTitle_Name, 0, 0, timerTitle_Width, timerTitle_Height, timerTitle_Align);
        }
    };
    
    // _Sprite_Timer_updatePosition override
    var _Sprite_Timer_updatePosition = Sprite_Timer.prototype.updatePosition;
    Sprite_Timer.prototype.updatePosition = function() {
        _Sprite_Timer_updatePosition.call(this);
        this.x = posTimerX;
        this.y = posTimerY;
    };
    
    // _Sprite_Timer_timerText override
    var _Sprite_Timer_timerText = Sprite_Timer.prototype.timerText;
    Sprite_Timer.prototype.timerText = function() {
        _Sprite_Timer_timerText.call(this);
        var min = Math.floor(this._seconds / 60) % 60;
        var sec = this._seconds % 60;
        var millsec = this._millseconds % 60; 
        return min.padZero(2) + ':' + sec.padZero(2) + ':' + millsec.padZero(2);
    };
    
    
    
    //=================================
    // Game_Timer (プラグインスクリプト用)
    //=================================
    
    // override
    var _Game_Timer_start = Game_Timer.prototype.start;
    Game_Timer.prototype.start = function(count) {
        _Game_Timer_start.call(this, count);
        _timerPause = false;
        this._ticker = 0;
        if(timerStartAnime){
            posTimerX = timerStartAnime_StartPosX;
            posTimerY = timerStartAnime_StartPosY;
        }else{
            posTimerX = posX;
            posTimerY = posY;
        }
    };

    // override
    var _Game_Timer_update = Game_Timer.prototype.update;
    Game_Timer.prototype.update = function(sceneActive) {
        if (!_timerPause) {
            _Game_Timer_update.call(this, sceneActive);
        }
        
        if(timerStartAnime){
            this._ticker++;
            if(this._ticker >= timerStartAnime_StartWaitFrame && 
                     this._ticker < timerStartAnime_StartWaitFrame + timerStartAnime_StartToEndFrame){
                posTimerX -= (timerStartAnime_StartPosX - posX) / timerStartAnime_StartToEndFrame;
                posTimerY -= (timerStartAnime_StartPosY - posY) / timerStartAnime_StartToEndFrame;
            }
        }
    };
    
    // Game_Timer に millseconds を追加
    Game_Timer.prototype.millseconds = function() {
        return Math.floor(this._frames);
    };
    
    // Game_Timer に addFrames を追加
    Game_Timer.prototype.addFrames = function(second) {
        this._frames += second * 60;
    };

    // Game_Timer に subFrames を追加
    Game_Timer.prototype.subFrames = function(second) {
        this._frames -= second * 60;
        if (this._frames < 0) {
            this._frames = 0;
        }
    };

    // Game_Timer に pause を追加
    Game_Timer.prototype.pause = function() {
        _timerPause = true;
    };

    // Game_Timer に resume を追加
    Game_Timer.prototype.resume = function() {
        _timerPause = false;
    };


})();


    
// Conditional Branch
Game_Interpreter.prototype.command111 = function() {
    var result = false;
    switch (this._params[0]) {
        case 0:  // Switch
            result = ($gameSwitches.value(this._params[1]) === (this._params[2] === 0));
            break;
        case 1:  // Variable
            var value1 = $gameVariables.value(this._params[1]);
            var value2;
            if (this._params[2] === 0) {
                value2 = this._params[3];
            } else {
                value2 = $gameVariables.value(this._params[3]);
            }
            switch (this._params[4]) {
                case 0:  // Equal to
                    result = (value1 === value2);
                    break;
                case 1:  // Greater than or Equal to
                    result = (value1 >= value2);
                    break;
                case 2:  // Less than or Equal to
                    result = (value1 <= value2);
                    break;
                case 3:  // Greater than
                    result = (value1 > value2);
                    break;
                case 4:  // Less than
                    result = (value1 < value2);
                    break;
                case 5:  // Not Equal to
                    result = (value1 !== value2);
                    break;
            }
            break;
        case 2:  // Self Switch
            if (this._eventId > 0) {
                var key = [this._mapId, this._eventId, this._params[1]];
                result = ($gameSelfSwitches.value(key) === (this._params[2] === 0));
            }
            break;
        case 3:  // Timer
            if ($gameTimer.isWorking()) {
                if (this._params[2] === 0) {
                    // >=が選択されている場合
                    result = ($gameTimer.millseconds() >= this._params[1] * 60);
                } else {
                    // <=が選択されている場合
                    result = ($gameTimer.millseconds() <= this._params[1] * 60);
                }
            }
            break;
        case 4:  // Actor
            var actor = $gameActors.actor(this._params[1]);
            if (actor) {
                var n = this._params[3];
                switch (this._params[2]) {
                    case 0:  // In the Party
                        result = $gameParty.members().contains(actor);
                        break;
                    case 1:  // Name
                        result = (actor.name() === n);
                        break;
                    case 2:  // Class
                        result = actor.isClass($dataClasses[n]);
                        break;
                    case 3:  // Skill
                        result = actor.hasSkill(n);
                        break;
                    case 4:  // Weapon
                        result = actor.hasWeapon($dataWeapons[n]);
                        break;
                    case 5:  // Armor
                        result = actor.hasArmor($dataArmors[n]);
                        break;
                    case 6:  // State
                        result = actor.isStateAffected(n);
                        break;
                }
            }
            break;
        case 5:  // Enemy
            var enemy = $gameTroop.members()[this._params[1]];
            if (enemy) {
                switch (this._params[2]) {
                    case 0:  // Appeared
                        result = enemy.isAlive();
                        break;
                    case 1:  // State
                        result = enemy.isStateAffected(this._params[3]);
                        break;
                }
            }
            break;
        case 6:  // Character
            var character = this.character(this._params[1]);
            if (character) {
                result = (character.direction() === this._params[2]);
            }
            break;
        case 7:  // Gold
            switch (this._params[2]) {
                case 0:  // Greater than or equal to
                    result = ($gameParty.gold() >= this._params[1]);
                    break;
                case 1:  // Less than or equal to
                    result = ($gameParty.gold() <= this._params[1]);
                    break;
                case 2:  // Less than
                    result = ($gameParty.gold() < this._params[1]);
                    break;
            }
            break;
        case 8:  // Item
            result = $gameParty.hasItem($dataItems[this._params[1]]);
            break;
        case 9:  // Weapon
            result = $gameParty.hasItem($dataWeapons[this._params[1]], this._params[2]);
            break;
        case 10:  // Armor
            result = $gameParty.hasItem($dataArmors[this._params[1]], this._params[2]);
            break;
        case 11:  // Button
            result = Input.isPressed(this._params[1]);
            break;
        case 12:  // Script
            result = !!eval(this._params[1]);
            break;
        case 13:  // Vehicle
            result = ($gamePlayer.vehicle() === $gameMap.vehicle(this._params[1]));
            break;
    }
    this._branch[this._indent] = result;
    if (this._branch[this._indent] === false) {
        this.skipBranch();
    }
    return true;
};
