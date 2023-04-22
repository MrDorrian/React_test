import styles from './FlexContainer.module.scss'
import PropTypes from "prop-types";

export const FlexContainer = (props) => {
    const {children, alignItems, justifyContent} = props;
    const flexStyle = {
        justifyContent, alignItems
    }
    return <div style={flexStyle} className={styles.flexContainer}>
        {children}
    </div>
}

FlexContainer.propsType = {
    children: PropTypes.element.isRequired,
    justifyContent: PropTypes.string.isRequired,
    alignItem: PropTypes.string.isRequired,
}
