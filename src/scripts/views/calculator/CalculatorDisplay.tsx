import CalculatorDisplayProps from '../../interfaces/CalculatorDisplayProps';
import '../../../styles/index.css';

const CalculatorDisplay = (props: CalculatorDisplayProps) => {
    return (
        <div className='display'>
            <div className='innerDisplay'>
                {props.result.length > 0 ? <span>({props.result})</span> : ''}
                &nbsp;
                {props.calc || 0}
            </div>
        </div>
    );
}

export default CalculatorDisplay;