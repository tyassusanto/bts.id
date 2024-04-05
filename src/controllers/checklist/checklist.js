const { v4: uuid } = require('uuid');
const createError = require('http-errors');

const modelChecklist = require('../../models/checklist/checklist')


const addGroup = async (req, res, next) => {
    try {
        const { name } = req.body;
        const groupData = {
            checklist_group_id: uuid(),
            name,
            created_at: new Date()
        };
        const resultAddGroup = await modelChecklist.addGroupList(groupData)
        res.status(200).json(groupData)

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const getAllGroup = async (req, res, next) => {
    try {
        const allGroupData = await modelChecklist.getAllGroup()
        res.status(200).json(allGroupData);
    } catch (error) {
        res.status(500).json({
            error: 'Internal Server Error'
        })
    }
}
const deleteGroupById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await modelChecklist.deleteGroupById(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                error: 'Group not found'
            });
        }

        res.status(200).json({
            message: 'Group deleted successfully'
        });
    } catch (error) {
        console.error("Error while deleting group:", error)
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

const addItem = async (req, res, next) => {
    try {
        const id = req.params.id
        const { itemName } = req.body
        const itemId = uuid()

        const itemData = {
            checklist_item_id: itemId,
            group_id: id,
            item_name: itemName,
            created_at: new Date()
        };

        await modelChecklist.addItemlist(id, itemData)

        res.status(200).json(itemData)
    } catch (error) {
        console.error("Error while adding item:", error)
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};



module.exports = {
    addGroup,
    getAllGroup,
    deleteGroupById,
    addItem
}