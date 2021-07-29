const STAGE = process.env.STAGE

require('dotenv').config();

const elasticapm = require('./lib/elasticapm')
const common = require('./lib/common')
const holiday = require('./lib/holidays')

elasticapm.startAPM({
    service_name: `scheduler-container-giyong`,
    apm_url: process.env.EAPM_SERVER_URL,
    env: STAGE
})

const main = async () => {
    console.log('Running scheduleHolidays')
    await elasticapm.captureAPM('holidays.scheduleHolidays', async (apm) => {
        await common.wrapAPM(async() =>{
            return holiday.scheduleHolidays()
        }, `scheduleHolidays-giyong`)()
    })   
}

module.exports = {
    main
}


if (require.main === module) {
    main()
}