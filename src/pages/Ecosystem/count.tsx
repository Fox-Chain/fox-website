import { useState, useEffect } from "react";
import { connect } from 'umi';
const Page = (props) => {
    const [count, setCount] = useState(0);
    const { type } = props;
    useEffect(() => {
        const { dispatch } = props;
        dispatch({
            type: 'global/getSubCategory',
            payload: {
                type: type
            },
            callback: response => {
                if (response.code == 0)
                    setCount(response.data);

            }
        });
    }, [])
    return <span>
        {count}
    </span>
}

export default connect(({ global }) => ({
    global
}))(Page)