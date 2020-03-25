// @flow
export default class Driver {
  get fullName() {
    return `${this.givenName} ${this.familyName}`;
  }
  code: string
  dateOfBirth: string //"1931-05-19"
  driverId: string // "anderson"
  familyName: string //"Anderson"
  givenName: string //"Bob"
  nationality: string //"British"
  url: string //"http://en.wikipedia.org/wiki/Bob_Anderson_(racing_driver)"
}