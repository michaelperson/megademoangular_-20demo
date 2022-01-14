export declare interface login{
    isLogged : boolean
    login(loginName : string) : void
    logout(loginName : string) : void
}