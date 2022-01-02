import CalculatorOperatorsProps from '../../interfaces/CalculatorOperatorsProps'
import { ops } from '../../OpType';
import '../../../styles/index.css';

const CalculatorDigits = (props: CalculatorOperatorsProps) => {

    // UI factory function

    const makeDigitButtons: () => JSX.Element[] = () => {
        const digits: JSX.Element[] = [];

        for (let i = 0; i < 9; i++) {
            digits.push(
                <button
                    key={i + 1}
                    onClick={(_) => {
                        onUpdateCalc((i + 1).toString())
                    }}>
                    {i + 1}
                </button>
            );
        }

        return digits;
    }

    // action handlers

    const onUpdateCalc = (value: string) => {
        if (
            (ops.includes(value) && props.calc === '') ||
            (ops.includes(value) && ops.includes(props.calc.slice(-1)))
        ) {
            return;
        }
        props.onUpdateCalc(props.calc + value);

        if (!ops.includes(value)) {
            props.onUpdateResult(eval(props.calc + value).toString());
        }
    }

    const onCalculate = () => {
        props.onUpdateCalc(eval(props.calc));
    }

    // view rendering

    return (
        <div className='digits'>
            {makeDigitButtons()}
            <button
                onClick={_ => {
                    onUpdateCalc('0')
                }}>
                0
            </button>
            <button
                onClick={_ => {
                    onUpdateCalc('.')
                }}>
                .
            </button>
            <button
                onClick={onCalculate}>
                =
            </button>
        </div>
    );
}

export default CalculatorDigits;