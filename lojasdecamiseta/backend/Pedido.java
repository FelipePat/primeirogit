import java.io.*;
import java.net.*;

public class Pedido {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(8080);
        System.out.println("Servidor rodando na porta 8080...");

        while (true) {
            Socket clientSocket = serverSocket.accept();
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            String inputLine;
            StringBuilder request = new StringBuilder();

            while ((inputLine = in.readLine()) != null && !inputLine.isEmpty()) {
                request.append(inputLine);
            }

            System.out.println("Pedido recebido: " + request.toString());
            clientSocket.close();
        }
    }
}