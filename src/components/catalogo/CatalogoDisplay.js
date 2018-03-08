import React from 'react';
import {Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import {CardDisplay} from '../card/CardDisplay';
const SubMenu = Menu.SubMenu;


export const CatalogoDisplay = ({}) => {
    // handleClick = (e) => {
    //     console.log('click ', e);
    // }
    return (
        <div className="fl box_cat">
            <div className="cat_menu menu">
                <Menu
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="dingding" /><span>Moods</span></span>}>
                            <Menu.Item key="1">Urbano</Menu.Item>
                            <Menu.Item key="2">Western</Menu.Item>
                            <Menu.Item key="3">Regionales</Menu.Item>
                            <Menu.Item key="4">Europeo</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Material</span></span>}>
                        <Menu.Item key="5">Palma</Menu.Item>
                        <Menu.Item key="6">Paja</Menu.Item>
                        <Menu.Item key="7">Lona</Menu.Item>
                        <Menu.Item key="8">Castor</Menu.Item>
                        <Menu.Item key="9">Nylon</Menu.Item>
                        <Menu.Item key="10">Poliester</Menu.Item>
                        <Menu.Item key="11">Piel</Menu.Item>
                        <Menu.Item key="12">Lana</Menu.Item>
                        <Menu.Item key="13">Fieltro</Menu.Item>
                        <Menu.Item key="14">Fieltro de Lana</Menu.Item>
                        <Menu.Item key="15">Fibras Naturales</Menu.Item>
                        <Menu.Item key="16">Lino</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="slack" /><span>Número de X</span></span>}>
                        <Menu.Item key="17">4x</Menu.Item>
                        <Menu.Item key="18">6x</Menu.Item>
                        <Menu.Item key="19">10x</Menu.Item>
                        <Menu.Item key="20">11x</Menu.Item>
                    </SubMenu>

                    <SubMenu key="sub5" title={<span><Icon type="pushpin" /><span>Hormas</span></span>}>
                        <Menu.Item key="21">Marlboro</Menu.Item>
                        <Menu.Item key="22">Rodeo</Menu.Item>
                        <Menu.Item key="23">Pro Rodeo</Menu.Item>
                        <Menu.Item key="24">Maverick</Menu.Item>
                        <Menu.Item key="25">Taco</Menu.Item>
                        <Menu.Item key="26">Ultimate</Menu.Item>
                        <Menu.Item key="27">Este-Oeste</Menu.Item>
                        <Menu.Item key="28">Denver</Menu.Item>
                        <Menu.Item key="29">8 Segundos</Menu.Item>
                        <Menu.Item key="30">Cowboy</Menu.Item>
                        <Menu.Item key="31">Larry</Menu.Item>
                        <Menu.Item key="32">Cassidy</Menu.Item>
                        <Menu.Item key="33">Chaparral</Menu.Item>
                        <Menu.Item key="34">Roper</Menu.Item>
                        <Menu.Item key="35">Texas</Menu.Item>
                        <Menu.Item key="36">1951</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" title={<span><Icon type="setting" /><span>Estilo</span></span>}>
                        <Menu.Item key="37">Vestir/Etiqueta</Menu.Item>
                        <Menu.Item key="38">Casual</Menu.Item>
                        <Menu.Item key="39">Vaqueros</Menu.Item>
                        <Menu.Item key="39">Viajero</Menu.Item>
                        <Menu.Item key="40">Deportivos</Menu.Item>
                        <Menu.Item key="41">Exóticos</Menu.Item>
                        <Menu.Item key="42">Trilby (a la corta)</Menu.Item>
                        <Menu.Item key="43">Player</Menu.Item>
                        <Menu.Item key="44">Porkpie</Menu.Item>
                        <Menu.Item key="45">Fedora</Menu.Item>
                        <Menu.Item key="46">Bombin</Menu.Item>
                        <Menu.Item key="47">Capelina</Menu.Item>
                        <Menu.Item key="48">Cloche</Menu.Item>
                        <Menu.Item key="48">Canotier</Menu.Item>
                    </SubMenu>

                </Menu>

            </div>
            <div className="cat_product">
                <div className="prod flex">
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1733/34c64e8911b8f8eff21cdb3b181977e548821aaea99bc35d42281b327a2548e8a/A" />
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw8c456871/images/zoom/10023133_3-4_front.jpg?sw=680&sh=680" />
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1743/0e293772b0dab658512d3428d1da2c55659193d19016c4790d13dc10c79ee0b9a/A"/>
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw89dfc4b7/images/zoom/10018693_3-4_front.jpg?sw=680&sh=680"/>
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1733/34c64e8911b8f8eff21cdb3b181977e548821aaea99bc35d42281b327a2548e8a/A" />
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw8c456871/images/zoom/10023133_3-4_front.jpg?sw=680&sh=680" />
                    <CardDisplay img="http://d3b962r9eea4ib.cloudfront.net/magento-84397813/8/1743/0e293772b0dab658512d3428d1da2c55659193d19016c4790d13dc10c79ee0b9a/A"/>
                    <CardDisplay img="http://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw89dfc4b7/images/zoom/10018693_3-4_front.jpg?sw=680&sh=680"/>
                </div>
            </div>

        </div>
    );
};