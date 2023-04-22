import PropTypes from "prop-types";
import styles from './ImageWrapper.module.scss'

export const ImageWrapper = (props) => {
    const {children, width, height} = props;
    const inlineStyle = {
        width,
        height
    }
    return <div style={inlineStyle} className={styles.wrapper}>
        {children}
    </div>
}

ImageWrapper.propTypes = {
    children: PropTypes.element.isRequired, //react element
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}
