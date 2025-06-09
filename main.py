import random

# Função que simula o experimento do Gato de Schrödinger
def executar_simulação(rodadas):
    vivos = 0
    mortos = 0

    for _ in range(rodadas):
        estado = random.choice(["Vivo", "Morto"])
        if estado == "Vivo":
            vivos += 1
        else:
            mortos += 1

    # Exibe o resumo ao final da simulação
    print("\n--- Resumo da Simulação ---")
    print(f"Vezes que o gato estava vivo: {vivos}")
    print(f"Vezes que o gato estava morto: {mortos}")
# Ponto de entrada do programa
if __name__ == "__main__":
    # Altere o número abaixo para definir quantas vezes o experimento será repetido
    simular_gato(1)                    