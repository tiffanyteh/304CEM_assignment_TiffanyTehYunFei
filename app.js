const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const Record = require('./connect');
const path = require('path');
const apikey = 'pub_14028c266489a2070eea9ed90d97f63193b4'; //api key newsdata
const app = express();
const apikey1 = 'c903b70cd89f04d3afe75d9ca9535934'; //api key mediastack
var newstitle, link, newstitle1, link1, newstitle2, link2, newstitle3, link3;
var keyword, searchlink, keyword1, searchlink1, keyword2, searchlink2, keyword3, searchlink3, keyword4, searchlink4;
var keyword5, searchlink5, keyword6, searchlink6, keyword7, searchlink7, keyword8, searchlink8, keyword9, searchlink9;
var title, description, date, source, url, image;
var favtitle, favdescription, favdate, favsource, favurl, favimage;
var titlenews, linknews, descriptionnews, datenews, sourcenews, imagenews;
var titlenews1, linknews1, descriptionnews1, datenews1, sourcenews1, imagenews1;
var titlenews2, linknews2, descriptionnews2, datenews2, sourcenews2, imagenews2;
var titlenews3, linknews3, descriptionnews3, datenews3, sourcenews3, imagenews3;
var titlenews4, linknews4, descriptionnews4, datenews4, sourcenews4, imagenews4;
var titlenews5, linknews5, descriptionnews5, datenews5, sourcenews5, imagenews5;
var titlenews6, linknews6, descriptionnews6, datenews6, sourcenews6, imagenews6;
var titlenews7, linknews7, descriptionnews7, datenews7, sourcenews7, imagenews7;
var titlenews8, linknews8, descriptionnews8, datenews8, sourcenews8, imagenews8;
var titlenews9, linknews9, descriptionnews9, datenews9, sourcenews9, imagenews9;
var temp2;


//create news schema for home page
const newsSchema = new mongoose.Schema({

  newstitle: {type: String},
  link: {type: String}

});

//create search news schema for search page
const searchnewsSchema = new mongoose.Schema({

  titlenews: {type: String},
  linknews: {type: String},
  descriptionnews: {type: String},
  datenews: {type: String},
  sourcenews: {type: String},
  imagenews: {type: String}
  
});

//create favourite news schema for favourite page
const favnewsSchema = new mongoose.Schema({

  favotitle: {type: String},
  favourl: {type: String},
  favodescription: {type: String},
  favodate: {type: String},
  favosource: {type: String},
  favoimage: {type: String}
  
});

const News = mongoose.model('news', newsSchema);
const SearchNews = mongoose.model('searchnews', searchnewsSchema);
const FavNews = mongoose.model('favourites', favnewsSchema);

app.use(express.static(path.join(__dirname, 'client/build')));

//home page
app.get('/api/home', (req, res) =>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  //retrieve from news collection and send data to client
  News.find({}, function (err, docs) {
    newstitle = docs[0].newstitle;
    link = docs[0].link;
    newstitle1 = docs[1].newstitle;
    newstitle2 = docs[2].newstitle;
    newstitle3 = docs[3].newstitle;
    link1 = docs[1].link;
    link2 = docs[2].link;
    link3 = docs[3].link;
  });

    res.end(

        JSON.stringify({

          newstitle: newstitle,
          link: link,
          newstitle1: newstitle1,
          newstitle2: newstitle2,
          newstitle3: newstitle3,
          link1: link1,
          link2: link2,
          link3: link3
        })
      );
});

