import Auth from "../models/auth.js";

export const authCreate = async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    const user = await Auth.signup(full_name, email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const authLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Auth.login(email, password);

    res.status(200).json({ user, email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
