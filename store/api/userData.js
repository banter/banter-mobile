import API from '../../constants/api';
import {getData} from './index';

const sampleData = {'name':'foryou','playlist':[{'discussionId':'8b2ab4c2-9e03-474e-91d1-91f75c3bbe7b','podcastId':'4b411425-0a78-4bf1-ba51-ee4eab189d23','podcastTitle':'The Ringer NBA Show','podcastThumbnailUrl':'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/95/aa/cb/95aacb89-c62c-6c4f-1a6c-4e2df1768a28/mza_17814985688883734395.jpeg/600x600bb.jpg','tags':[],'episodeId':'88c78be9-801e-4234-a5f5-cf526fe10e36','episodeTitle':'Can Miami Make the 2020 NBA Finals Even More Interesting? | The Mismatch','episodePlaybackUrl':'https://traffic.megaphone.fm/GLT1950793500.mp3','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':6,'hour':7,'minute':0,'second':0,'dayOfWeek':'TUESDAY','dayOfYear':280,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':'Whether they think that Miami has a shot to make this series even more interesting','startTime':'31:47','startTimeMillis':1907000,'endTime':'00:45:07','endTimeMillis':2707000,'duration':'PT13M20S','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0},{'discussionId':'1363c27d-5025-455b-8210-1593063d8d75','podcastId':'62462c1e-4369-47ac-8a06-67e323edded5','podcastTitle':'49ers Talk with Matt Maiocco and Laura Britt','podcastThumbnailUrl':'https://is3-ssl.mzstatic.com/image/thumb/Podcasts124/v4/ca/87/c1/ca87c1ad-fb2f-67cd-822e-86b260a3aeee/mza_13981207655824935383.jpeg/600x600bb.jpg','tags':[],'episodeId':'d45a48b4-7091-4676-88fb-d79bcf61d259','episodeTitle':"249. 49ers' comeback bid falls short against Eagles",'episodePlaybackUrl':'https://dts.podtrac.com/redirect.mp3/chtbl.com/track/478498/rss.art19.com/episodes/9f560158-b5fb-4c69-a2d1-2cdf9a7028fb.mp3','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':5,'hour':6,'minute':10,'second':50,'dayOfWeek':'MONDAY','dayOfYear':279,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':'Jordan details his early career struggles','startTime':'22:03','startTimeMillis':1323000,'endTime':'25:53','endTimeMillis':1553000,'duration':'PT3M50S','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0},{'discussionId':'91c5fdf1-f3e6-4891-b568-1b1749baf09d','podcastId':'e4c8ebbb-f1be-4f89-875f-44ec27d3cbd9','podcastTitle':'Green Light with Chris Long','podcastThumbnailUrl':'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/f0/18/4b/f0184b7f-c401-d19c-dfe1-7bf52de5abbb/mza_1325440088154844593.jpg/600x600bb.jpg','tags':[{'id':'16232d30-2bf2-4a9c-9932-5266919a3321','type':'person','value':'Chris Long','imageUrl':'https://cdn.vox-cdn.com/thumbor/X7WP3UtS3ZcbjHaxl8jHWhUFuy0=/0x0:3000x2151/1200x800/filters:focal(1247x740:1727x1220)/cdn.vox-cdn.com/uploads/chorus_image/image/63882477/1072649044.jpg.0.jpg'},{'id':'b80b3661-cc69-4cd6-b4ab-04f28c2ac4db','type':'sport','value':'Football','imageUrl':'https://sportshub.cbsistatic.com/i/r/2019/09/26/f81faf11-54b5-4c2f-9d7f-d129b9e45803/thumbnail/1200x675/beefd31357d4275a3ae41939e2b02019/college-football-general.jpg'}],'episodeId':'cb1ea188-0f39-422d-b558-1ec4b5f08594','episodeTitle':'Cam Jordan on Saints & Covid. 2020 NFL Quarterly Reports & Week 4 Superlatives.','episodePlaybackUrl':'https://traffic.megaphone.fm/WMARKETING2142764811.mp3?updated=1601936643','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':5,'hour':20,'minute':52,'second':0,'dayOfWeek':'MONDAY','dayOfYear':279,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':"Open and Watching Football in Chris Long's Man Cave",'startTime':'0:53','startTimeMillis':53000,'endTime':'31:15','endTimeMillis':1875000,'duration':'PT30M22S','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0},{'discussionId':'1b56515e-b0c9-4d9b-99c5-9ec5144ace29','podcastId':'f47dc339-7821-40af-b130-8abc09bc7616','podcastTitle':'No Laying Up - Golf Podcast','podcastThumbnailUrl':'https://is4-ssl.mzstatic.com/image/thumb/Podcasts128/v4/7e/07/58/7e0758e6-18a3-ac37-6048-5b09b07061cf/mza_3340607503628937671.jpg/600x600bb.jpg','tags':[],'episodeId':'b5613bf7-3b00-4ac3-bf32-27ea7b3c6c1e','episodeTitle':'NLU Podcast, Episode 362: Oregon Trip Recap, Part I','episodePlaybackUrl':'http://feedproxy.google.com/~r/NLUpodcasts/~5/OX7p3esVLHQ/ts6-pt1-final-mix.mp3','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':5,'hour':1,'minute':17,'second':0,'dayOfWeek':'MONDAY','dayOfYear':279,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':'Old Macdonald','startTime':'56:30','startTimeMillis':3390000,'endTime':'1:06:00','endTimeMillis':3960000,'duration':'PT9M30S','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0},{'discussionId':'43830b08-7efd-4f2a-a412-f7cb4e34a8d9','podcastId':'dd124da8-15ce-4fe7-b103-cd9298eb310c','podcastTitle':'That SEC Football Podcast','podcastThumbnailUrl':'https://is4-ssl.mzstatic.com/image/thumb/Podcasts114/v4/2a/46/e2/2a46e2ff-bade-6426-cd2a-359961da2b29/mza_11140821394106437221.jpg/600x600bb.jpg','tags':[{'id':'0c8c2d32-ff34-4908-ba14-8e9819904c85','type':'person','value':'ED Orgeron','imageUrl':'https://www.onlinegambling.com/news/wp-content/uploads/2019/12/edorgeron.png'},{'id':'5e848616-6a83-4be4-84f1-e7a71e84daf1','type':'person','value':'Derek Mason','imageUrl':'https://cdn.vox-cdn.com/thumbor/K7dh90pDK7wPF-e3G34lqixWwBA=/0x0:2048x2633/1200x800/filters:focal(799x444:1125x770)/cdn.vox-cdn.com/uploads/chorus_image/image/64688134/usa_today_11726077.0.jpg'}],'episodeId':'ae91509e-2eab-4c2e-96cf-fb951948dd68','episodeTitle':"Week 2 reactions: Arkansas ends the streak! (as Mike predicted), Georgia destroys Auburn, Tennessee's OL is legit, Will Muschamp's coaching costs Carolina again, Ole Miss heating up, Kentucky may be a dud",'episodePlaybackUrl':'https://stream.redcircle.com/episodes/1a050e45-81ef-44ee-9e51-27e93fa51eac/stream.mp3','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':5,'hour':10,'minute':0,'second':0,'dayOfWeek':'MONDAY','dayOfYear':279,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':'Ed Orgeron and Derek Mason post game comments','startTime':'1:31:00','startTimeMillis':5460000,'endTime':'1:36:00','endTimeMillis':5760000,'duration':'PT5M','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0},{'discussionId':'5594644d-e867-4f33-af03-859af32a14e1','podcastId':'5a06f15a-6229-40db-b557-3a15eac07532','podcastTitle':'Blueshirts Breakaway: A show about the New York Rangers','podcastThumbnailUrl':'https://is3-ssl.mzstatic.com/image/thumb/Podcasts123/v4/d6/2b/82/d62b820a-0685-9500-191d-71a83fdcaa12/mza_1083706086703914164.jpg/600x600bb.jpg','tags':[{'id':'9d58e42a-1938-4e81-8afc-6c494134d136','type':'person','value':'Drew Way','imageUrl':'https://abcmusic-production-au.s3-ap-southeast-2.amazonaws.com/s3fs-public/Drew%20McAlister_Coming%20Your%20Way_COVER%20JPEG%20%281500x1500%29.jpg'}],'episodeId':'3007661d-e096-4b9e-9da1-2842304bf785','episodeTitle':'EP - 255 Lafrenière Draft Day is Upon Us & 1st Round Mock Draft with Drew Way ','episodePlaybackUrl':'https://traffic.megaphone.fm/TAMC5687178525.mp3?updated=1601949691','episodePublishDate':{'nano':0,'year':2020,'monthValue':10,'dayOfMonth':6,'hour':9,'minute':0,'second':0,'dayOfWeek':'TUESDAY','dayOfYear':280,'month':'OCTOBER','chronology':{'calendarType':'iso8601','id':'ISO'}},'description':'Blueshirts Breakaway Prospect Guru Drew Way joins the Breakaway to do an entire 1st round mock draft to get everyone ready for the big night','startTime':'22:24','startTimeMillis':1344000,'endTime':'1:17:06','endTimeMillis':4626000,'duration':'PT54M42S','isEndTimeEstimated':true,'hasUserLiked':false,'userListenProgress':null,'likedCount':0,'playedCount':0}]};

export async function getForYou() {
  const url = `${API.BASE_URL}${API.TOPICS}${API.FORYOU}?limit=15`;
    //   url= https://api.banteraudio.com/v1/topics/for-you?limit=15 (Throwing ERROR SO I THINK IT HAS TO DO WITH not having the right tokens )
    let data = await getData(url);
return sampleData;
}
