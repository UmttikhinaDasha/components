import { LIST_BUTTON_SiZE, LIST_BUTTON_THEME } from '../../utils/lists';

const Button = (props) => {
    const {
        theme = 'primary',
        size = 'large',
        loading = false,
        disabled = false,
    } = props;

    const isLoading = loading ? 'button_loading' : null;
    clsx(button, loading && 'button_loading');
    return (
        <button
            className={`button
            ${LIST_BUTTON_THEME[theme]}
            ${LIST_BUTTON_SiZE[size]}
            ${isLoading}`}
            disabled={disabled}>
            <span className='button__text'>Button</span>
        </button>
    );
};

export default Button;
