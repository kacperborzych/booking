export class Api {

  baseUrl = 'https://localhost:8080/api-v1'
  oauthServer = 'https://localhost:8080/oauth/token'
  activeUser = `${this.baseUrl}/users/active`
  hotels = `${this.baseUrl}/hotels`
  search =`${this.baseUrl}/searchHotels`
  reservation=`${this.baseUrl}/reservation`

}
