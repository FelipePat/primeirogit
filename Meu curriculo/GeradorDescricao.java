import java.util.Random;


public class GeradorDescricao {
    public static void main(String[] args) {
        String [] descricoes = {
            "Em transição para a área de Análise e Desenvolvimento de Sistemas, busco aplicar minha experiência em gestão, organização e resolução de problemas, adquirida na gastronomia, para contribuir com soluções tecnológicas inovadoras e eficientes.",
            "Amo programação e quero me especializar em desenvolvimento web.", 
            "Estou criando meu primeiro projeto integrando Java + HTML + CSS!"
        };
    
        Random random = new Random();
        int indice = random.nextInt(descricoes.length);
        String descricaoSelecionada = descricoes[indice];

        System.out.println(descricaoSelecionada);
    }
    
}
