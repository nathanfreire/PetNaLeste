import nodemailer from 'nodemailer';
import { IEmailRequest } from '../interfaces/IEmailRequest';

class EnviarEmailService {
  async execute({ email, mensagem }: IEmailRequest): Promise<void> {
    if (!email || !mensagem) {
      throw new Error('Email e mensagem são obrigatórios.');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'seuemail@gmail.com',
        pass: process.env.EMAIL_PASS || 'sua_app_password',
      },
    });

    await transporter.sendMail({
      from: `"PetNaleste" <${process.env.EMAIL_USER}>`,
      to: 'gaberbrgamer@gmail.com',
      subject: 'Novo contato recebido',
      html: `
        <p><strong>Email do remetente:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem}</p>
      `,
      
    });
    

  }
}

export default EnviarEmailService;