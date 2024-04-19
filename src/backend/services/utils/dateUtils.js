import moment from "moment"

export function birthDateIsValid(date) {

    return moment(date).valueOf() > 409968000000

}