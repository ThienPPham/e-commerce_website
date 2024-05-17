import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import InputComponent from '../InputComponent/InputComponent';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

function ButtonInputSearch(props) {
    const { size,
        placeholder,
        textButton,
        bordered,
        backgroundColorInput = '#fff',
        backgroundColorButton = 'rgb(13, 92, 182)',
        colorButton = '#fff'
    } = props
    return (
        <div style={{ display: 'flex', backgroundColor: '#fff' }}>
            <InputComponent
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput, border: 'none' }} />
            <ButtonComponent
                size={size}
                icon={<SearchOutlined />}
                styleButton={{
                    border: 'none',
                    background: backgroundColorButton,
                    color: colorButton,
                    borderRadius: '0px'
                }}
                textButton={textButton}
                styleTextButton={{ color: colorButton }}>
            </ButtonComponent>
        </div>
    )
}

export default ButtonInputSearch
