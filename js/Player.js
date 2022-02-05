class Player{
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param   {integer}   num - Number of token objects to be created
     * @return  {array}     tokens - an array of new token objects
     */
    createTokens(num){
        const tokens = [];

        for(let i = 0; i < num; i++){
            let token = new Token(i, this);
            tokens.push(token);
        }
        return tokens;
    }

    /**
     * Creates an array of the unused tokens.
     * @param   none
     * @return  {array}     tokens - an array of unused token objects
     */
    get unusedTokens(){
        return this.tokens.filter(token => !token.dropped);
    }

   /**
     * Creates an array of the unused tokens.
     * @param   none
     * @return  {Token}     tokens - the first token object in the unused token list.
     */
    get activeToken(){
        //Because unusedTokens is a getter method it does not need ()
        return this.unusedTokens[0];
    }

    /**
     * Check if a player has any undropped tokens left
     * @return {Boolean} 
     */
    checkTokens(){
        if(this.unusedTokens.length > 0){
            return true;
        } else {
            return false;
        }
    }

    // Their solution
    // checkTokens(){
    //     return this.unusedTokens.length == 0 ? false : true;
    // }
}