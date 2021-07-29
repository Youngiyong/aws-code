const common = require('./common')

const scheduleHolidays = async () => {
    let conn
    try {
        conn = await common.getConnection()
        console.log("transaction 진입")
        await conn.beginTransaction()
        for (var i = 0; i < 200; i++){
        await conn.query('INSERT INTO holidays(name, created_at) VALUES(?, now())'
    , 'test'+i)
        }
        console.log(i)
        conn.commit();
    } catch(err) {
        conn.rollback();
    } finally{
        conn.end();
    }
}


module.exports = {
    scheduleHolidays
}