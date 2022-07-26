

const { BigQuery } = require('@google-cloud/bigquery');

const bigquery = new BigQuery();



const getAllData = (callback) => {

    const getAllDataquery = `SELECT * FROM StudentDS.StudentTBL`
    const getOptions = {
        query: getAllDataquery,
        location: 'US',
    };

    return bigquery.query(getOptions, callback);
};

const getDataById = (ID, callback) => {

    id = parseInt(ID);

    const getDataQuery = `SELECT * FROM StudentDS.StudentTBL WHERE id=?`
    const getByIdOptions = {
        query: getDataQuery,
        location: 'US',
        params: [id]
    };

    return bigquery.query(getByIdOptions, callback);
};

const updateData = (item, callback) => {
    console.log("PUT",item);
    updateDataQeury = `UPDATE StudentDS.StudentTBL
                        SET name=?,age=?,weight=? 
                        WHERE id=?`;
    const updateOptions = {
        query: updateDataQeury,
        location: 'US',
        params: [item.Name, item.Age, item.Weight, item.Id]
    };
    return bigquery.query(updateOptions, callback)
};

const addAllData = (item, callback) => {
    addAllDataquery = `INSERT INTO StudentDS.StudentTBL values (?,?,?,?)`;
    const addOptions = {
        query: addAllDataquery,
        location: 'US',
        params: [item.name, item.age, item.weight, item.id]
    };
    return bigquery.query(addOptions, callback)
}

const deleteData = (id, callback) => {
    deleteDataquery = `DELETE FROM StudentDS.StudentTBL where id=?`;
    const deleteOptions = {
        query: deleteDataquery,
        location: 'US',
        params: [parseInt(id)]
    };
    return bigquery.query(deleteOptions, callback)
}

module.exports = {
    getAllData,
    addAllData,
    getDataById,
    deleteData,
    updateData
};