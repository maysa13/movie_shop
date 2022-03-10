import React, { useState , useEffect , useContext} from "react";
import { Layout , Input ,Row, Col , Divider ,Image , Avatar, Badge,Modal,Button} from 'antd';
import Icon from '@ant-design/icons';
import { ShoppingCartOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import ContentShow from './contentShow'
import MovieApi from '../api/movieApi'

/* Store */
import {TestContext} from '../store/TestContext';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const movieApi = new MovieApi;


export default function Mainpage() {
    const {
        uiControlData,
        inputSearch,
        setInputSearch,
        setProductInCart,
        productInCart,
        setCountInCart,
        countInCart,
        dataShow, setDataShow
    } = useContext(TestContext);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [allpiece, setAllpiece] = useState();
    // const [dataShow, setDataShow] = useState([]);

    useEffect(() => {
        callGetMovie()
    },[])
    const onSearch = value => {
        console.log(value);
        setInputSearch(value)
        callGetMovie(value)
    }
    const getPhoto = (results) => {
        console.log('dataShow',results)
        let dataGetPhoto = results.map((item, inx)=>{
            if(item.poster_path){
                item.poster_path = "https://image.tmdb.org/t/p/original"+item.poster_path
                item.count = 0
                item.piece = item.vote_average * 25
                return item
            }
        })
        
        console.log('dataGetPhoto',dataGetPhoto)
        setDataShow(dataGetPhoto)

    }
    const showPopupDetail = () => {
        console.log('countInCart',countInCart)
        setIsModalVisible(true);
        var sum = 0;
        let discount = 0;
        let totalValue = 0;
        for(let i=0;i<productInCart.length;i++){
            sum = sum+parseInt(productInCart[i].piece)*productInCart[i].count
        }
        if(countInCart>3 && countInCart<=5){
            discount = 5 / 100;
            totalValue = sum - (sum * discount);
            console.log('discount',totalValue.toFixed(2));
        }
        else if(countInCart > 5){
            discount = 10 / 100;
            totalValue = sum - (sum * discount);
            console.log('discount',totalValue.toFixed(2));
        }
        else{
            totalValue = sum
        }
        setAllpiece(totalValue.toFixed(2))
        console.log('sum',sum)

    }
    
    
    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        let dataGetPhoto = dataShow.map((item, inx)=>{
            if(item.poster_path){
                item.poster_path = "https://image.tmdb.org/t/p/original"+item.poster_path
                item.count = 0
                item.piece = item.vote_average * 25
                return item
            }
        })
        
        console.log('dataGetPhoto',dataGetPhoto)
        setDataShow(dataGetPhoto)
        setIsModalVisible(false);
        setProductInCart([])
        setCountInCart(0)
    };
    const handleClose = () => {
        setIsModalVisible(false);
    };
    // สร้างไอค่อนโลโก้
    const PandaSvg = () => (
        <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
        <path
            d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
            fill="#6B676E"
            p-id="1143"
        />
        <path
            d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
            fill="#FFEBD2"
            p-id="1144"
        />
        <path
            d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
            fill="#E9D7C3"
            p-id="1145"
        />
        <path
            d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
            fill="#FFFFFF"
            p-id="1146"
        />
        <path
            d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
            fill="#6B676E"
            p-id="1147"
        />
        <path
            d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
            fill="#464655"
            p-id="1148"
        />
        <path
            d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
            p-id="1149"
        />
        <path
            d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
            fill="#464655"
            p-id="1150"
        />
        </svg>
    )
    const PandaIcon = props => <Icon component={PandaSvg} {...props} />;
    // สร้างไอค่อนโลโก้
    // call api
    const callGetMovie = (value) => {
        let input = ""
        if(value){
            input = value
        }
        else{
            input = inputSearch
        }
        movieApi.getTheMovie(input).then(data => {
            console.log('getTheMovie=======>',data)
            setDataShow(data.results)
            getPhoto(data.results)

        })
    }
    // call api

    return (
        <div>
            <Layout>
            <div style={{background: 'black',padding:'20px' , color : 'white'}}>
                {/* <div style={{background: 'linear-gradient(90deg, #275070, #EBAAB0, #275070)',padding:'20px'}}> */}
                    <Row justify="space-around" align="middle" >
                        <Col xs={8} sm={6} md={4} lg={2} xl={2}>
                            <PandaIcon style={{ fontSize: '80px' }} />
                        </Col>
                        <Col xs={15} sm={16} md={10} lg={12} xl={13}> <h1 style={{color : 'white'}}>โรงภาพยนต์</h1></Col>
                        <Col xs={24} sm={24} md={9} lg={8} xl={8}> 
                            <div style={{marginTop :'48px',marginBottom : '0px'}}>
                                <Row>
                                    <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <br></br>
                                        <span className="avatar-item">
                                            <Badge count={countInCart} >
                                                <Avatar shape="square" icon={<ShoppingCartOutlined />} onClick={showPopupDetail} style={{ backgroundColor: '#87d068' }}/>
                                            </Badge>
                                        </span>
                                    </Col>
                                    <Col xs={18} sm={18} md={20} lg={21} xl={21}>
                                        <span style={{fontWeight:'bold',textAlign:'left'}}>Search</span>
                                        <Search onSearch={onSearch} placeholder="Search" style={{ width: '100%',textAlign:'right' }} />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    {/* <br></br> */}
                    <Divider></Divider>
                </div>
                {/* <Content style={{background: 'black',padding: '20px'}}> */}
                <Content style={{background: 'linear-gradient(90deg, #275070, #EBAAB0, #275070)',padding: '20px'}}>
                    <ContentShow/>
                </Content>
                
            </Layout>
            <Modal title="สินค้าในตะกร้า" 
                visible={isModalVisible} 
                // onOk={handleOk} 
                onCancel={handleClose}
                okText="ไปหน้าชำระเงิน"
                cancelText="เคลียร์สินค้าในตะกร้า"
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        เคลียร์สินค้าในตะกร้า
                    </Button>,
                    <Button key="submit" type="primary" onClick={handleOk}>
                        ไปหน้าชำระเงิน
                    </Button>,
                  ]}
                >
                <div>
                    {productInCart.length>0 && productInCart.map((item,index)=>{
                        return(
                            <div key={index}>
                                <Row justify="space-between">
                                    <Col>{item.title}</Col>
                                    <Col>จำนวน  {item.count}  ชิ้น</Col>
                                </Row>
                                <Row justify="end">
                                    <Col>ราคาชิ้นล่ะ  {item.piece}  บาท</Col>
                                </Row>
                                <Divider></Divider>
                            </div>
                        )
                    })}
                    <Row justify="end">
                        {countInCart > 3 && countInCart <= 5 &&<Col style={{marginRight  :'10px'}}>ส่วนลด 5% เมื่อซื้อหนังมากกว่า 3 รายการ</Col>}
                        {countInCart > 5 && <Col style={{marginRight  :'10px'}}>ส่วนลด 10% เมื่อซื้อหนังมากกว่า 5 รายการ</Col>}
                        <Col>รวมเป็นเงิน  {allpiece}  บาท</Col>
                    </Row>
                </div>
            </Modal>
        </div>
    )
}