//search page
app.get('/api/search', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  //get parameter data
  const temp = req.query.s;
  const search = encodeURI(temp);

  const querystr = `https://newsdata.io/api/1/news?apikey=${apikey}&qInTitle=${search}&language=en`; 

  axios.get(querystr).then(response=>{

    if (response.data.totalResults<5){
      //no results found 
      keyword = null;
      searchlink = null;
      keyword1 =  null;
      searchlink1 = null;
      keyword2 =  null;
      searchlink2 = null;
      keyword3 =  null;
      searchlink3 = null;
      keyword4 =  null;
      searchlink4 = null;
      keyword5 =  null;
      searchlink5 =  null;
      keyword6 =  null;
      searchlink6 = null;
      keyword7 =  null;
      searchlink7 = null;
      keyword8 =  null;
      searchlink8 = null;
      keyword9 =  null;
      searchlink9 = null;

      res.end(

        JSON.stringify({
  
          keyword: keyword,
          searchlink: searchlink,
          keyword1: keyword1,
          searchlink1: searchlink1,
          keyword2: keyword2,
          searchlink2: searchlink2,
          keyword3: keyword3,
          searchlink3: searchlink3,
          keyword4: keyword4,
          searchlink4: searchlink4,
          keyword5: keyword5,
          searchlink5: searchlink5,
          keyword6: keyword6,
          searchlink6: searchlink6,
          keyword7: keyword7,
          searchlink7: searchlink7,
          keyword8: keyword8,
          searchlink8: searchlink8,
          keyword9: keyword9,
          searchlink9: searchlink9
        })
      );

    }
    else{
        //send to client
    keyword = response.data.results[0].title;
    searchlink = response.data.results[0].link;
    keyword1 = response.data.results[1].title;
    searchlink1 = response.data.results[1].link;
    keyword2 = response.data.results[2].title;
    searchlink2 = response.data.results[2].link;
    keyword3 = response.data.results[3].title;
    searchlink3 = response.data.results[3].link;
    keyword4 = response.data.results[4].title;
    searchlink4 = response.data.results[4].link;

    //assign to variable to save to db
    titlenews = response.data.results[0].title;
    linknews = response.data.results[0].link;
    descriptionnews = response.data.results[0].description;
    datenews = response.data.results[0].pubDate;
    sourcenews = response.data.results[0].source_id;
    imagenews = response.data.results[0].image_url;

    titlenews1 = response.data.results[1].title;
    linknews1 = response.data.results[1].link;
    descriptionnews1 = response.data.results[1].description;
    datenews1 = response.data.results[1].pubDate;
    sourcenews1 = response.data.results[1].source_id;
    imagenews1 = response.data.results[1].image_url;

    titlenews2 = response.data.results[2].title;
    linknews2 = response.data.results[2].link;
    descriptionnews2 = response.data.results[2].description;
    datenews2 = response.data.results[2].pubDate;
    sourcenews2 = response.data.results[2].source_id;
    imagenews2 = response.data.results[2].image_url;

    titlenews3 = response.data.results[3].title;
    linknews3 = response.data.results[3].link;
    descriptionnews3 = response.data.results[3].description;
    datenews3 = response.data.results[3].pubDate;
    sourcenews3 = response.data.results[3].source_id;
    imagenews3 = response.data.results[3].image_url;

    titlenews4 = response.data.results[4].title;
    linknews4 = response.data.results[4].link;
    descriptionnews4 = response.data.results[4].description;
    datenews4 = response.data.results[4].pubDate;
    sourcenews4 = response.data.results[4].source_id;
    imagenews4 = response.data.results[4].image_url;

    const querystr1 = `http://api.mediastack.com/v1/news?keywords=${search}&languages=en&access_key=${apikey1}`;
    
    axios.get(querystr1).then(response =>{
      // send to client 
      keyword5 = response.data.data[0].title;
      searchlink5 =  response.data.data[0].url;
      keyword6 = response.data.data[1].title;
      searchlink6 =  response.data.data[1].url;
      keyword7 = response.data.data[2].title;
      searchlink7 =  response.data.data[2].url;
      keyword8 = response.data.data[3].title;
      searchlink8 =  response.data.data[3].url;
      keyword9 = response.data.data[4].title;
      searchlink9 =  response.data.data[4].url;

      //assign to variable to save to db
      titlenews5 = response.data.data[0].title;
      linknews5 = response.data.data[0].url;
      descriptionnews5 = response.data.data[0].description;
      datenews5 = response.data.data[0].published_at;
      sourcenews5 = response.data.data[0].source;
      imagenews5 = response.data.data[0].image;

      titlenews6 = response.data.data[1].title;
      linknews6 = response.data.data[1].url;
      descriptionnews6 = response.data.data[1].description;
      datenews6 = response.data.data[1].published_at;
      sourcenews6 = response.data.data[1].source;
      imagenews6 = response.data.data[1].image;

      titlenews7 = response.data.data[2].title;
      linknews7 = response.data.data[2].url;
      descriptionnews7 = response.data.data[2].description;
      datenews7 = response.data.data[2].published_at;
      sourcenews7 = response.data.data[2].source;
      imagenews7 = response.data.data[2].image;

      titlenews8 = response.data.data[3].title;
      linknews8 = response.data.data[3].url;
      descriptionnews8 = response.data.data[3].description;
      datenews8 = response.data.data[3].published_at;
      sourcenews8 = response.data.data[3].source;
      imagenews8 = response.data.data[3].image;

      titlenews9 = response.data.data[4].title;
      linknews9 = response.data.data[4].url;
      descriptionnews9 = response.data.data[4].description;
      datenews9 = response.data.data[4].published_at;
      sourcenews9 = response.data.data[4].source;
      imagenews9 = response.data.data[4].image;

      //save data into searchnews collection
      searchnewsValue = new SearchNews ({
          titlenews:titlenews,
          linknews:linknews,
          descriptionnews:descriptionnews,
          datenews:datenews,
          sourcenews:sourcenews,
          imagenews:imagenews

      });
      
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews1,
        linknews:linknews1,
        descriptionnews:descriptionnews1,
        datenews:datenews1,
        sourcenews:sourcenews1,
        imagenews:imagenews1

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews2,
        linknews:linknews2,
        descriptionnews:descriptionnews2,
        datenews:datenews2,
        sourcenews:sourcenews2,
        imagenews:imagenews2

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews3,
        linknews:linknews3,
        descriptionnews:descriptionnews3,
        datenews:datenews3,
        sourcenews:sourcenews3,
        imagenews:imagenews3

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews4,
        linknews:linknews4,
        descriptionnews:descriptionnews4,
        datenews:datenews4,
        sourcenews:sourcenews4,
        imagenews:imagenews4

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews5,
        linknews:linknews5,
        descriptionnews:descriptionnews5,
        datenews:datenews5,
        sourcenews:sourcenews5,
        imagenews:imagenews5

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews6,
        linknews:linknews6,
        descriptionnews:descriptionnews6,
        datenews:datenews6,
        sourcenews:sourcenews6,
        imagenews:imagenews6

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews7,
        linknews:linknews7,
        descriptionnews:descriptionnews7,
        datenews:datenews7,
        sourcenews:sourcenews7,
        imagenews:imagenews7

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews8,
        linknews:linknews8,
        descriptionnews:descriptionnews8,
        datenews:datenews8,
        sourcenews:sourcenews8,
        imagenews:imagenews8

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 

      searchnewsValue = new SearchNews ({
        titlenews:titlenews9,
        linknews:linknews9,
        descriptionnews:descriptionnews9,
        datenews:datenews9,
        sourcenews:sourcenews9,
        imagenews:imagenews9

      });
    
      searchnewsValue
      .save()
      .then(result=> {
        console.log("Success" + result);
      })
      .catch (error=> {
        console.log("Error" + error);
      }); 


      res.end(

        JSON.stringify({
  
          keyword: keyword,
          searchlink: searchlink,
          keyword1: keyword1,
          searchlink1: searchlink1,
          keyword2: keyword2,
          searchlink2: searchlink2,
          keyword3: keyword3,
          searchlink3: searchlink3,
          keyword4: keyword4,
          searchlink4: searchlink4,
          keyword5: keyword5,
          searchlink5: searchlink5,
          keyword6: keyword6,
          searchlink6: searchlink6,
          keyword7: keyword7,
          searchlink7: searchlink7,
          keyword8: keyword8,
          searchlink8: searchlink8,
          keyword9: keyword9,
          searchlink9: searchlink9
        })
      );

    });
    
  } 
  
  });

});

