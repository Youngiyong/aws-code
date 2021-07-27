const mysql = require('mysql2/promise')


const getConnection = async function() {
    let conn = null
    let error = null
    for (let try_count = 1; try_count <= CONNECTION_RETRY_COUNT; try_count++) {
        try {
            conn = await mysql.createConnection({
                host: process.env.RDS_HOSTNAME,
                user: process.env.RDS_USERNAME,
                password: process.env.RDS_PASSWORD,
                database: process.env.RDS_DATABASE,
                port: process.env.RDS_PORT
            })
            if (conn) {
                console.log(`DB CONNECTION SUCCESS attempted ${try_count}`)
                break
            }
        } catch (err) {
            error = err
            console.log('Error while getting DB Conneciton', err)
            console.log(`DB CONNECTION FAILURE attempted ${try_count}`)
        }
    }
    if (conn) {
        return conn
    } else {
        throw error
    }
}

/**
 * lastorder APM 리포팅을 하는 함수로 wrapping한다.
 * @param {*} fnc
 * @param {*} name
 */
 const wrapAPM = (fnc, name) => {
    return async (...args) => {
        try {
            return fnc(...args)
        } catch (err) {
            const subject = `[scheduler-${process.env.STAGE}-${name}] ${err.message}`
            const message = err.stack
            await report_apm(subject, message)
            throw err
        }
    }
}

module.exports = {
    getConnection,
    wrapAPM
}
