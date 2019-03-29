import * as shared from './../shared/constants.js'
import UserObj from './../entities/UserObj'
// import { userInfo } from 'os';

const url = `${shared.BASE_API_URL}/?results=15`;

const fetchPeople = () => (
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {

            const users = data.results.map((elem) => (
                new UserObj(
                    elem.cell,
                    elem.name.first,
                    elem.name.last,
                    elem.picture.thumbnail,
                    elem.picture.large,
                    elem.email,
                    elem.dob,
                    elem.gender
                )
            ))

            console.log(users);

            return users
        })
)

export default fetchPeople