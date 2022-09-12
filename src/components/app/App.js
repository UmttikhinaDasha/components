import '../../scss/less/style.scss';
import Button from '../buttons/Button';

function App() {
    return (
        <div className='wrapper'>
            <div className='wrapper__row'>
                <Button />
                <Button loading={true} />
                <Button disabled={true} />
                <Button size={'medium'} />
                <Button size={'small'} />
            </div>
            <div className='wrapper__row'>
                <Button theme={'secondary'} />
                <Button theme={'secondary'} loading={true} />
                <Button theme={'secondary'} disabled={true} />
                <Button theme={'secondary'} size={'medium'} />
                <Button theme={'secondary'} size={'small'} />
            </div>
            <div className='wrapper__row'>
                <Button theme={'subtle'} />
                <Button theme={'subtle'} loading={true} />
                <Button theme={'subtle'} disabled={true} />
                <Button theme={'subtle'} size={'medium'} />
                <Button theme={'subtle'} size={'small'} />
            </div>
            <div className='wrapper__row'>
                <Button theme={'text'} />
                <Button theme={'text'} loading={true} />
                <Button theme={'text'} disabled={true} />
                <Button theme={'text'} size={'medium'} />
                <Button theme={'text'} size={'small'} />
            </div>
        </div>
    );
}

export default App;
