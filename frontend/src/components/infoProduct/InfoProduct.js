import './infoProduct.css';

const InfoProduct = ({desDetails}) =>{
  return (
    <div className='infoProduct'>
        <p>
            {desDetails}
        </p>
    </div>
  )
}

export default InfoProduct