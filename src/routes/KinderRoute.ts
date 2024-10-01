import express from 'express';
import {
  createKindergarten,
  getAllKindergartens,
  getKindergartenById,
  updateKindergarten,
  deleteKindergarten
} from '../Controllers/KinderControllers';

const router = express.Router();


router.post('/', createKindergarten);


router.get('/', getAllKindergartens);


router.get('/:id', getKindergartenById);


router.put('/:id', updateKindergarten);


router.delete('/:id', deleteKindergarten);

export default router;
