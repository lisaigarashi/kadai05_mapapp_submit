 
   //Initialization processing(bmapを読み込んで表示する)
    let map;
    function GetMap() {
    
        //1. Init
        map = new Bmap("#myMap");
    
        //2. map.startMap(lat, lon, "MapType", Zoom[1~20]);
        map.startMap(22.731216377248046,75.67485809326172, "load", 5);

        setTimeout(function(){
            map.changeMap(28.6080768816541,77.23510541036167, "load", 10);
        },3000);
        // after 6 seconds.
        setTimeout(function(){
            map.changeMap(13.076532395934535,80.20758499207945, "load", 10);
        },6000);
    }
    