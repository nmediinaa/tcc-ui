export const steps = [
    {
        header: 'Coleta e tratamento', 
        p: 'As respostas obtidas na interação inicial via chat são convertidas em variáveis estruturadas. Nessa etapa, o sistema realiza a limpeza de ruídos e a normalização dos dados coletados, preparando um vetor de características preciso para alimentar os modelos de inteligência artificial'
    },
    {
        header: 'Clusterização',
        p: 'Utilizando o aprendizado não supervisionado, o algoritmo organiza o grande volume de dados em grupos (clusters) baseados em afinidades comportamentais e tecnológicas, segmentando o universo de perfis de forma macro.'
    },
    {
        header: 'Classificação por Vizinhança com KNN',
        p: 'O algoritmo K-Nearest Neighbors calcula a distância matemática (como a distância Euclidiana) entre o vetor do usuário e os dados históricos do cluster, identificando os vizinhos mais próximos para refinar a precisão da compatibilidade.'
    },
    {
        header: 'Motor de Recomendação Personalizada',
        p: 'Cruzando os resultados da clusterização e da vizinhança estatística, o sistema processa a pontuação de similaridade e entrega de forma imediata o curso de tecnologia ideal para a transição de carreira do usuário.'
    }
];