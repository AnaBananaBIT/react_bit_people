import * as shared from './../shared/constants.js'
import UsersData from './../entities/UsersData'
// import { userInfo } from 'os';

const url = `${shared.BASE_API_URL}/?results=15`;

const fetchPeople = () => (
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {

            const users = data.results.map((elem) => (
                new UsersData(
                    elem.cell,
                    elem.name.first[0].toUpperCase() + elem.name.first.slice(1),
                    elem.name.last[0].toUpperCase() + elem.name.last.slice(1),
                    elem.picture.thumbnail,
                    elem.picture.large,
                    elem.email,
                    elem.dob,
                    elem.gender


                )
            ))



            return users
        })
)

export default fetchPeople