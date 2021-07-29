const startAPM = ({service_name, apm_url, env}) => {
    global.EAPM = require('elastic-apm-node').start({

        serviceName: service_name,

        secretToken: '',

        serverUrl: apm_url,

        environment: env

    })
}

const captureAPM = async function(transaction_name, func) {

    let type
    const trans = global.EAPM.startTransaction(transaction_name, type)

    try {
        const ret = await func(global.EAPM)
        trans.result = 'success'
        return ret
    } catch (err){
        console.log("Got Error", err)
        global.EAPM.captureAPM(err, {
            custom: {
                error: err
            }
        })
        trans.result = 'error'
    } finally {
        trans.end()

    }
}

module.exports = {
    startAPM,
    captureAPM
}