//news page
app.get('/api/news', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp = req.query.title;
  const news = decodeURI(temp);
 
  //find whether news exist in favourites collection
  FavNews.find({favotitle: news}, function(err,docs){
    //not exist set button text to favourite
    if(docs==""){
      temp2 = "Favourite";
    }else{
      //if exist set button text to remove favourite
      temp2 = "Remove Favourite";
    }

  });

  //retrieve specific news data from searchnews collection based on parameter data
  SearchNews.find({titlenews: news}, function (err, docs) {
    
      title = docs[0].titlenews;
      description = docs[0].descriptionnews;
      date = docs[0].datenews;
      source = docs[0].sourcenews;
      url = docs[0].linknews;
      image = docs[0].imagenews;
    
  });

      res.end(

        JSON.stringify({
  
          title: title,
          url: url,
          description: description,
          date: date,
          source: source,
          image: image,
          temp2: temp2
          
        })
      );
});

//add to favourite page
app.get('/api/fav', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp = req.query.title;
  const news = decodeURI(temp);
  const temp1 = null;

  //retrieve news data from searchnews collection
  SearchNews.find({titlenews: news}, function (err, docs) {
    
    favtitle = docs[0].titlenews;
    favdescription = docs[0].descriptionnews;
    favdate = docs[0].datenews;
    favsource = docs[0].sourcenews;
    favurl = docs[0].linknews;
    favimage = docs[0].imagenews;

    //save the data into favourites collection
    favnewsValue = new FavNews ({
      favotitle:favtitle,
      favourl:favurl,
      favodescription:favdescription,
      favodate:favdate,
      favosource:favsource,
      favoimage:favimage
  
    });
  
    favnewsValue
    .save()
    .then(result=> {
        console.log("Success" + result);
    })
    .catch (error=> {
        console.log("Error" + error);
    }); 
  
  });

  res.end(

    JSON.stringify({
      temp1:temp1

    })
  );

});

