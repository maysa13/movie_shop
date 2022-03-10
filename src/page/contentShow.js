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
    const [productM , setProductM] = useState([])
    // ดาต้าจำลอง
    const [data, setData] = useState([
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "ร้านหัวมุมกลาง ไก่อบถังมิสเตอร์ไฮ้ สาขา ตลาดอินดี้ปิ่นเกล้า ซ. 1 เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7773676,
                "lng" : 100.4841045
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77860637989272,
                    "lng" : 100.4853936798927
                },
                "southwest" : {
                    "lat" : 13.77590672010728,
                    "lng" : 100.4826940201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่าง (อบถัง) มิสเตอร์ไฮ้ สาขาอินดี้ปิ่นเกล้า",
        "opening_hours" : {
            "open_now" : true
        },
        "photos" : [
            {
                "height" : 2048,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/107296317634236567986\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBgwQ4lr2rzMgLX-9YzoA5cnxFbONI7uaHEZw81IikMj9v9eWyP6uKE4Ro_cAH-PmcPyheJEiBy9iGtJtBsIGKWfDy_4o9VfwHO5u7r51-5kGz4NboO6N4UeX6yE4QoXz6aHOQG4_uL5ISpNZGm7qWcNHfKtaJzB1LvutY4YTXMHKUy",
                "width" : 2048
            }
        ],
        "place_id" : "ChIJrSZnw46Z4jARWcr1m3atB5g",
        "plus_code" : {
            "compound_code" : "QFGM+WJ กรุงเทพมหานคร",
            "global_code" : "7P52QFGM+WJ"
        },
        "rating" : 5,
        "reference" : "ChIJrSZnw46Z4jARWcr1m3atB5g",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 11
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "453/59 ซ. จรัญสนิทวงศ์ 35 แขวง บางขุนศรี เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.75903,
                "lng" : 100.469134
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.76044667989272,
                    "lng" : 100.4704809298927
                },
                "southwest" : {
                    "lat" : 13.75774702010728,
                    "lng" : 100.4677812701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างประสิทธิ์",
        "opening_hours" : {
            "open_now" : true
        },
        "photos" : [
            {
                "height" : 1530,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/114962250047605451463\"\u003eไก่ย่างประสิทธิ์\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAkJJ9jXThxvY6EDeONpqDlg-eKn-bOEAi2WLaGzAWxr4RpRtvBZ-_jl_OHcX499-eFHd4WZfjKEZPEpyqjtkAfBGjM3f1eO2MsLKW698p5Wq5N9fLEqRcPBGc1G7XAdvKIE_jwyz4m1XPVL_peff-lT5FKhgBbVBk1YeX16ZGZimaz",
                "width" : 2048
            }
        ],
        "place_id" : "ChIJMUfG6r2Z4jARykmamn_nL2A",
        "plus_code" : {
            "compound_code" : "QF59+JM กรุงเทพมหานคร",
            "global_code" : "7P52QF59+JM"
        },
        "rating" : 0,
        "reference" : "ChIJMUfG6r2Z4jARykmamn_nL2A",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 0
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "ซ. จรัญสนิทวงศ์ 75 แขวง บางพลัด เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7893484,
                "lng" : 100.498771
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.79069272989272,
                    "lng" : 100.5001159298927
                },
                "southwest" : {
                    "lat" : 13.78799307010728,
                    "lng" : 100.4974162701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่าง 5 ดาว จรัญสนิทวงศ์ 75",
        "opening_hours" : {
            "open_now" : true
        },
        "photos" : [
            {
                "height" : 1368,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/114420903956260814026\"\u003eeak2478\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBPxXJiD1vsurfjKgNAh7WB9pPfOryse1w4tIIieJ1016AEVoEZp-ySdRZQrbeIa5HbKB4-4fBuuhwJRPBzI2TEZbTuLo3dLaE0gtvpZuA-bJ86U0_h935wPXzHn9b7PGh3RHRWcSXm6D2KW0xasvxXldWoxjrp8Nx9WwEEfPhKeyC4",
                "width" : 1080
            }
        ],
        "place_id" : "ChIJL1-59vKb4jAR9XnHMKmtkgA",
        "plus_code" : {
            "compound_code" : "QFQX+PG กรุงเทพมหานคร",
            "global_code" : "7P52QFQX+PG"
        },
        "rating" : 4,
        "reference" : "ChIJL1-59vKb4jAR9XnHMKmtkgA",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 4
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "359 แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7751633,
                "lng" : 100.4762133
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77646802989272,
                    "lng" : 100.4776074798927
                },
                "southwest" : {
                    "lat" : 13.77376837010728,
                    "lng" : 100.4749078201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่แดงในตำนาน",
        "opening_hours" : {
            "open_now" : true
        },
        "photos" : [
            {
                "height" : 3024,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/117024142706993340641\"\u003eNaritsara S\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAf02TvsW_u-7rSF3DHssuDSAbQexs8KmxY2VgwXgI0fHfSlhfU-EW9Oi7A0xH9A549HlIk_5aA0XDmZPwKk3AyX2vhrT-evf8JfsTt8iEpLs7kd2R75f9Eu7AOAImtVsuag2ysEyUE-6u12Sxw2IEmeCgxUifoFnwxS68GgDkPbAVU",
                "width" : 4032
            }
        ],
        "place_id" : "ChIJyQ54sjqZ4jARFsQiygRBi1A",
        "plus_code" : {
            "compound_code" : "QFGG+3F กรุงเทพมหานคร",
            "global_code" : "7P52QFGG+3F"
        },
        "rating" : 5,
        "reference" : "ChIJyQ54sjqZ4jARFsQiygRBi1A",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "74 ซอย 46 แขวง บางยี่ขัน เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7789687,
                "lng" : 100.4875995
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.78031582989272,
                    "lng" : 100.4889542298927
                },
                "southwest" : {
                    "lat" : 13.77761617010728,
                    "lng" : 100.4862545701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่าง 5 ดาว จรัญ 46",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 4032,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/109031711762812294594\"\u003eวีระสิทธิ์ มีอำพล\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBFz9xNrH1xf4Xr85_3W6KLLEa7_gmBuDD5gW6I-l79A6PzvUi0necI0-8zWW0WHiOEfactht2vI3upNj2bON-WKMDLzByzVK4tVVx3tWYTIy5a_PIDw1zRra9WbbbpX0HmyuatwiCfGlcn9Q5Pm3ldepEhMgifxl4HgdgINq8BEzZL",
                "width" : 3024
            }
        ],
        "place_id" : "ChIJXzAM93OZ4jARLkvg66oAuaA",
        "plus_code" : {
            "compound_code" : "QFHQ+H2 กรุงเทพมหานคร",
            "global_code" : "7P52QFHQ+H2"
        },
        "rating" : 3,
        "reference" : "ChIJXzAM93OZ4jARLkvg66oAuaA",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 6
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "64, 19 ซอย อิสรภาพ 44 แขวง บ้านช่างหล่อ เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7524242,
                "lng" : 100.4819339
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.75372767989272,
                    "lng" : 100.4832882298927
                },
                "southwest" : {
                    "lat" : 13.75102802010728,
                    "lng" : 100.4805885701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างจ่าปรีชา",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 607,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/103707813656038553901\"\u003eNamfon Srisomboon\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDun5iclJa1AnTZ1rjDncSoxvfrhXvGrSnjN_6vSHuL2FfyS1D9sLleRA18kIk2jtTaa1Ew9unYCboTzPmAT8rD1l2WjZvVoWFyGYUVd-i2J3E3NeG5x5a62MiRNIRX52wom6xSjc51UNXoVFBF8lVNPJcG7cyqTgDtxkRq9tGUbqxQ",
                "width" : 1080
            }
        ],
        "place_id" : "ChIJgReOJqSZ4jARsQccIlprTi0",
        "plus_code" : {
            "compound_code" : "QF2J+XQ กรุงเทพมหานคร",
            "global_code" : "7P52QF2J+XQ"
        },
        "rating" : 4.7,
        "reference" : "ChIJgReOJqSZ4jARsQccIlprTi0",
        "types" : [
            "meal_takeaway",
            "restaurant",
            "food",
            "point_of_interest",
            "establishment"
        ],
        "user_ratings_total" : 29
        },
        {
        "business_status" : "CLOSED_TEMPORARILY",
        "formatted_address" : "7/3, อาคารสำนักงานเซ็นทรัล ทาวเวอร์ บี ปิ่นเกล้า ถนน บรมราชชนนี แขวง อรุณอมรินทร์ เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7780601,
                "lng" : 100.4759719
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77947022989272,
                    "lng" : 100.4778303298927
                },
                "southwest" : {
                    "lat" : 13.77677057010728,
                    "lng" : 100.4751306701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างหนังกรอบป้าแก้ว",
        "permanently_closed" : true,
        "photos" : [
            {
                "height" : 3000,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/100480405206574179897\"\u003enok moo\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEDbAmgukkew-2MNifc_FUoOdk7MykX-Y8g-E7l8W7eM0R4rfed0vj2gs0Syl4b_nSQXV7JBqw8rJVCfOFipUCLekoVl-6UYCOeQucdWojaZiaBo2q_tyiSQXriIubbu0_ejCFeAzbohHr9MUflL083cWKQWn39ZUouxc_BG4cA9Jsv8",
                "width" : 4000
            }
        ],
        "place_id" : "ChIJLf9oq9yZ4jARvvVAaRxmOBA",
        "plus_code" : {
            "compound_code" : "QFHG+69 กรุงเทพมหานคร",
            "global_code" : "7P52QFHG+69"
        },
        "rating" : 0,
        "reference" : "ChIJLf9oq9yZ4jARvvVAaRxmOBA",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 0
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "ซอย บางกรวย-ไทรน้อย 17 ตำบล บางกรวย อำเภอบางกรวย นนทบุรี 11130 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7972042,
                "lng" : 100.4888699
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.79855272989272,
                    "lng" : 100.4901921298927
                },
                "southwest" : {
                    "lat" : 13.79585307010728,
                    "lng" : 100.4874924701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างบางตาล",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 3840,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/107839739326339404026\"\u003eTiti Wongprasert\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAVEib6u8qaHDicR_ljkzEJs9JGBEiptUqbTJziuatCIuv1k80-yIYZb-iV4YznkCuajGYczcioUVmXfPR99llTAObJfJK76Vdpl4I8u03XKGxcDJpICkLoo9bnjncurHh_fHtO-iV3vxetB5PLIoFFVVojdiBjnr5yZ95nbq2jawNe",
                "width" : 5120
            }
        ],
        "place_id" : "ChIJj5oDOMyb4jARYbKnV0zpPA8",
        "plus_code" : {
            "compound_code" : "QFWQ+VG ตำบล บางกรวย อำเภอบางกรวย นนทบุรี",
            "global_code" : "7P52QFWQ+VG"
        },
        "rating" : 4,
        "reference" : "ChIJj5oDOMyb4jARYbKnV0zpPA8",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 13
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "บริษัท อุยเฮงคอนซูเมอร์ จำกัด 48 ซ. จรัญสนิทวงศ์ 40 แขวง บางยี่ขัน เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7729975,
                "lng" : 100.4862097
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77434807989272,
                    "lng" : 100.4875599798927
                },
                "southwest" : {
                    "lat" : 13.77164842010728,
                    "lng" : 100.4848603201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ร้าน ข้าวเส้น ก๋วยเตี๋ยวไก่ ข้าวไก่ย่าง",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 4000,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/109389998501568602602\"\u003eปัญญา โพธิ์แก้ว\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECqOeaAIbZ1nOJMW6qPLcAUeAq8kdur1kADQkDAD25k_LFVRfZVpxZyfA6N08kd4IphIeOHG1kfZb5W76vCm3qROI3QfQ_g_TGDURnYmimIJroveBTSU6O_yuVwBTMFeaZa9onL6M95rY6GThY2Ltg77-tfA0ey7IXIC10VxfpRNVX2",
                "width" : 3000
            }
        ],
        "place_id" : "ChIJO09BI7GZ4jAR4Gr0L0D7Ud8",
        "plus_code" : {
            "compound_code" : "QFFP+5F กรุงเทพมหานคร",
            "global_code" : "7P52QFFP+5F"
        },
        "rating" : 5,
        "reference" : "ChIJO09BI7GZ4jAR4Gr0L0D7Ud8",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 3
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "148/45 ซอย บางขุนนนท์ 20 ถ. บางขุนนนท์ แขวง บางขุนนนท์ เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.773169,
                "lng" : 100.4672288
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77451692989272,
                    "lng" : 100.4685750798927
                },
                "southwest" : {
                    "lat" : 13.77181727010728,
                    "lng" : 100.4658754201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "บังอร ไก่ย่าง",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 2448,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/106615655395738242419\"\u003eNisakan B.\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECPbUOlQzI3cEnQzYhj2RcG9Q-oAkIPCEI_Cr_0Qz1KlrNAZhs5ltCO4jljbTxId4cmUlVIlu_3tY03yOBMZs8vNqigzHqFsLhxualR0IejEtprJOYyK8nXhQ9AU_eTiqoO2iKi40angIPckEnYqg6huN_5t92QDv0CxNuFdax6EU7D",
                "width" : 3264
            }
        ],
        "place_id" : "ChIJ00lT3I2Z4jAR8OTHBHOl-Zw",
        "plus_code" : {
            "compound_code" : "QFF8+7V กรุงเทพมหานคร",
            "global_code" : "7P52QFF8+7V"
        },
        "price_level" : 1,
        "rating" : 4.1,
        "reference" : "ChIJ00lT3I2Z4jAR8OTHBHOl-Zw",
        "types" : [ "restaurant", "food", "point_of_interest", "store", "establishment" ],
        "user_ratings_total" : 146
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "45 ถนน สมเด็จพระปิ่นเกล้า แขวง บางยี่ขัน เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7715056,
                "lng" : 100.4841075
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77278592989272,
                    "lng" : 100.4853189298927
                },
                "southwest" : {
                    "lat" : 13.77008627010728,
                    "lng" : 100.4826192701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "เฮียหมีไก่ย่าง สาขาปิ่นเกล้า",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 1925,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/115893254821160186832\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECgCOBiGskyKFaM6kTT9vFheq0FUODEs5nUdSPDTYN5eBXfu6-pzcCAlrRUiQxhULqU2WNsif-1m-oJNOzG7-3UYmCPuQDxw5729tMRgKb0QeWY06wHbyYm-17CRl9lHt5JKaTvRLiWUdqrVaPiEUfyNjXCTyhz9Aar8rV0AjFI0R--",
                "width" : 2775
            }
        ],
        "place_id" : "ChIJz2uXefmZ4jARsVPN9yIYTwQ",
        "plus_code" : {
            "compound_code" : "QFCM+JJ กรุงเทพมหานคร",
            "global_code" : "7P52QFCM+JJ"
        },
        "rating" : 0,
        "reference" : "ChIJz2uXefmZ4jARsVPN9yIYTwQ",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 0
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "ตรอกประเสริฐ แขวง บางขุนนนท์ เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.769857,
                "lng" : 100.468853
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77123367989272,
                    "lng" : 100.4702570798927
                },
                "southwest" : {
                    "lat" : 13.76853402010728,
                    "lng" : 100.4675574201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ลิขิตไก่ย่าง",
        "opening_hours" : {
            "open_now" : false
        },
        "place_id" : "ChIJ9ecPlJGZ4jAR69UtSM-e3l4",
        "plus_code" : {
            "compound_code" : "QF99+WG กรุงเทพมหานคร",
            "global_code" : "7P52QF99+WG"
        },
        "rating" : 3,
        "reference" : "ChIJ9ecPlJGZ4jAR69UtSM-e3l4",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "167 ถนน ประชาธิปไตย แขวง บ้านพานถม เขตพระนคร กรุงเทพมหานคร 10200 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7621585,
                "lng" : 100.5026042
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.76342077989272,
                    "lng" : 100.5038868298927
                },
                "southwest" : {
                    "lat" : 13.76072112010728,
                    "lng" : 100.5011871701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "รถเข็นไก่ย่างลุงจ่อย Grilled chicken",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 4032,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/106009680494004169151\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uECspmYNe9FW7FkLxPgbS8Rv-4Vv2spK8Pi-vndaBy-vudBJRRxCBS6HIjkbWCRMNuqCytMbof-b-N9o0g8BY0jdP3NCgDAyFrctuIegZPXvsN7fknXVzvt-CrQyklAc39VfU6lHbz2_olusJQYn31fW73INOns_uOYIiqiSVMPaonZd",
                "width" : 3024
            }
        ],
        "place_id" : "ChIJ7W5zBTKZ4jARgIUbw-AOuX4",
        "plus_code" : {
            "compound_code" : "QG63+V2 กรุงเทพมหานคร",
            "global_code" : "7P52QG63+V2"
        },
        "rating" : 0,
        "reference" : "ChIJ7W5zBTKZ4jARgIUbw-AOuX4",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 0
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "620 ซ. จรัญสนิทวงศ์ 40 แขวง บางยี่ขัน เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7705492,
                "lng" : 100.4897412
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.77188002989272,
                    "lng" : 100.4910572298927
                },
                "southwest" : {
                    "lat" : 13.76918037010728,
                    "lng" : 100.4883575701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ข้าวไก่ทอด ไก่ย่าง",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 1080,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/102693113990042503734\"\u003eApilux Pranon\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBHCOnpbdkYGs6-dCU0jBNT1pDLDVHEeR_uVmbxfDAXZlPsilbGWooAJbkWfxwibyJ8H2P5ps8rQ30w2fDX7Q7up9S5CnZYZ-SJqNDk9vY_qC3YiHaaYKrPPeo4yYlJ7RA12eVubhyBib_cJVW5LE5NHhJ8sv-0N4WmtBy6rFmlOvEb",
                "width" : 1920
            }
        ],
        "place_id" : "ChIJ_ZT7V3eZ4jARRuoB-BzdJhQ",
        "plus_code" : {
            "compound_code" : "QFCQ+6V กรุงเทพมหานคร",
            "global_code" : "7P52QFCQ+6V"
        },
        "rating" : 4,
        "reference" : "ChIJ_ZT7V3eZ4jARRuoB-BzdJhQ",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "532 ซอย จรัญสนิทวงศ์ 79 แขวง บางพลัด เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7926322,
                "lng" : 100.5002276
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.79395732989272,
                    "lng" : 100.5015631798927
                },
                "southwest" : {
                    "lat" : 13.79125767010728,
                    "lng" : 100.4988635201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างบางพลัด",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 3024,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/104892447387587088813\"\u003eA Google User\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEA44wi-OK7EdvDvpTf7X8VFOnGTc9t96KGRzPDWgxqKSJZqEVqENGfXf4_-wt8JB6AOrCq73gj2Mb8qeHHstF7J2K6TmO6QC88-FGCYOUU6iQobRCLQYwkzDEOOqcnLXE9kj0lWb8hv5k1ed1qPVtsPFxSEbFHaVELK2rt_oK4oQ74g",
                "width" : 4032
            }
        ],
        "place_id" : "ChIJz6anSdub4jARPyWbJxCHVXk",
        "plus_code" : {
            "compound_code" : "QGV2+33 กรุงเทพมหานคร",
            "global_code" : "7P52QGV2+33"
        },
        "rating" : 4.3,
        "reference" : "ChIJz6anSdub4jARPyWbJxCHVXk",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 73
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "474 476 ศาลเจ้าพ่อเสือ เขตพระนคร กรุงเทพมหานคร 10200 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7535934,
                "lng" : 100.4984108
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.75494042989272,
                    "lng" : 100.4997854298927
                },
                "southwest" : {
                    "lat" : 13.75224077010728,
                    "lng" : 100.4970857701073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ไก่ย่างโบราณ",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 1152,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/115857853821168862068\"\u003eanuphon wongtippanad\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBNL_Ig2NelDFB5MGIjTpzohavk_tilAaOJ3MO_Fkv9ydd-KgvMR_mGhHnMUEcAOTXdeQIw5dv4fKFZhr5gf0rl7uwrUDpb-uIbEdKRHGqn2P_1qmSbgxiLYFQNBDldvbxZFtIjo9i-t9pxNN-5PaVZd_0dvfr9o5JGfpxPahllOtTn",
                "width" : 2048
            }
        ],
        "place_id" : "ChIJ8QpOLBKZ4jARH_XsR0eb0II",
        "plus_code" : {
            "compound_code" : "QF3X+C9 กรุงเทพมหานคร",
            "global_code" : "7P52QF3X+C9"
        },
        "rating" : 3.7,
        "reference" : "ChIJ8QpOLBKZ4jARH_XsR0eb0II",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 91
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "20 ซอย สมเด็จพระปิ่นเกล้า 2 แขวง บางยี่ขัน เขตบางพลัด กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7645881,
                "lng" : 100.4901307
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.76594902989272,
                    "lng" : 100.4915006798927
                },
                "southwest" : {
                    "lat" : 13.76324937010728,
                    "lng" : 100.4888010201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ร้านจุ้น ส้มตำ ไก่ย่าง",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 2048,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/117987071899003914212\"\u003eกินอยู่ดีโดยหมอนัด2\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAeRA2lxlYho07Bujw5KTcsBXY8K4AqSss-z-8vq-UlG_sC7MLOWNDETutihbcfqmGVyWCCe64pXp4Leq2EQmK4-xhiJ88GVj-sxMLnfMNCsVnavzTZ_-oTjM-0Ru68CmTVwrKzRsji6OdIvEqegH27tWO-dqubVwlm8bJvO25R6INr",
                "width" : 1536
            }
        ],
        "place_id" : "ChIJhws0B3SZ4jAREkAdhPYlw-s",
        "plus_code" : {
            "compound_code" : "QF7R+R3 กรุงเทพมหานคร",
            "global_code" : "7P52QF7R+R3"
        },
        "rating" : 5,
        "reference" : "ChIJhws0B3SZ4jAREkAdhPYlw-s",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "453, 59 ถนน จรัญสนิทวงศ์ แขวง บางขุนศรี เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7590118,
                "lng" : 100.4693362
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.76044132989272,
                    "lng" : 100.4706541798927
                },
                "southwest" : {
                    "lat" : 13.75774167010728,
                    "lng" : 100.4679545201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "เจี๊ยบไก่ย่าง",
        "opening_hours" : {
            "open_now" : true
        },
        "photos" : [
            {
                "height" : 1174,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/103262285523061344757\"\u003eเจี๊ยบไก่ย่าง\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAd8SEirfTZ_BQMvziglnjCu8Ff74oXab9qeraUQAxPla7YpnqFg0qhXQYqYPaY-bkY8bM_8rlIv4mXNgeGef3NJB2IbybBdGFVAcGfrsTtEQc5ZIZGRilxIptXAAkcaup9gfgJlipAJZvmQBbYTOO2s074FTUlo93yDtKtg637j40I",
                "width" : 2088
            }
        ],
        "place_id" : "ChIJbz666r2Z4jARFL8_1kjeWe4",
        "plus_code" : {
            "compound_code" : "QF59+JP กรุงเทพมหานคร",
            "global_code" : "7P52QF59+JP"
        },
        "rating" : 3,
        "reference" : "ChIJbz666r2Z4jARFL8_1kjeWe4",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "31, 1 ถนน พะเนียง แขวง วัดโสมนัส เขตป้อมปราบศัตรูพ่าย กรุงเทพมหานคร 10100 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.7609956,
                "lng" : 100.5094467
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.76239347989272,
                    "lng" : 100.5106759798927
                },
                "southwest" : {
                    "lat" : 13.75969382010728,
                    "lng" : 100.5079763201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "ลิขิตไก่ย่าง ราชดำเนิน",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 2250,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/102110994603931071325\"\u003eTomasz Kempa\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEAn7W0BWSAHN-ZkoQQvXAMAPPPAZgpZqBt2B7MKX2mzCkccPk4gA_IPZjNrHMux9lrouvbTzxOx0KndYJ2t6aG_esra1R2_90LVMipBZa3DgM1e7CGOipqY073LKsgZzNXqmw0Xc0JgtnrHPsQXcIWIa1slip002wSTi7wLYYlxJed2",
                "width" : 4000
            }
        ],
        "place_id" : "ChIJA-4ltUGZ4jARNEQSCOQF4kc",
        "plus_code" : {
            "compound_code" : "QG65+9Q กรุงเทพมหานคร",
            "global_code" : "7P52QG65+9Q"
        },
        "rating" : 4,
        "reference" : "ChIJA-4ltUGZ4jARNEQSCOQF4kc",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 147
        },
        {
        "business_status" : "OPERATIONAL",
        "formatted_address" : "111/28 ถ.บรมราชชนนี, แขวงอรุณอัมรินทร์, เขตบางกอกน้อย กรุงเทพมหานคร 10700 ไทย",
        "geometry" : {
            "location" : {
                "lat" : 13.78276,
                "lng" : 100.472628
            },
            "viewport" : {
                "northeast" : {
                    "lat" : 13.78406142989272,
                    "lng" : 100.4740374798927
                },
                "southwest" : {
                    "lat" : 13.78136177010728,
                    "lng" : 100.4713378201073
                }
            }
        },
        "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/restaurant-71.png",
        "icon_background_color" : "#FF9E67",
        "icon_mask_base_uri" : "https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet",
        "name" : "นิตยาไก่ย่าง ปิ่นเกล้า",
        "opening_hours" : {
            "open_now" : false
        },
        "photos" : [
            {
                "height" : 2391,
                "html_attributions" : [
                    "\u003ca href=\"https://maps.google.com/maps/contrib/106975529777608385321\"\u003eRatchanee Teepprasan\u003c/a\u003e"
                ],
                "photo_reference" : "Aap_uEBMaX91JjlmilO3mJK05Atq2VX0EdjacrL-EJ0lvlCXNe-CcI6LX3x_AKZ3RKADFrYmSgObrFKN7-U82LbDZ6oDTIq1gKzM6guiDctoAlecMBvhIBX7A4QcI_flAIOXIO253XNzkxjR3rbPZJYIt5ygQSiLtZfNX4GBrQ_5LsXzmLX9",
                "width" : 3204
            }
        ],
        "place_id" : "ChIJD_I5HYiZ4jARwjlvxlDNhIM",
        "plus_code" : {
            "compound_code" : "QFMF+43 กรุงเทพมหานคร",
            "global_code" : "7P52QFMF+43"
        },
        "price_level" : 2,
        "rating" : 4.1,
        "reference" : "ChIJD_I5HYiZ4jARwjlvxlDNhIM",
        "types" : [ "restaurant", "food", "point_of_interest", "establishment" ],
        "user_ratings_total" : 1257
        }
    ]);
    // const Logo = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT&key="+process.env.NEXT_PUBLIC_GOOGLE_KEY
    // ดาต้าจำลอง
    useEffect(() => { 
        console.log('productInCart',productInCart) 
        if(productM.length===0 || productInCart.length===0){
            data.map((a , index)=>{
                return a.count = 0
            })
            setProductM(data)
            setData(data)
        }
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
       

        productM[index].count=productM[index].count+1;
        setProductM(productM)
        console.log('productM',productInCart)
        var sum = 0;
        for(let i=0;i<productInCart.length;i++){
            sum += productInCart[i].count;
        }
        setCountInCart(sum)
    }
    const deleteCart = (item,index) => {
        
        productM[index].count=productM[index].count-1;
        setProductM(productM)
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
