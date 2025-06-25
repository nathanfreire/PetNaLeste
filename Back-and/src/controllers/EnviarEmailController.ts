import { Request, Response } from 'express';
import EnviarEmailService from '../services/EnviarEmailService';

export default class EnviarEmailController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, mensagem } = req.body;
    const service = new EnviarEmailService();

    try {
      await service.execute({ email, mensagem });
      return res.status(200).json({ message: 'E-mail enviado com sucesso.' });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({ error: error.message || 'Erro interno.' });
    }
  }
}