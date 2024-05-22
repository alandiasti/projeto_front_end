import Box from "@/components/Box";
import Pagina from "@/components/Pagina";

export default function Home() {
  return (
    <Pagina>

      <Box titulo="Projeto Com React">
        <p>Isso é um paragrafo</p>
        <p>Isso é mais um paragrafo</p>
      </Box>

      <Box titulo="Teste 01">
        <p>Isso é um paragrafo</p>
        <p>Isso é mais um paragrafo</p>
        <button className="btn btn-success">Detalhar</button>
      </Box>

      <Box titulo="Teste 02">
        <p>Isso é um paragrafo</p>
        <p>Isso é mais um paragrafo</p>
        <button>Detalhar</button>
      </Box>

      </Pagina>
      );
}
