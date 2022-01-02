import CalculatorOperatorsProps from '../../interfaces/CalculatorOperatorsProps';
import { OpType, ops } from '../../OpType';
import '../../../styles/index.css';

const CalculatorOperators = (props: CalculatorOperatorsProps) => {

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

    const onDeleteLast = () => {
        if (props.calc === '') {
            return;
        }
        const value = props.calc.slice(0, -1);
        props.onUpdateCalc(value);
    }

    const onClear = () => {
        props.onUpdateCalc('');
        props.onUpdateResult('');
    }

    // view rendering

    return (
        <div className='operators'>
            <button
                onClick={(_) => {
                    onUpdateCalc(OpType.divide)
                }}>
                /
            </button>
            <button
                onClick={(_) => {
                    onUpdateCalc(OpType.multiply)
                }}>
                *
            </button>
            <button
                onClick={_ => {
                    onUpdateCalc(OpType.add)
                }}>
                +
            </button>
            <button
                onClick={_ => {
                    onUpdateCalc(OpType.sub)
                }}>
                -
            </button>
            <button
                onClick={onDeleteLast}>
                DEL
            </button>
            <button
                onClick={onClear}>
                CLR
            </button>
        </div>
    );
}

export default CalculatorOperators;