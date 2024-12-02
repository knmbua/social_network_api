import { Router } from 'express';
import {
    findAllUsers,
    getSingleUserData,
    createUser,
    updateUserById,
    deleteUserById,
    addFriendToUser,
    deleteFriendFromUser,
    getAllThoughts,
    getSingleThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById,
    createReaction,
    deleteReactionById
} from '../controllers/api_controllers.js';

const router = Router();


router.get('/users', findAllUsers); 

router.get('/users/:userId', getSingleUserData); 

router.post('/users', createUser); 

router.put('/users/:userId', updateUserById);  

router.delete('/users/:userId', deleteUserById);  



router.post('/users/:userId/friends/:friendId', addFriendToUser);  

router.delete('/users/:userId/friends/:friendId', deleteFriendFromUser);  



router.get('/thoughts', getAllThoughts); 

router.get('/thoughts/:thoughtId', getSingleThoughtById);  

router.post('/thoughts/:userId', createThought);  

router.put('/thoughts/:thoughtId', updateThoughtById);  

router.delete('/thoughts/:thoughtId', deleteThoughtById);  

router.post('/thoughts/:thoughtId/reactions', createReaction);  

router.delete('/thoughts/:thoughtId/reactions/:reactionId', deleteReactionById);

export default router;