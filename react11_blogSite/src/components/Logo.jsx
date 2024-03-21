import icon from '../assets/icon.svg';

function Logo({width = '100px'}) {
    return (
        <div className=' object-cover'>
            <img src={icon} alt="Logo" width={width} />
        </div>
    );
}

export default Logo;