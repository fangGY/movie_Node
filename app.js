var express = require('express');

var port = process.env.PORT || 8080;  //可传递参数的端口号。0
var path = require('path');
var app = express();

var dir = path.join(__dirname ,'./views/pages'); //定义需要渲染的目录地址


app.set('views',dir);   //设置服务器渲染页面的目录地址。
app.set('view engine','jade');
app.listen(port);
//将静态资源文件所在的目录作为参数传递给 express.static 中间件就可以提供静态资源文件的访问
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'static_resource')));



console.log('imooc started on port '+ port);



//编写页面路由，get是访问的地址，res.render是默认ejs和jade两种模式。是找到相对路径的文件进行渲染。下面是传入的参数，默认是json格式。
//index page
app.get('/', (req,res) =>{   
    res.render('index',{
        title: '电影网站首页',
        movies: [{
          title: '异形：契约',
          _id: 1,
          poster: '/images/image1.jpg'
        },
        {
          title: '异形：契约',
          _id: 2,
          poster: '/images/image1.jpg'
        },
        {
          title: '异形：契约',
          _id: 3,
          poster: '/images/image1.jpg'
        },
        {
          title: '异形：契约',
          _id: 4,
          poster: '/images/image1.jpg'
        },
        {
          title: '异形：契约',
          _id: 5,
          poster: '/images/image1.jpg'
        }],
    });
});

//detail page
app.get('/movie/:id', (req,res) =>{
    res.render('detail',{
        title: '电影详情',
        movie: {
          director: '雷德利·斯科特',
          country: '美国',
          title: '异形：契约',
          year: 2017,
          poster: '/images/image1.jpg',
          language: '英语',
          flash: '/video/video.mp4',
          summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
        }
    });
});

app.get('/admin/movie', (req,res) =>{
    res.render('admin',{
        title: '电影录入',
        movie: {
          title: '',
          director: '',
          country: '',
          year: '',
          poster: '',
          flash: '',
          summary: '',
          language: ''
        }
    });
});

app.get('/admin/list', (req,res) =>{
    res.render('list',{
        title: '电影列表',
        movies: [{
          title: '异形：契约',
          _id: 1, 
          director: '雷德利·斯科特',
          country: '美国',
          year: 2017,
          poster: 'https://img3.doubanio.com/img/celebrity/small/32214.jpg',
          language: '英语',
          flash: 'http://119.188.38.131/youku/65743530DBB4C838FBA166544F/0300080100585FB87B799839BBD120136343F3-AD4F-8451-FC2A-A9554D727689.mp4?sid=049846040186412f9e92c&ctype=12&ccode=0401&duration=133&expire=18000&psid=599c21659cf2ed62339a7ba955d34987&ups_client_netip=114.240.103.157&ups_ts=1498460401&ups_userid=&utid=LT%2FBEcSPnjsCAXt3LLqrfLyH&vid=XMTg4NTUxNjQ5Ng%3D%3D&vkey=A57113a190f13ec64fa327c44ec8d116e&nk=411351972806_24974340174&ns=0_22165960&special=true',
          summary:'“科幻之父”雷德利-斯科特将为他所开创的《异形》系列带来新篇章。《异形：契约》的故事发生在《普罗米修斯》10年后，一群新的宇航员乘坐着“契约号”飞船前往遥远的星系寻找殖民地，他们来到一处看似天堂般的星球，实则是黑暗、危险的地狱，在那里他们见到了“普罗米修斯”号唯一的幸存者——由迈克尔·法斯宾德饰演的生化人大卫，一场毁灭性的巨大灾难即将到来。'
       
      }]
    });
});