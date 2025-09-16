import { Router, Request, Response, NextFunction } from 'express';
import IssueModel from '../models/Issue';

const router = Router();

router.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const docs = await IssueModel.find().sort({ updatedAt: -1 });
    res.json(docs);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const issue = await IssueModel.findById(req.params.id);
    if (!issue) return res.status(404).json({ message: 'Issue not found' });
    res.json(issue);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const doc = await IssueModel.create(req.body);
    res.status(201).json(doc);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updated = await IssueModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Issue not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.patch('/:id/status', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const status = req.body?.status;
    if (!status) return res.status(400).json({ message: 'status is required' });
    const updated = await IssueModel.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Issue not found' });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await IssueModel.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Issue not found' });
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

export default router;


