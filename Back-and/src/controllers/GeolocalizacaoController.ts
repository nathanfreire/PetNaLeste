import { Request, Response } from "express";
import GeolocalizacaoService from "../services/GeolocalizacaoService";

class GeolocalizacaoController {
  private service: GeolocalizacaoService;

  constructor() {
    this.service = new GeolocalizacaoService();
  }

  async buscarCoordenadas(req: Request, res: Response) {
    const endereco = req.query.q as string;

    if (!endereco) {
      return res.status(400).json({ error: "Parâmetro 'q' (endereço) é obrigatório" });
    }

    try {
      const coordenadas = await this.service.buscarCoordenadas(endereco);

      if (!coordenadas) {
        return res.status(404).json({ error: "Endereço não encontrado" });
      }

      return res.json(coordenadas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar localização" });
    }
  }
}

export default GeolocalizacaoController;
