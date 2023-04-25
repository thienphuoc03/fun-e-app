// import prisma from '../utils/prisma.js';
import responseHandler from '../handlers/response.handler.js';
import { PrismaClient } from '@prisma/client';
import crypto from 'crypto';
import jsonwebtoken from 'jsonwebtoken';

const prisma = new PrismaClient();

const DEFAULT_PAGE = 1;
const DEFAULT_SIZE = 10;

const getAllUser = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || DEFAULT_PAGE;
    const size = parseInt(req.query.size) || DEFAULT_SIZE;

    const perPage = size > 0 ? size : DEFAULT_SIZE;
    const currentPage = page > 0 ? page : DEFAULT_PAGE;
    const total = await prisma.user.count();

    // Calculate the number of items to skip
    const offset = (currentPage - 1) * perPage;

    const users = await prisma.user.findMany({
      skip: offset,
      take: perPage,
      include: {
        address: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    responseHandler.ok(res, {
      users,
      currentPage: currentPage,
      totalPages: Math.ceil(total / perPage),
    });
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findFirst({
      where: {
        id: Number(userId),
      },
    });

    if (!user) return responseHandler.notFound(res);

    responseHandler.ok(res, user);
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const addUser = async (req, res) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
      },
    });
    console.log(newUser);

    responseHandler.created(res, newUser);
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const signUp = async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body;

    // check registered phone number or not
    const checkUser = await prisma.user.findFirst({
      where: {
        phoneNumber: phoneNumber,
      },
    });

    if (checkUser)
      return responseHandler.badRequest(res, 'Phone number already in use');

    // Hash the password using SHA-256 and a random salt
    const salt = crypto.randomBytes(16).toString('hex');
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password + salt)
      .digest('hex');

    // Create a new user in the database
    const user = await prisma.user.create({
      data: {
        name: name,
        phoneNumber: phoneNumber,
        password: hashedPassword,
        salt: salt,
      },
    });

    // Generate a JWT for the new user
    const token = jsonwebtoken.sign(
      { userId: user.id, userRole: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: '24h',
      }
    );

    responseHandler.created(res, { user, token });
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const signIn = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;

    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {
        phoneNumber,
      },
    });

    // If the user does not exist, return an error
    if (!user)
      return responseHandler.unauthorize(
        res,
        'Incorrect account or password!!!'
      );

    // Hash the password using the user's salt
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password + user.salt)
      .digest('hex');

    // If the password is incorrect, return an error
    if (hashedPassword !== user.password)
      return responseHandler.unauthorize(
        res,
        'Incorrect account or password!!!'
      );

    // Generate a JWT for the user
    const token = jsonwebtoken.sign(
      { userId: user.id, userRole: user.role },
      process.env.JWT_SECRET
    );

    responseHandler.ok(res, { token, user });
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const updateUser = async (req, res) => {
  try {
    const { userId } = req.params.userId;

    const newUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        ...req.body,
      },
    });

    if (!newUser) return responseHandler.notFound(res);

    responseHandler.ok(res, newUser);
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params.userId;

    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    if (!user) return responseHandler.notFound(res);

    responseHandler.ok(res, 'Deleted user');
  } catch (error) {
    console.log(error);
    responseHandler.error(res);
  }
};

export default {
  getAllUser,
  getUserById,
  addUser,
  signUp,
  signIn,
  updateUser,
  deleteUser,
};
