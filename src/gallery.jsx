import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';


// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

const images = [
   {src:'https://images.unsplash.com/photo-1720048171080-78849cff8b19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8'}
   ,{src:'https://plus.unsplash.com/premium_photo-1723744998399-3f9882ae00a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'}
   ,{src:'https://images.unsplash.com/photo-1720048170996-40507a45c720?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D'}
   ,{src:'https://images.unsplash.com/photo-1603969409447-ba86143a03f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGN8ZW58MHx8MHx8fDA%3D'}
   ,{src:'https://images.unsplash.com/photo-1635514569146-9a9607ecf303?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGN8ZW58MHx8MHx8fDA%3D'}
   ,{src:'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1625126342596-f582ea3eecab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1505327191481-d31e1fb4ff79?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1590858078095-24c472408dfe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1606045882515-c8a4d190e08e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1606045740285-70a11746b3e7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1622536942365-ec054d0c6b29?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://plus.unsplash.com/premium_photo-1678112179122-50605ebc5697?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBjfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1511680059018-e7cc6c0f22c8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvbmVzfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1648104063913-9bd7d11af6cb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'}
   ,{src:'https://images.unsplash.com/photo-1612867532328-56ac3ee292b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'}
   ,{src:'https://images.unsplash.com/photo-1520189123429-6a76abfe7906?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'}
   ,{src:'https://images.unsplash.com/photo-1612185469080-68cec0c9b46a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'}
   ,{src:'https://images.unsplash.com/photo-1518991043280-1da61d9f3ac5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'}
  ,{src:'https://images.unsplash.com/photo-1698604009535-6546d59e86f3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpeGVsJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D'}
   ,{src:'https://images.unsplash.com/photo-1493836692373-ad82dc8644c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmVzfGVufDB8fDB8fHww'}
   ,{src:'https://images.unsplash.com/photo-1482176012301-7421d86c74bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpeGVsJTIwcGhvbmV8ZW58MHx8MHx8fDA%3D'}
]

 function Gallery() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}
            >

                {images.map((image, index) => {
                    return (
                        <a href={image.src} key={index}>
                            <img alt={image.alt} src={image.src} />
                        </a>
                    )
                })}


            </LightGallery>
        </div>
    );
}


export default Gallery;