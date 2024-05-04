export class WeatherDataCard {
    private name: string;
    private data: number | string;
    private unit: string;
    private icon: string;

    constructor(name: string, data: number | string, unit: string, icon: string) {
        this.name = name;
        this.data = data;
        this.unit = unit;
        this.icon = icon;
    }

    createWeatherDataCard(): HTMLElement {
        const card = document.createElement('div');
        card.classList.add('weather-data-card');

        const iconElement = document.createElement('i');
        iconElement.className = `fas ${this.icon}`;
        iconElement.classList.add('weather-data-icon');
        card.appendChild(iconElement);

        const nameLabel = document.createElement('p');
        nameLabel.textContent = this.name;
        nameLabel.classList.add('weather-data-name');
        card.appendChild(nameLabel);

        const dataLabel = document.createElement('p');
        dataLabel.textContent = `${this.data} ${this.unit}`;
        dataLabel.classList.add('weather-data');
        card.appendChild(dataLabel);

        return card;
    }
}
