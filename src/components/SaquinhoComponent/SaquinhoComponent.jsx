import { TbPaperBag } from 'react-icons/tb';
import './SaquinhoComponent.css';
import candies from '../../constants/candies';

const SaquinhoComponent = ({ list }) => {
    return (
        <div id='SaquinhoComponent'>
            <TbPaperBag color='darkgoldenrod' size={'4rem'} />
            <div className='overlay'>{list?.length ? <ul>{
                list.map((candy, i) => {
                    const candyData = candies.find(c => c.id === candy);
                    return (
                        <li key={`${candy}-${i}`} style={{ borderBottom: '1px solid #ccc', marginBottom: '5px', paddingBottom: '5px' }}>
                            {candyData ? candyData.name : 'Item não encontrado'}
                        </li>
                    )
                })}</ul> : 
                <>Por enquanto nada aqui...</>}</div>
        </div>
    );
};

export default SaquinhoComponent;