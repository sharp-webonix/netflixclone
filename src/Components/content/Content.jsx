import './Content.css';
import RowData from '../../Constants/URLS';
import Row from '../Row/Row';

export default function Content() {
  return (
    <div className='content-wrapper'>
      {RowData.map((el) => {
        return <Row title={el.title} url={el.url} />;
      })}
    </div>
  );
}

// 00cc4b4770c22d9316433c56df5c5eae