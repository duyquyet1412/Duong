/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Button,
    View, 
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    TouchableHighlight,
    AppRegistry,
      ScrollView,
      TextInput,
    Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; 


var StudentData = [
    {
        "id": "GẤU PADDINGTON 2",
        "name": "Paddington 2 (2018)",
        "avata":
        "https://i.moveek.download/media/cache/full/media/f9261b4bc1fc0a1944e4f59a3b227e44e29bfc9c.jpg",
        "thongtin" : "Phim Gấu Paddington 2 hiện đang sống hạnh phúc cùng gia đình nhà Brown và là một nhân vật nổi tiếng tại Luân Đôn. Và để chuẩn bị cho sinh nhật thứ 100 của dì Lucy, chú đã phải làm nhiều việc vặt để có thể có được món quà vô cùng đặc biệt tặng dì; thế nhưng, món quà ấy bỗng bị mất cắp, Paddington cùng gia đình nhà Brown và những người bạn bắt đầu cuộc phiêu lưu mới để tìm lại món quà bị mất cắp cũng như tìm tên trộm giấu mặt đó..."
    },
    {
        "id": "LIÊN MINH CÔNG LÝ",
        "name": "Justice League (2017)",
        "avata":
        "https://media.phimbathu.com/uploads/2016/08/300/lien-minh-cong-ly4-201608960.jpg",
        "thongtin" : "Phim Liên Minh Công Lý là câu chuyện xuất phát từ hành động xả thân của Superman, Batman quyết định bắt tay với Wonder Woman. "
    },
    {
        "id": "SIÊU SAO SIÊU NGỐ",
        "name": "Trường Giang, SAM Bản Đẹp (2018)",
        "avata":
        "http://suckhoedoisong.vn/Images/phamquynh/2018/02/14/sieu_sao.jpg",
        "thongtin" : "Bộ phim Siêu Sao Siêu Ngố (Trường Giang – SAM – Đức Thịnh) xoay quanh hai anh em sinh đôi Thế Sơn – Thế Tùng, cùng do danh hài Trường Giang thể hiện. Một người là ngôi sao điện ảnh nổi tiếng, kẻ còn lại thì theo đuổi nghiệp chăn lợn ở dưới quê."
    },
    {
        "id": "QUẢ TIM THÉP",
        "name": "Bleeding Steel (2017)",
        "avata":
        "http://image.phimmoi.net/film/6503/poster.medium.jpg",
        "thongtin" : "Một đặc nhiệm Trung Quốc nhận nhiệm vụ bảo vệ nhà khoa học tài ba khỏi sự săn lùng của tổ chức tội phạm nguy hiểm. Trong suốt thời gian bên cạnh nhà khoa học, ông dần phát hiện những góc khuất mờ ám trong chương trình nghiên cứu của nhà khoa học này, trong số đó đặc biệt nhất là chương trình chế tạo ra cô gái mang trái tim thép. Liệu đây chỉ là một thí nghiệm y học bình thường hay nó là mầm mống của một loại vũ khí mới?"
    },
    {
        "id": "THẦN SẤM 3: THỜI KHẮC TẬN THẾ",
        "name": "Thor 3: Ragnarok (2017)",
        "avata":
        "http://image.phimmoi.net/film/3243/poster.medium.jpg",
        "thongtin" : "Ragnarok ám chỉ “tận cùng của vũ trụ”, đồng nghĩa với trận chiến sống còn của chín cõi (Nine Realms). Sau khi Loki Loki soán ngôi cha Odin, vị thần tinh quái này tiếp tục mở đường nhiễu loạn tiến từ cầu Bifrost vào trong Asgard.\nỞ bên kia vũ trụ, Thor (Chris Hemsworth) phải bước vào một cuộc chiến đầy khốc liệt với đối thủ mà anh sẽ gặp là một đồng đội cũ đến từ biệt đội Avenger – Hulk. Cuộc tìm kiếm sự sống còn của Thor khiến anh phải chạy đua với thời gian để ngăn chặn Hela (Cate Blanchett) tiêu diệt cả thế giới anh đang sống cùng nền văn minh Asgard."
    },
    {
        "id": "BIỆT ĐỘI SIÊU ANH HÙNG 3: CUỘC CHIẾN BẤT TẬN",
        "name": "Avengers: Infinity War - Part I (2018)",
        "avata":
        "http://image.phimmoi.net/film/3244/poster.medium.jpg",
        "thongtin" : "Biệt Đội Siêu Anh Hùng 3: Cuộc Chiến Bất Tận, Avengers: Infinity War - Part I 2018"
    },
    {
        "id": "NGƯỜI NHỆN: VỀ NHÀ",
        "name": "Spider-Man: Homecoming (2017)",
        "avata":
        "http://media.tinmoi.vn/2012/07/09/6_26_1341770523_08_120707cinespidey07_45e9b.jpg",
        "thongtin" : "Phim Người Nhện: Homecoming Peter Parker sẽ khoác lên mình một diện mạo hoàn toàn mới của Người Nhện. Được Tony Stark trang bị web-slinging, Người Nhện sẽ cực kì linh hoạt và thổi một luồng gió mới vào vũ trụ điện ảnh MCU"
    },
    {
        "id": "SIÊU ĐẠI CHIẾN THÁI BÌNH DƯƠNG 2: CUỘC NỔI DẬY",
        "name": "Pacific Rim 2: Uprising (2018)",
        "avata":
        "http://image.phimmoi.net/film/1/poster.medium.jpg",
        "thongtin" : "Xem Siêu Đại Chiến Thái Bình Dương 2: Cuộc Nổi Dậy Đã 10 năm kể từ trận chiến ở Breach nhưng các trận chiến trên đại dương vẫn không ngừng. Được chứng minh bằng chiến thắng tại Breach, chương tình Jaeger đã phát triển thành lực lượng phòng thủ toàn cầu mạnh nhất trong lịch sử nhân loại. PPDC hiện đang kêu gọi những người lính giỏi nhất và thông minh nhất để vươn lên trở thành thế hệ anh hùng kế tiếp. Khi mối đe dọa của Kaiju trở lại, chúng tôi sẽ sẵn sàng."
    },
    {
        "id": "NGỘ KHÔNG KỲ TRUYỆN",
        "name": "Wukong (2017)",
        "avata":
        "https://media.phimbathu.com/uploads/2017/07/300/1-201707625.jpg",
        "thongtin" : "Phim Ngộ Không Kỳ Truyện là câu chuyện về Tôn Ngộ Không (Bành Vu Yến đóng) khi chưa phải Tề Thiên Đại Thánh. Lúc đó, Ngộ Không cùng Dương Tiễn mang đầy nhiệt huyết khi theo học võ ở tiên giới. Khác với nguyên mẫu thông thường, nhân vật Tôn Ngộ Không thời đầu khá phong cách, giống một hiệp khách hơn “vua khỉ”"
    },
    {
        "id": "798 MƯỜI",
        "name": "798 Mười - Phim Tết 2018",
        "avata":
        "http://phim1vui.net/images/dustin-nguyen-mang-phim-vo-thuat-hai-ra-rap-ngay-tet-2.jpg",
        "thongtin" : "798 Mười Full HD Phim hài tết 2108 xoay quanh câu chuyện về anh bán bánh tiêu bị mất người yêu vào tay một trùm giang hồ thế lực, chẳng biết trông cậy vào đâu nên đành lôi người bạn thân nhất vào cuộc. Oái oăm thay, anh bạn thân lại bị mù, ở quê lần đầu lên thành phố cùng với một con vịt cưng. Phim lấy hành động và hài làm hướng đi chính, nhiều người cho rằng anh đang chọn làm một phim hài nhảm cho an toàn sau Bao giờ có yêu nhau có nội dung quá phức tạp"
    },
    {
        "id": "BÁO ĐEN",
        "name": "Black Panther (2018)",
        "avata":
        "https://znews-photo-td.zadn.vn/w1024/Uploaded/xbhunku/2018_02_17/chien_binh_bao_den_.jpg",
        "thongtin" : "Phim Báo Đen Vương quốc Wakanda, quê hương của Black Panther/ T'Challa hiện ra qua lời kể của một nhân chứng sống sót trở về. Đây là quốc gia khá khép kín và sở hữu lượng Vibranium lớn nhất trên thế giới. Black Panther - người cầm quyền của Wakanda sở hữu bộ áo giáp chống đạn và móng vuốt sắc nhọn, anh được miêu tả là “người tốt với trái tim nhân hậu”. "
    },
    {
        "id": "KONG: ĐẢO ĐẦU LÂU",
        "name": "Kong: Skull Island (2017)",
        "avata":
        "https://media.phimbathu.com/uploads/2017/03/300/16587305101581091169454689212542171562575784o-201703343.jpg",
        "thongtin" : "Phim Kong: Đảo Đầu Lâu nói về quái vật huyền thoại của Hollywood kể từ King Kong (2005). Phim lấy bối cảnh chủ yếu tại hòn đảo Đầu Lâu, quê hương của vua loài khỉ. "
    },
     {
        "id": "ĐẠI CHIẾN HÀNH TINH KHỈ",
        "name": "War for the Planet of the Apes (2017)",
        "avata":
        "http://image.phimmoi.net/film/4644/poster.medium.jpg",
        "thongtin" : "War for Planet of the Apes, phần phim thứ 3 và cũng là cuối cùng của trilogy Planet of the Apes. Tiếp nối phần trước, sau khi quân đội biết sự tồn tại của xã hội loài khỉ dưới sự chỉ huy của Caesar, họ quyết định đến chiến đấu chống lại Caesar, nhóm lính được dẫn đầu bởi một vị tướng tàn bạo. Về phần vị vua khỉ của chúng ta, sau những mất mát của mình, anh ta dần trở nên đen tối hơn, có những suy nghĩ độc đoán hơn về con người và cách thống lĩnh của mình. Số phận của hai giống loài này phụ thuộc vào cuộc chiến cuối cùng này! "
    },
     {
        "id": "PHÙ THỦY TỐI THƯỢNG",
        "name": "Doctor Strange (2016)",
        "avata":
        "https://media.phimbathu.com/uploads/2016/05/300/doctor-strange-phu-thuy-toi-thuong-2016-201605951.jpg",
        "thongtin" : "Phim Phù Thủy Tối Thượng Doctor Strange được chắp bút bởi biên kịch Jon Spaihts, Doctor Strange sẽ kể về cuộc đời của một bác sĩ phẫu thuật đầy kiêu ngạo Stephen Strange đã mãi mãi bị thay đổi sau một vụ tai nạn xe hơi khủng khiếp và cướp đi đôi bàn tay của anh ta. Từ đó, anh đã phải bắt đầu một cuộc hành trình tìm kiếm sự chữa trị khắp nơi trên thế giới. "
    }
];
module.export = StudentData;
class Login extends React.Component {
render() {
  return (
<ScrollView style={{padding: 20}}>
  <Text 
    style={{fontSize: 20,   marginVertical: 15, fontWeight:'bold',textAlign: 'center', color:'#ff0000'}}>
    Welcome to My app
  </Text>
  <TextInput placeholder='Email'  id='Email' keyboardType="email-address" style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25,fontWeight:'bold'}}/>
  <TextInput placeholder='Password'  id='Password'  secureTextEntry={true} style={{backgroundColor:'rgb(179, 255, 204)',
    borderRadius: 25, marginTop:10,fontWeight:'bold'}}/>
  <View style={{margin:7,}} />
  <Button 
    onPress={()=>this.props.navigation.navigate('List')}
    title="Login"/>
</ScrollView>
    )
  }
}
class FlatListStudent extends React.Component {
    static navigationOptions =
    {
        header: null
    };
    render(){
        return(
           <View style={{flex:1, marginTop:3,marginLeft: 8,
        marginRight: 3,}}>
 <FlatList
 data={StudentData}
 renderItem={({item, index})=>{
 return(
  <TouchableHighlight onPress={() =>{this.props.navigation.navigate('Details',{ ten: item.name, anh: item.avata,id:item.id,thongtin:item.thongtin } ) }}>

  <View style={{flex:1, flexDirection:'row', backgroundColor: index % 2 == 0 ? '#FFFFCC': 'white', height: 90,
            padding: 5,}}>
      <Image 
      source={{uri: item.avata}}
      style={{width: 70, height:70,margin:5}}
      />
    <View style={{flex:1 }}>
      <Text style={{fontSize: 18,
        fontWeight: 'bold',
        color: 'red'}}> {item.id} </Text>
      <Text style={{color:'black', fontSize:17}}> {item.name}  </Text>
     </View>
  </View>

  </TouchableHighlight>
 );
 }}
 />
 </View>
         

        );
    }
}



