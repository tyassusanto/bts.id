const connection = require('../../common/connection')

const addGroupList = (userData) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO checklist_group SET ?`
        connection.query(query, userData, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const getAllGroup = () => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM checklist_group`
        connection.query(query, (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
    })
}

const deleteGroupById = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM checklist_group WHERE checklist_group_id = "${id}"`
        connection.query(query, [id], (error, result) => {
            if (!error) {
                resolve(result)
            } else {
                reject(error)
            }
        })
        console.log(query)})

}

const addItemlist = (id, itemData) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO checklist_item SET ?`;
        connection.query(query, itemData, (error, result) => {
            if (!error) {
                resolve(result);
            } else {
                reject(error);
            }
        });
    });
};

module.exports = {
    addGroupList,
    addItemlist,
    getAllGroup,
    deleteGroupById
}