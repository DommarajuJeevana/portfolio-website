import Skill from "../models/Skill.js";

// GET ALL SKILLS
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json({ success: true, skills });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ADD SKILL
export const addSkill = async (req, res) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, skill });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// DELETE SKILL
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};