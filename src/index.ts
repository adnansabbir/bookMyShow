import {BookMyShow} from "./classes/BookMyShow";
import {Theatre} from "./classes/Theatre";
import {Location} from "./classes/Location";
import {Movie} from "./classes/Movie";
import {Language} from "./enums/Language.enum";
import {Genre} from "./enums/Genre.enum";
import {Show} from "./classes/Show";
import {RegisteredUser} from "./classes/RegisteredUser";
import {GuestUser} from "./classes/GuestUser";

// Initializing app
const APP = new BookMyShow('Start Cineplex')

// Creating 3 locations
const westSideLocation = new Location('West Side')
const northSideLocation = new Location('North Size')
const southSideLocation = new Location('South Side')

// Creating theatres
const starVipTheatre = new Theatre('Star Vip', westSideLocation, 250)
const starPremiumTheatre = new Theatre('Star Premium', northSideLocation, 350)
const kaziNazrulTheatre = new Theatre('Kazi Nazrul', southSideLocation, 518)

// Adding theatres to App
APP.addTheatre(starVipTheatre)
APP.addTheatre(starPremiumTheatre)
APP.addTheatre(kaziNazrulTheatre)

// Creating movies
const poran = new Movie('Poran', Language.BANGLA, Genre.ROMANCE, 7.6)
const hawa = new Movie('Hawa', Language.BANGLA, Genre.THRILLER, 8.1)
const bulletTrain = new Movie('Bullet Train', Language.ENGLISH, Genre.ACTION, 7.5)
const ttyol = new Movie('Three thousand years of longing', Language.ENGLISH, Genre.ACTION, 6.9)

// Creating Shows
const starVipsShows = [
    new Show(starVipTheatre, poran, new Date('2022-09-15:10:00')),
    new Show(starVipTheatre, hawa, new Date('2022-09-15:14:00')),
    new Show(starVipTheatre, bulletTrain, new Date('2022-09-15:17:00')),
    new Show(starVipTheatre, ttyol, new Date('2022-09-15:20:00'))
]

const starPremiumShows = [
    new Show(starPremiumTheatre, poran, new Date('2022-09-15:10:00')),
    new Show(starPremiumTheatre, hawa, new Date('2022-09-15:14:00')),
    new Show(starPremiumTheatre, bulletTrain, new Date('2022-09-15:17:00')),
    new Show(starPremiumTheatre, ttyol, new Date('2022-09-15:20:00'))
]

const kaziNazrulShows = [
    new Show(kaziNazrulTheatre, poran, new Date('2022-09-15:10:00')),
    new Show(kaziNazrulTheatre, hawa, new Date('2022-09-15:14:00')),
    new Show(kaziNazrulTheatre, bulletTrain, new Date('2022-09-15:17:00')),
    new Show(kaziNazrulTheatre, ttyol, new Date('2022-09-15:20:00'))
]

// Creating users
const userAdnanSabbir = new RegisteredUser('Adnan Sabbir')
const userGuest = new GuestUser()

// Book poran in Star Vip
console.log('Adnan Sabbir, Booking poran && bulletTrain on Star vip theatre')
starVipTheatre.shows.forEach(show=> {
    if([poran.id, bulletTrain.id].includes(show.movie.id)){
        show.bookTicket(userAdnanSabbir, 1)
    }
})
console.log(`\nPoran && Bullet train will be shown in user history`)
console.log(`${userAdnanSabbir.ticketBookingHistory.join('\n')}`)

console.log('\nAdnan cancels poran and thus it will be shown cancelled in history')
const adnansBookedPoran = userAdnanSabbir.ticketBookingHistory.find(ticket=> ticket.bookedShow.movie.id === poran.id)
adnansBookedPoran?.cancel()
console.log(`${userAdnanSabbir.ticketBookingHistory.join('\n')}`)

