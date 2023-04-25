import express from 'express';
import userController from '../controllers/user.controller.js';
import tokenMiddleware from '../middlewares/token.middlewares.js';

const router = express.Router({ mergeParams: true });

router.get('', tokenMiddleware(['ADMIN']), userController.getAllUser);

router.get(
  '/:userId',
  tokenMiddleware(['ADMIN', 'USER']),
  userController.getUserById
);

router.post('', tokenMiddleware(['ADMIN']), userController.addUser);

router.post('/signin', userController.signIn);

router.post('/signup', userController.signUp);

router.put(
  '/:userId',
  tokenMiddleware(['ADMIN', 'USER']),
  userController.updateUser
);

router.delete(
  '/:userId',
  tokenMiddleware(['ADMIN', 'USER']),
  userController.deleteUser
);

export default router;
