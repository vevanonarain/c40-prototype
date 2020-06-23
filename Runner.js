class Runner{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.rank = 1;
    }
    getCount(){
        var runnerCountRef=database.ref('runnerCount');
       runnerCountRef.on("value",function(data){
           runnerCount=data.val();
       })
    }
    updateCount(count){
        database.ref('/').update({
        runnerCount:count
      })
    }
    update(name){
        var runnerIndex="runners/runner"+this.index;
        database.ref(runnerIndex).set({
            name:this.name,
            distance:this.distance
        })
    } 
    static getRunnerInfo(){
        var runnerInfoRef = database.ref('runners');
        runnerInfoRef.on("value",(data)=>{
            allRunners = data.val();
        })
    }
     getRunnersAtEnd(){
        database.ref('runnersAtEnd').on("value", (data)=>{
            this.rank = data.val();
        })
    }
    static updateRunnersAtEnd(rank){
        database.ref('/').update({
            runnersAtEnd : rank
        })
    }
}