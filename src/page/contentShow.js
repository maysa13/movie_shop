import React, { useState , useEffect , useContext} from "react";
import { Layout , Input ,Row, Col , Divider ,Image , Card, Button ,Tooltip} from 'antd';
import Icon from '@ant-design/icons';
import { ShoppingCartOutlined , PlusSquareOutlined , MinusSquareOutlined , EditOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

/* Store */
import {TestContext} from '../store/TestContext';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


export default function ContentShow() {
    const {
        uiControlData,
        inputSearch,
        setInputSearch,
        setProductInCart,
        productInCart,
        countInCart,
        setCountInCart,
        dataShow
    } = useContext(TestContext);
    const [product , setProduct] = useState([])
    // const [productM , setProductM] = useState([])
    useEffect(() => { 
        // console.log('productInCart',productInCart) 
        // if(productM.length===0 || productInCart.length===0){
        //     data.map((a , index)=>{
        //         return a.count = 0
        //     })
        //     setProductM(data)
        //     setData(data)
        // }
    });
    
    const addCart = (item,index) => {
        const mapProduct = productInCart.filter((e) => e.id === item.id)
        console.log('mapProduct',mapProduct)
        if(mapProduct.length!==0){
            productInCart.map((p , index)=>{
                if(p.id === item.id){
                    return p.count = p.count+1
                }
            })
        }
        else{
            item.count = 1
            productInCart.push(item)
        }
        console.log('product',productInCart)
        setProductInCart(productInCart)
       

        // productM[index].count=productM[index].count+1;
        // setProductM(productM)
        // console.log('productM',productInCart)
        var sum = 0;
        for(let i=0;i<productInCart.length;i++){
            sum += productInCart[i].count;
        }
        setCountInCart(sum)
    }
    const deleteCart = (item,index) => {
        
        // productM[index].count=productM[index].count-1;
        // setProductM(productM)
        productInCart.map((d,inx)=>{
            if(d.id === item.id){
                return d.count = d.count-1
            }
        })
       
        console.log('productInCart',productInCart)
        var sum = 0;
        for(let i=0;i<productInCart.length;i++){
            sum += productInCart[i].count;
        }
        const deleteProduct = productInCart.filter((e) => e.count !== 0)
        console.log('deleteProduct',deleteProduct)
        setCountInCart(sum)
        setProductInCart(deleteProduct)
    }

    return (
        <div> 
            <Row>
                {dataShow.length!==0 && dataShow.map((item , inx) => {
                    return(
                        <div key = {inx} style={{padding:'10px',textAlign:'center'}}>
                            <Card size="small" style={{ width: 190 , background : 'black' , color : 'white'}} className="site-card-wrapper">
                                <Row style={{padding : '4px'}} justify="center">
                                    <Col>
                                        <Tooltip placement="right" title={item.overview}>
                                            <Image
                                                width="100%"
                                                height="100%"
                                                src={item.poster_path}
                                            />
                                        </Tooltip>
                                        
                                    </Col>
                                </Row>
                                <Row justify="center">
                                    <Col style={{marginRight : '8px',marginTop:'5px',fontWeight:'bold'}}>
                                        {countInCart===0 && <span style={{color :'red'}}>0</span>}
                                        {item.count!==0 && countInCart!==0 && <span style={{color :'#87d068'}}>{item.count}</span>}
                                        {item.count===0 && countInCart!==0 &&<span style={{color :'red'}}>{item.count}</span>}
                                    </Col>
                                    <Col>
                                        <Button icon={<PlusSquareOutlined/>} onClick={()=>{addCart(item,inx)}}></Button>
                                    </Col>
                                    <Col>
                                        <Button icon={<MinusSquareOutlined/>} onClick={()=>{deleteCart(item,inx)}} disabled={item.count===0}></Button>
                                    </Col>
                                    <Col>
                                        {/* <Button icon={<EditOutlined/>}></Button> */}
                                    </Col>
                                </Row>
                                <Row style={{padding : '4px'}}>
                                    <Col>
                                        <h3 style={{color : 'white'}}>{item.title}</h3>
                                        {/* <span>{item.formatted_address}</span> */}
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                        )
                    })
                }
            </Row>
        </div>
    )
}
