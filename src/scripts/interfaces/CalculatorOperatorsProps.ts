interface CalculatorOperatorsProps {
    calc: string;
    result: string;

    onUpdateCalc: (value: string) => void;
    onUpdateResult: (value: string) => void;
}

export default CalculatorOperatorsProps;