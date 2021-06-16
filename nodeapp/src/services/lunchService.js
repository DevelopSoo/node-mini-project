const connection = require('../../myconfig')



const getLunchService = () => {
    const lunchData = [];
    connection.connect();
    const query = connection.query('SELECT * FROM lunch', (err, rows) => {
        if (err) throw err;
        console.log(rows)
        return rows
        // if (rows[0]) {
        //     console.log(rows)
        // } else {
        //     console.log("no data")
        // };
        // return rows[0];
    })
}


module.exports = getLunchService