class DetailsScreen extends React.Component {
  render() {

    return (
      <View style={{ alignItems: 'center', justifyContent: 'center'}} >
      <View>
        <Text  style={{fontSize:20,fontWeight:'bold',margin:10, alignItems: 'center', justifyContent: 'center',color:'black'}}>Thông Tin</Text>
        </View>
        
              <View>
                    <Image
                        style={{ width: 250, height: 250}}
                        source={{ uri: this.props.navigation.state.params.anh }}
                    />
                
                  
                    </View>
                    <Text   style={{ fontSize: 20, color: '#000', marginTop: 10,fontWeight:'bold',color:'#ff0000' }}>  {this.props.navigation.state.params.id}</Text>
                   <Text
                        style={{ fontSize: 20, color: '#000' }}
                    >
                        {this.props.navigation.state.params.ten}
                    </Text>
                    <Text style={{ fontSize: 14, color: '#000'}}>Mô Tả : {this.props.navigation.state.params.thongtin}</Text>

        <Button
          title="Back"
          onPress={() => this.props.navigation.goBack()
          }
        />
      </View>

    );
  }
}


const RootStack = StackNavigator(
  {
    Home: {
      screen: Login,
    },
    Details: {
      screen: DetailsScreen,
    },
    List:{
      screen:FlatListStudent,
    },
  },
  {

    headerMode:'none',  }
);
export default class App extends React.Component {
  render() {  
    return <RootStack />;
  }
}
