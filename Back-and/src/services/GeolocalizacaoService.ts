import axios from 'axios';

class GeolocalizacaoService {
  async buscarCoordenadas(endereco: string) {
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          format: 'json',
          q: endereco
        },
        headers: {
          'User-Agent': 'SeuApp/1.0 (email@exemplo.com)'
        }
      });

      if (response.data.length === 0) {
        return null;
      }

      return {
        latitude: parseFloat(response.data[0].lat),
        longitude: parseFloat(response.data[0].lon),
      };
    } catch (error) {
      console.error("Erro ao buscar coordenadas:", error);
      throw new Error("Erro na geolocalização");
    }
  }
}

export default GeolocalizacaoService;