//favourites page
app.get('/api/favourite', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  //retrieve all favourites from favourites collection
  FavNews.find({}, 'favotitle favourl  -_id' , function (err, docs) {
     
    res.end(

      JSON.stringify({
        
        docs: docs
      })
    );
  
  });

});

//favourites news page
app.get('/api/favnews', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp = req.query.title;
  const news = decodeURI(temp);

  //retrieve specific news data from favourites collection based on parameter data
  FavNews.find({favotitle: news}, function (err, docs) {
    
      title = docs[0].favotitle;
      description = docs[0].favodescription;
      date = docs[0].favodate;
      source = docs[0].favosource;
      url = docs[0].favourl;
      image = docs[0].favoimage;
    
  });

      res.end(

        JSON.stringify({
  
          title: title,
          url: url,
          description: description,
          date: date,
          source: source,
          image: image
          
        })
      );
});

//remove favourites page
app.get('/api/removefav', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp = req.query.title;
  const news = decodeURI(temp);
  const temp1 = null;

  //delete news data in favourites collection based on parameter data
  FavNews.deleteOne({favotitle: news}, function(err) {
      if(err) return handleError(err);
  });

  res.end(

    JSON.stringify({
      temp1:temp1

    })
  );

});

//edit favourite page
app.get('/api/editfav', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp = req.query.title;
  const news = decodeURI(temp);

  //retrieve favourite news title from favourites collection
  FavNews.find({favotitle: news}, function (err, docs) {
    
    title = docs[0].favotitle;
  
});

    res.end(

      JSON.stringify({

        title: title
        
      })
    );

});

//edit page
app.get('/api/edit', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp2 = req.query.d;
  const temp = req.query.t;
  const news = decodeURI(temp);
  const des = decodeURI(temp2);
  const temp1 = null;

  //update favourite news description based on parameter data
  FavNews.updateOne({favotitle: news}, {favodescription: des}, function(err, res){

  });

    res.end(

      JSON.stringify({

        temp1:temp1
        
      })
    );

});

//history page
app.get('/api/history', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  //retrieve all history from searchnews collection
  SearchNews.find({}, 'titlenews linknews  -_id' , function (err, docs) {
     
    res.end(

      JSON.stringify({
        
        docs: docs
      })
    );
  
  });

});

//clear history page
app.get('/api/removehistory', (req,res)=>{

  res.setHeader('Content-Type', 'application/json');
  res.setHeader("Access-Control-Allow-Origin", "*");

  const temp1 = null;

  //delete all news data in search history
  SearchNews.deleteMany({}, function(err) {
      if(err) return handleError(err);
  });

  res.end(

    JSON.stringify({
      temp1:temp1

    })
  );

});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(process.env.PORT);


