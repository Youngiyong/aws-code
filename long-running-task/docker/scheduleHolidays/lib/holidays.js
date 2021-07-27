const common = require('./common')

const scheduleHolidays = async () => {
    let conn
    console.log("?")
    try {
        conn = await common.getConnection()
        console.log("connection true")
        await conn.beginTransaction()
        console.log("transaction 진입")
        for (var i = 0; i < 100; i++){
        await conn.query('INSERT INTO holidays(name, created_at) VALUES(?, now())'
    , '윤기용'+i)
            console.log(i)
        }
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