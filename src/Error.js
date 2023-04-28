import Button from './Components/CONSTANTS/Button'
import './Error.css'

const Error = ({handleClick, handleClickValue}) => {
  return (
    <div className='Error'>
        <h3>OPPS!... there has been some error, try reconecting again</h3>
        <Button onclick={() => handleClick(handleClickValue)} {...{width: 100, background: '#2C5663', color: '#f1f1f1', value: 'Retry'}} />
    </div>
  )
}

export default Error