import { Request, Response } from 'express';
import Kindergarten from '../Models/kinderModel';


export const createKindergarten = async (req: Request, res: Response): Promise<void> => {
  try {
    const newKindergarten = new Kindergarten(req.body);
    const savedKindergarten = await newKindergarten.save();
    res.status(201).json(savedKindergarten);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getAllKindergartens = async (req: Request, res: Response): Promise<void> => {
  try {
    const kindergartens = await Kindergarten.find().populate("reviews");
    res.json(kindergartens);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};


export const getKindergartenById = async (req: Request, res: Response): Promise<void> => {
  try {
    const kindergarten = await Kindergarten.findById(req.params.id).populate("reviews");;
    if (!kindergarten) {
      res.status(404).json({ message: 'Crèche non trouvée' });
      return;
    }
    res.json(kindergarten);
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};

export const updateKindergarten = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedKindergarten = await Kindergarten.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedKindergarten) {
      res.status(404).json({ message: 'Crèche non trouvée' });
      return;
    }
    res.json(updatedKindergarten);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};


export const deleteKindergarten = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedKindergarten = await Kindergarten.findByIdAndDelete(req.params.id);
    if (!deletedKindergarten) {
      res.status(404).json({ message: 'Crèche non trouvée' });
      return;
    }
    res.json({ message: 'Crèche supprimée avec succès' });
  } catch (err) {
    res.status(500).json({ message: (err as Error).message });
  }
};
