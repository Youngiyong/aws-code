const STAGE = process.env.STAGE

require('dotenv').config();

const elasticapm = require('./lib/elasticapm')
const common = require('./lib/common')
const holiday = require('./lib/holidays')

elasticapm.startAPM({
    service_name: `scheduler-container-${STAGE}`,
    apm_url: process.env.EAPM_SERVER_URL,
    env: STAGE
})

const main = async () => {
    console.log('Running shceduleHolidays')

    await elasticapm.captureAPM('holidays.scheduleHolidays', async (apm) => {

        await common.wrapAPM(async() =>{
            return holiday.scheduleHolidays()
        }, `scheduleHolidays-${STAGE}`)()
    })   
}

module.exports = {
    main
}


if (require.main === module) {
    main()
}