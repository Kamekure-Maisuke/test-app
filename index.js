import { format } from "date-fns"

const formatDate = format(new Date(2021, 1, 11), 'yyyy-MM-dd')

console.log(formatDate)