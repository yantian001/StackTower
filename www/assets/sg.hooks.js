var SG_Hooks = {
    debug: !0,
    getLanguage: function(a) {
        return SG.initLangs(a)
    },
    getGameConfig: function() {
        return SG.getGameConfig()
    },
    isEnabledIncentiviseButton: function() {
        return SG.isEnabledIncentiviseButton()
    },
    start: function() {
        SG_Hooks.debug && console.log("game started"), SG.trigger({
            type: "start"
        })
    },
    levelStarted: function(a) {
        SG_Hooks.debug && console.log("level started:" + a), SG.trigger({
            type: "levelStarted",
            level: a
        })
    },
    levelFinished: function(a, b) {
        SG_Hooks.debug && console.log("level finished:" + a + " score: " + b), SG.trigger({
            type: "levelFinished",
            level: a,
            score: b
        })
    },
    levelUp: function(a, b, c) {
        SG_Hooks.debug && console.log("level up:" + a + "/" + b), SG.trigger({
            type: "levelUp",
            level: a,
            lastLevelScore: b
        }, c)
    },
    gameOver: function(a, b, c) {
        SG_Hooks.debug && console.log("game over:" + a + "/" + b), SG.trigger({
            type: "gameOver",
            score: b,
            level: a
        }, c)
    },
    gameCompleted: function(a, b) {
        SG_Hooks.debug && console.log("game completed:" + a), SG.trigger({
            type: "gameCompleted",
            score: a
        }, b)
    },
    gamePause: function(a, b) {
        SG_Hooks.debug && console.log("game pause:" + a), SG.trigger({
            type: "gamePause",
            state: a
        }, b)
    },
    gameRestart: function(a) {
        SG_Hooks.debug && console.log("game restart:"), SG.trigger({
            type: "gameRestart"
        }, a)
    },
    selectMainMenu: function(a) {
        SG_Hooks.debug && console.log("selectMainMenu:"), SG.trigger({
            type: "selectMainMenu"
        }, a)
    },
    selectLevel: function(a, b) {
        SG_Hooks.debug && console.log("selectLevel:" + a), SG.trigger({
            type: "selectLevel",
            level: a
        }, b)
    },
    setSound: function(a, b) {
        SG_Hooks.debug && console.log("setSound:" + a), SG.trigger({
            type: "gameCompleted",
            state: a
        }, b)
    },
    triggerIncentivise: function(a) {
        SG_Hooks.debug && console.log("triggerIncentivise"), SG.trigger({
            type: "incentiviseTriggered"
        }, a)
    },
    setOrientationHandler: function(a) {
        SG.setOrientationHandler(a)
    },
    setResizeHandler: function(a) {
        SG.setResizeHandler(a)
    },
    setPauseHandler: function(a) {
        SG.setPauseHandler(a)
    },
    setUnpauseHandler: function(a) {
        SG.setUnpauseHandler(a)
    },
    buildKey: function(a) {
        return SG.getGameId() + "." + a
    },
    getStorageItem: function(a) {
        var b = null;
        try {
            b = localStorage.getItem(SG_Hooks.buildKey(a))
        } catch (c) {
            return void 0
        }
        return void 0 !== b && null !== b && (b = window.atob(b)), b
    },
    setStorageItem: function(a, b) {
        var c = b;
        void 0 !== c && null !== c && (c = window.btoa(c));
        try {
            return localStorage.setItem(SG_Hooks.buildKey(a), c), b
        } catch (d) {
            return void 0
        }
    }
};  