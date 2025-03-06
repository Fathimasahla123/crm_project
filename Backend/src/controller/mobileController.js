const Mobile = require("../model/mobileModel");

const getAllMobiles = async (req, res) => {
    try {
        const mobiles = await Mobile.find();
        res.status(200).json({mobiles});
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const getMobileById = async (req, res) => {
    try {
        const mobile = await Mobile.findById(req.params.id);
        if (!mobile) return res.status(404).json({ message: "Mobile not found" });
        res.status(200).json(mobile);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

const createMobile = async (req, res) => {
    const { name, year, price } = req.body;

    try {
        
        const newMobile = new Mobile({ name, year, price });
        await newMobile.save();
        res.status(201).json(newMobile);
    } catch (error) {
       res.status(500).json({ message: "Failed to create mobile" });
    }
};

const updateMobile = async (req, res) => {
    const { name, year, price } = req.body;

    try {
        const updatedMobile = await Mobile.findByIdAndUpdate(
            req.params.id,
            { name, year, price },
            { new: true } // Return the updated document
        );

        if (!updatedMobile) return res.status(404).json({ message: "Mobile not found" });

        res.status(200).json(updatedMobile);
    } catch (error) {
        res.status(500).json({ message: "Failed to update mobile" });
    }
};

const searchMobile = async (req, res) => {
    const { name, year } = req.query;

    let query = {};

    if (name) query.name = { $regex: name, $options: "i" }; // Case-insensitive search
    if (year) query.year = parseInt(year);

    try {
        const results = await Mobile.find(query);
        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ message: "Error while searching" });
    }
};

const deleteMobile = async (req, res) => {
    try {
        const deletedMobile = await Mobile.findByIdAndDelete(req.params.id);
        if (!deletedMobile) return res.status(404).json({ message: "Mobile not found" });
        res.status(204).json({ message: "Mobile deleted" });
    } catch (error) {
        res.status(500).json({ message: "Failed to delete mobile" });
    }
};

module.exports = {
    getAllMobiles,
    getMobileById,
    createMobile,
    updateMobile,
    deleteMobile,
    searchMobile,
};