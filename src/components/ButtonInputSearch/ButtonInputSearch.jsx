import React from 'react'
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

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
        <div style={{ display: 'flex', backgroundColor: '#fff'}}>
            <Input
                size={size}
                placeholder={placeholder}
                bordered={bordered}
                style={{ backgroundColor: backgroundColorInput, border: 'none' }} />
            <Button
                size={size}
                icon={<SearchOutlined />}
                bordered={bordered}
                style={{
                    border: 'none',
                    background: backgroundColorButton,
                    color: colorButton,
                    borderRadius: '0px'
                }}>
                <span style={{color: colorButton}}>{textButton}</span>
            </Button>
        </div>
    )
}

export default ButtonInputSearch
