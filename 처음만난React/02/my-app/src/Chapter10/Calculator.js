import React from 'react';
import TemperatureInput from './TemperatureInput';

function BoilingVerdict(props) {
    if (props.celcius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celcius) {
    return (celcius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scale: 'c',
            temperature: ''
        }
    }

    handleCelsiusChange = (temperature) => {
        this.setState({ scale:'c', temperature: temperature });
    }

    handleFehrenheitChange = (temperature) => {
        this.setState({ scale:'f', temperature: temperature });
    }

    render() {
        const { scale, temperature } = this.state;
        const celcius = scale === 'f' ? tryConvert(temperature, toCelcius) : temperature;
        const fehrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celcius}
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    scale='f'
                    temperature={fehrenheit}
                    onTemperatureChange={this.handleFehrenheitChange} />

                <BoilingVerdict
                    celcius={parseFloat(celcius)} />
            </div>
        )

    }
}

export default Calculator;