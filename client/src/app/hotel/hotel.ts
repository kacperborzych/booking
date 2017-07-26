export class Hotel {

  id: number
  hotelName: string
  adress: string

  constructor(json) {
    this.id = json['id']
    this.hotelName = json['hotelName']
    this.adress = json['adress']
  }
}
