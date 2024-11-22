document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://api.worldbank.org/v2/country/BR/indicator/EG.USE.PCAP.KG.OE?format=json';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const anos = data[1]
                .filter(item => item.date >= 2000 && item.date <= 2014)
                .map(item => item.date)
                .reverse();
            const consumo = data[1]
                .filter(item => item.date >= 2000 && item.date <= 2014)
                .map(item => item.value)
                .reverse();

            const ctx = document.getElementById('energyChart').getContext('2d');

            const energyChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: anos,
                    datasets: [{
                        label: 'Consumo Energético (em KWh)',
                        data: consumo,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgb(75, 192, 192)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Consumo Energético do Brasil (2000-2014)'
                        },
                        legend: {
                            position: 'top'
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Ano'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Consumo (KWh)'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os dados da API:', error);
        });
});

