class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.color=null;
        this.pos=null;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          color:this.color,
         // pos:this.pos
        });
      }

      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
}