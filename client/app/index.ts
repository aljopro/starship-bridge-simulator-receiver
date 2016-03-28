
import {StarshipGame} from "./starship-game";

var game = null;

export function initialize() {
  var castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  var appConfig = new cast.receiver.CastReceiverManager.Config();
  var gameConfig = new cast.receiver.games.GameManagerConfig();
  var gameManager = new cast.receiver.games.GameManager(gameConfig);
}
