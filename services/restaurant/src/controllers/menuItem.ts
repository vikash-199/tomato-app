import { AuthenticatedRequest } from '../middlewares/isAuth.js';
import TryCatch from '../middlewares/trycatch.js';
import Restaurant from '../models/Restaurant.js';

export const addMenuItem = TryCatch(async (req: AuthenticatedRequest, res) => {
  if (!req.user) {
    return res.status(401).json({
      message: 'Please Login.',
    });
  }

  const restaurant = await Restaurant.findOne({ ownerId: req.user._id });

  if (!restaurant) {
    return res.status(401).json({
      message: 'No restaurant found.',
    });
  }

  const { name, description, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: 'Name and price are required.',
    });
  }
});
