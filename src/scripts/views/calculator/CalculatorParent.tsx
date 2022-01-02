import React from 'react';
import CalculatorOperators from './CalculatorOperators';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorDigits from './CalculatorDigits';
import '../../../styles/index.css';

const CalculatorParent = () => {

    const [calc, setCalc] = React.useState("");
    const [result, setResult] = React.useState("");

    const onUpdateCalc = (value: string) => {
        setCalc(value);
    }

    const onUpdateResult = (value: string) => {
        setResult(value);
    }

    return (
        <div className='parent'>
            <div className="calculator">
                <CalculatorDisplay
                    calc={calc}
                    result={result} />
                <CalculatorOperators
                    calc={calc}
                    result={result}
                    onUpdateCalc={(value: string) => {
                        onUpdateCalc(value);
                    }}
                    onUpdateResult={(value: string) => {
                        onUpdateResult(value);
                    }} />
                <CalculatorDigits
                    calc={calc}
                    result={result}
                    onUpdateCalc={(value: string) => {
                        onUpdateCalc(value);
                    }}
                    onUpdateResult={(value: string) => {
                        onUpdateResult(value);
                    }} />
            </div>
        </div>
    );
}

export default CalculatorParent;