"use strict";
var game = null;
function initialize() {
    var castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
    var appConfig = new cast.receiver.CastReceiverManager.Config();
    var gameConfig = new cast.receiver.games.GameManagerConfig();
    var gameManager = new cast.receiver.games.GameManager(gameConfig);
}
exports.initialize = initialize;
//# sourceMappingURL=index.js.map