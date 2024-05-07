import React from 'react'
import { Col } from 'antd'
import { WrapperHeader, WrapperHeaderAccount, WrapperText, WrapperTextHeaderSmall } from './style'
import {
    CaretDownOutlined,
    UserOutlined,
    ShoppingCartOutlined
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
function HeaderComponent() {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}>
                    <WrapperText>SHOP</WrapperText>
                </Col>
                <Col span={12}>
                    <ButtonInputSearch
                        size='large'
                        placeholder="input search text"
                        textButton="Tìm kiếm"
                        bordered={false}
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '30px' }} />
                        <div>
                            <WrapperTextHeaderSmall style={{ fontSize: '12px' }}>Đăng nhập/Đăng ký</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall style={{ fontSize: '12px' }}>Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                        <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent
