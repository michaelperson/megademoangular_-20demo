import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo18dot5',
  templateUrl: './demo18dot5.component.html'
})
export class Demo18dot5Component implements OnInit {

  token : string = ""
  userId : string = ""
  userInfos : any = ""

  constructor() {
    if(sessionStorage.getItem("Token"))
      this.token = sessionStorage.getItem("Token")

    if(sessionStorage.getItem("UserId"))
      this.userId = sessionStorage.getItem("UserId")

    if(sessionStorage.getItem("UserInfos"))
      this.userInfos = JSON.parse(sessionStorage.getItem("UserInfos"))

    console.log(sessionStorage)

  }

  removeSession()
  {
    sessionStorage.removeItem("Token")
    sessionStorage.removeItem("UserId")
    sessionStorage.removeItem("UserInfos")

    console.log(sessionStorage)
  }


  clearSession()
  {
    sessionStorage.clear()

    console.log(sessionStorage)
  }

  populateSession()
  {
    sessionStorage.setItem("Token", "tututototata")
    sessionStorage.setItem("UserId", "42")
    
    let objectTest = {
      firstName : "Loïc",
      lastName : "Baudoux"
    }
    sessionStorage.setItem("UserInfos", JSON.stringify(objectTest))
  }

  ngOnInit(): void {
    
  }



}
