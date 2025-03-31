import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;


public class GeradorConselhos {
    public static void main(String[] args) {
        String[] conselhos = {
            "Faça commits pequenos e frequentes!",
            "Documente seu código como se fosse para você mesmo no futuro.",
            "Teste seu código em diferentes ambientes.",
            "Aprenda Git direitinho - vai salvar sua vida!",
            "Descanse. Programar cansado gera bugs."
        
        };
        Random random = new Random();
        
        String conselho = conselhos[random.nextInt(conselhos.length)];

        try (FileWriter arquivo = new FileWriter("conselho.txt")) {
            arquivo.write(conselho);
            System.err.println("conselho gerado: + conselho");
} catch (IOException e) {
    System.out.println("Erro ao salvar arquivo.");
}
    }

    @Override
    public String toString() {
        return "GeradorConselhos []";
    }
    
}
