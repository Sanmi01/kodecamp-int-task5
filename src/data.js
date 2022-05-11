import mercury from './assets/images/mercury.jpg'
import venus from './assets/images/venus.jpg'
import earth from './assets/images/earth.jpg'
import mars from './assets/images/mars.jpg'
import jupiter from './assets/images/jupiter.jpg'
import saturn from './assets/images/saturn.jpg'
import uranus from './assets/images/uranus.jpg'
import neptune from './assets/images/neptune.jpg'

export const planetItems = [
    {
        id: 1,
        img: mercury,
        name: "Mercury",
        info: "Mercury is the closest planet to the sun and the smallest planet in the solar system. Mercury zips around the sun in only 88 Earth days and that is because it is so close to our Sun. Mercury's atmosphere is very thin and primarily composed of oxygen, sodium, hydrogen, helium and potassium.",
        diameter: "3,031 miles",
        orbit: "88 Earth days",
        noOfMoons: 0
    },
    {
        id: 2,
        img: venus,
        name: "Venus",
        info: "Venus is the second planet from the sun and sometimes referred to as Earth's twin. It is the hottest planet in the solar system. Its thick atmosphere is extremely toxic and composed of sulfuric acid clouds, the planet is an extreme example of the greenhouse effect. Venus spins slowly from east to west, the opposite direction of most of the other planets.",
        diameter: "7,521 miles",
        orbit: "225 Earth days",
        noOfMoons: 0
    },
    {
        id: 3,
        img: earth,
        name: "Earth",
        info: "Earth, our home planet, is the third planet from the sun. It is a water world with two-thirds of the planet covered by water. Earth's atmosphere is rich in nitrogen and oxygen and it is the only world known to harbor life.",
        diameter: "7,926 miles",
        orbit: "365.24 Earth days",
        noOfMoons: 1
    },
    {
        id: 4,
        img: mars,
        name: "Mars",
        info: "Mars is the fourth planet from the sun. It is a cold, desert-like planet covered in iron oxide dust that gives the planet its signature red hue. Mars shares similarities with Earth: It is rocky, has mountains, valleys and canyons, and storm systems ranging from localized tornado-like dust devils to planet-engulfing dust storms.",
        diameter: "4,217 miles",
        orbit: "687 Earth days",
        noOfMoons: 2
    },
    {
        id: 5,
        img: jupiter,
        name: "Jupiter",
        info: "Jupiter is the fifth planet from the sun and the largest planet in the solar system. The gas giant is more than twice as massive as all the other planets combined, according to NASA. Its swirling clouds are colorful due to different types of trace gases including ammonia ice, ammonium hydrosulfide crystals as well as water ice and vapor.",
        diameter: "86,881 miles",
        orbit: "11.9 Earth years",
        noOfMoons: 79
    },
    {
        id: 6,
        img: saturn,
        name: "Saturn",
        info: "Saturn is the sixth planet from the sun and is famous for its large and distinct ring system. Though Saturn is not the only planet in the solar system with rings. The rings are made of ice and rock and scientists are not yet sure how they formed. The gaseous planet is mostly hydrogen and helium and has numerous moons.",
        diameter: "74,900 miles",
        orbit: "29.5 Earth years",
        noOfMoons: 82
    },
    {
        id: 7,
        img: uranus,
        name: "Uranus",
        info: "Uranus is the seventh planet from the sun and is a bit of an oddball. It has clouds made of hydrogen sulfide, the same chemical that makes rotten eggs smell so foul. It rotates from east to west like Venus. But unlike Venus or any other planet, its equator is nearly at right angles to its orbit — it basically orbits on its side.",
        diameter: "31,763 miles",
        orbit: "84 Earth years",
        noOfMoons: 27
    },
    {
        id: 8,
        img: neptune,
        name: "Neptune",
        info: "Neptune is the eighth planet from the sun and is on average the coldest planet in the solar system. Neptune is approximately the same size as Uranus and is known for its supersonic strong winds. The planet is more than 30 times as far from the sun as Earth.",
        diameter: "30,775 miles",
        orbit: "165 Earth years",
        noOfMoons: 14
    }
]